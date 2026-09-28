(() => {
  "use strict";

  const REPORT_ENDPOINT = "https://fplengine-web.vercel.app/api/index?analytics=report";
  const AUTO_REFRESH_MS = 60000;

  const auth = document.querySelector("[data-auth]");
  const dashboard = document.querySelector("[data-dashboard]");
  const form = document.querySelector("[data-auth-form]");
  const keyInput = document.querySelector("#analytics-key");
  const toggleKeyButton = document.querySelector("[data-toggle-key]");
  const authStatus = document.querySelector("[data-auth-status]");
  const status = document.querySelector("[data-status]");
  const generated = document.querySelector("[data-generated]");
  const refreshButton = document.querySelector("[data-refresh]");
  const lockButton = document.querySelector("[data-lock]");
  const rangeButtons = [...document.querySelectorAll("[data-range]")];

  const fmt = new Intl.NumberFormat("en-GB");
  const countryNames = typeof Intl.DisplayNames === "function"
    ? new Intl.DisplayNames(["en"], { type: "region" })
    : null;

  let range = "7d";
  let key = "";
  let refreshTimer = null;
  let loading = false;

  function countryLabel(code) {
    if (!code || code === "Unknown") return "Unknown";
    try { return countryNames?.of(code) || code; } catch { return code; }
  }

  function duration(seconds) {
    const value = Math.max(0, Math.round(Number(seconds || 0)));
    if (value < 60) return value + "s";
    if (value < 3600) return Math.floor(value / 60) + "m " + (value % 60) + "s";
    return Math.floor(value / 3600) + "h " + Math.floor((value % 3600) / 60) + "m";
  }

  function relativeTime(value) {
    const date = new Date(value);
    const seconds = Math.max(0, Math.round((Date.now() - date.getTime()) / 1000));
    if (!Number.isFinite(seconds)) return "—";
    if (seconds < 10) return "just now";
    if (seconds < 60) return seconds + "s ago";
    if (seconds < 3600) return Math.floor(seconds / 60) + "m ago";
    if (seconds < 86400) return Math.floor(seconds / 3600) + "h ago";
    return Math.floor(seconds / 86400) + "d ago";
  }

  function rangeLabel(value) {
    return ({
      "1d": "last 24 hours",
      "7d": "last 7 days",
      "30d": "last 30 days",
      "90d": "last 90 days",
      "all": "all time"
    })[value] || value;
  }

  function pathLabel(path) {
    const value = String(path || "/");
    if (value === "/") return "Home";
    if (value === "/resume/" || value === "/resume") return "Résumé";
    if (value === "/projects/" || value === "/projects") return "Projects";
    if (value === "/privacy/" || value === "/privacy") return "Privacy";
    return value.replace(/^\//, "").replace(/\/$/, "").replaceAll("-", " ") || "Home";
  }

  function actionLabel(value) {
    return String(value || "Unknown")
      .replaceAll("_", " ")
      .replace(/\b\w/g, letter => letter.toUpperCase());
  }

  function setMetric(name, value) {
    const node = document.querySelector('[data-metric="' + name + '"]');
    if (!node) return;
    node.textContent = name === "avg_session_seconds"
      ? duration(value)
      : fmt.format(Number(value || 0));
  }

  function setLoading(value, announce = true) {
    loading = value;
    dashboard.setAttribute("aria-busy", value ? "true" : "false");
    dashboard.classList.toggle("is-loading", value);
    refreshButton.disabled = value;
    rangeButtons.forEach(button => { button.disabled = value; });
    if (value && announce) status.textContent = "Refreshing analytics…";
  }

  function emptyRow(body, colspan = 3, copy = "No data in this period yet.") {
    body.textContent = "";
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.colSpan = colspan;
    td.className = "empty-cell";
    td.textContent = copy;
    tr.append(td);
    body.append(tr);
  }

  function renderPages(rows) {
    const body = document.querySelector('[data-table="pages"]');
    if (!rows?.length) return emptyRow(body, 3);
    body.textContent = "";
    rows.forEach(row => {
      const tr = document.createElement("tr");
      const cells = [
        pathLabel(row.label),
        fmt.format(Number(row.visitors || 0)),
        fmt.format(Number(row.value || 0))
      ];
      cells.forEach(value => {
        const td = document.createElement("td");
        td.textContent = value;
        tr.append(td);
      });
      body.append(tr);
    });
  }

  function renderLive(rows) {
    const body = document.querySelector('[data-table="live"]');
    if (!rows?.length) return emptyRow(body, 6, "Nobody is active in the last five minutes.");
    body.textContent = "";

    rows.forEach(row => {
      const tr = document.createElement("tr");
      const location = row.country_code
        ? countryLabel(row.country_code) + (row.region_code ? " · " + row.region_code : "")
        : "Unknown";
      const device = [row.device_type, row.browser_name].filter(Boolean).join(" · ") || "Unknown";

      const values = [
        ["Visitor", "#" + (row.visitor || "anonymous")],
        ["Location", location],
        ["Device", device],
        ["Entry", pathLabel(row.entry_path)],
        ["Source", row.referrer_host || "Direct"],
        ["Seen", relativeTime(row.last_seen_at)]
      ];

      values.forEach(([label, text], index) => {
        const td = document.createElement("td");
        td.textContent = text;
        td.dataset.label = label;
        if (index === 0) td.className = "visitor-id";
        tr.append(td);
      });

      body.append(tr);
    });
  }

  function rankList(name, rows, formatter = value => String(value || "Unknown")) {
    const root = document.querySelector('[data-list="' + name + '"]');
    if (!root) return;
    root.textContent = "";

    if (!rows?.length) {
      const empty = document.createElement("p");
      empty.className = "chart-empty";
      empty.textContent = "No data in this period yet.";
      root.append(empty);
      return;
    }

    const max = Math.max(...rows.map(row => Number(row.value || 0)), 1);

    rows.forEach(row => {
      const item = document.createElement("div");
      item.className = "rank-row";

      const copy = document.createElement("div");
      copy.className = "rank-row__copy";

      const head = document.createElement("div");
      head.className = "rank-row__label";

      const label = document.createElement("span");
      const value = document.createElement("span");
      label.textContent = formatter(row.label);
      value.textContent = fmt.format(Number(row.value || 0));

      head.append(label, value);

      const bar = document.createElement("div");
      bar.className = "rank-row__bar";
      bar.setAttribute("aria-hidden", "true");

      const fill = document.createElement("i");
      fill.style.width = Math.max(3, Number(row.value || 0) / max * 100) + "%";
      bar.append(fill);

      copy.append(head, bar);

      const strong = document.createElement("strong");
      strong.textContent = fmt.format(Number(row.value || 0));
      strong.setAttribute("aria-hidden", "true");

      item.append(copy, strong);
      root.append(item);
    });
  }

  function drawSeries(svg, ns, rows, accessor, x, y, className, pointClass = null) {
    const points = rows.map((row, index) => [x(index), y(Number(accessor(row) || 0))]);
    if (!points.length) return points;

    const line = points
      .map((point, index) => (index ? "L" : "M") + point[0].toFixed(1) + " " + point[1].toFixed(1))
      .join(" ");

    const path = document.createElementNS(ns, "path");
    path.setAttribute("d", line);
    path.setAttribute("class", className);
    svg.append(path);

    if (pointClass) {
      points.forEach((point, index) => {
        const circle = document.createElementNS(ns, "circle");
        circle.setAttribute("cx", point[0]);
        circle.setAttribute("cy", point[1]);
        circle.setAttribute("r", rows.length > 45 ? "2" : "3");
        circle.setAttribute("class", pointClass);
        const title = document.createElementNS(ns, "title");
        title.textContent =
          new Date(rows[index].bucket).toLocaleString("en-GB", {
            day: "numeric",
            month: "short",
            hour: range === "1d" ? "2-digit" : undefined,
            timeZone: "UTC"
          }) +
          ": " +
          fmt.format(Number(rows[index].visitors || 0)) +
          " visitors · " +
          fmt.format(Number(rows[index].pageviews || 0)) +
          " page views";
        circle.append(title);
        svg.append(circle);
      });
    }

    return points;
  }

  function chart(rows) {
    const root = document.querySelector("[data-chart]");
    root.textContent = "";

    if (!rows?.length) {
      const empty = document.createElement("div");
      empty.className = "chart-empty";
      empty.textContent = "Traffic will appear here after visits are recorded in this period.";
      root.append(empty);
      return;
    }

    const width = 920;
    const height = 280;
    const pad = { left: 42, right: 18, top: 16, bottom: 34 };
    const allValues = rows.flatMap(row => [Number(row.visitors || 0), Number(row.pageviews || 0)]);
    const max = Math.max(...allValues, 1);

    const x = index =>
      pad.left +
      (rows.length === 1 ? (width - pad.left - pad.right) / 2 : index / (rows.length - 1) * (width - pad.left - pad.right));
    const y = value =>
      height - pad.bottom - (value / max) * (height - pad.top - pad.bottom);

    const ns = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(ns, "svg");
    svg.setAttribute("viewBox", "0 0 " + width + " " + height);
    svg.setAttribute("class", "traffic-chart");
    svg.setAttribute("role", "img");
    svg.setAttribute("aria-label", "Visitors and page views over " + rangeLabel(range));

    [0, .5, 1].forEach(ratio => {
      const value = Math.round(max * (1 - ratio));
      const gy = pad.top + ratio * (height - pad.top - pad.bottom);

      const grid = document.createElementNS(ns, "line");
      grid.setAttribute("x1", pad.left);
      grid.setAttribute("x2", width - pad.right);
      grid.setAttribute("y1", gy);
      grid.setAttribute("y2", gy);
      grid.setAttribute("class", "chart-grid");
      svg.append(grid);

      const label = document.createElementNS(ns, "text");
      label.setAttribute("x", pad.left - 10);
      label.setAttribute("y", gy + 3);
      label.setAttribute("text-anchor", "end");
      label.setAttribute("class", "chart-y-label");
      label.textContent = fmt.format(value);
      svg.append(label);
    });

    const visitorPoints = rows.map((row, index) => [x(index), y(Number(row.visitors || 0))]);
    if (visitorPoints.length > 1) {
      const line = visitorPoints
        .map((point, index) => (index ? "L" : "M") + point[0].toFixed(1) + " " + point[1].toFixed(1))
        .join(" ");
      const area =
        line +
        " L " + visitorPoints.at(-1)[0].toFixed(1) + " " + (height - pad.bottom) +
        " L " + visitorPoints[0][0].toFixed(1) + " " + (height - pad.bottom) + " Z";
      const areaPath = document.createElementNS(ns, "path");
      areaPath.setAttribute("d", area);
      areaPath.setAttribute("class", "chart-area");
      svg.append(areaPath);
    }

    drawSeries(svg, ns, rows, row => row.pageviews, x, y, "chart-line chart-line--views");
    drawSeries(svg, ns, rows, row => row.visitors, x, y, "chart-line", "chart-point");

    const labelIndexes = [...new Set([0, Math.floor((rows.length - 1) / 2), rows.length - 1])];
    labelIndexes.forEach(index => {
      const text = document.createElementNS(ns, "text");
      text.setAttribute("x", x(index));
      text.setAttribute("y", height - 8);
      text.setAttribute("text-anchor", index === 0 ? "start" : index === rows.length - 1 ? "end" : "middle");
      text.setAttribute("class", "chart-label");
      text.textContent = new Date(rows[index].bucket).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        timeZone: "UTC"
      });
      svg.append(text);
    });

    root.append(svg);
  }

  function recent(rows) {
    const list = document.querySelector("[data-recent]");
    list.textContent = "";

    if (!rows?.length) {
      const li = document.createElement("li");
      li.textContent = "No recent activity in this period yet.";
      list.append(li);
      return;
    }

    rows.forEach(row => {
      const li = document.createElement("li");

      const time = document.createElement("time");
      const date = new Date(row.occurred_at);
      time.dateTime = date.toISOString();
      time.textContent = date.toLocaleString("en-GB", {
        day: "2-digit",
        month: "short",
        hour: "2-digit",
        minute: "2-digit"
      });

      const main = document.createElement("span");
      main.className = "activity-main";

      const action = document.createElement("strong");
      action.textContent = actionLabel(row.event_name);

      const subject = row.target_label || row.section_id || pathLabel(row.path);
      main.append(action, document.createTextNode(" " + subject));

      const meta = document.createElement("span");
      meta.className = "activity-meta";
      meta.textContent = [
        row.country_code ? countryLabel(row.country_code) : "Unknown",
        row.device_type || "device",
        row.referrer_host || "Direct",
        row.visitor ? "#" + row.visitor : null
      ].filter(Boolean).join(" · ");

      li.append(time, main, meta);
      list.append(li);
    });
  }

  function renderMetricSummaries(metrics) {
    const visitors = Number(metrics.visitors || 0);
    const views = Number(metrics.pageviews || 0);
    const returning = Number(metrics.returning_visitors || 0);
    const viewsPerVisitor = visitors ? views / visitors : 0;
    const returningRate = visitors ? Math.round(returning / visitors * 100) : 0;

    const viewSummary = document.querySelector("[data-views-summary]");
    const returningSummary = document.querySelector("[data-returning-summary]");
    const trafficSummary = document.querySelector("[data-traffic-summary]");

    if (viewSummary) {
      viewSummary.textContent = visitors
        ? viewsPerVisitor.toFixed(viewsPerVisitor >= 10 ? 0 : 1) + " views per visitor"
        : "Pages opened";
    }

    if (returningSummary) {
      returningSummary.textContent = visitors
        ? returningRate + "% of visitors returned"
        : "Seen in more than one session";
    }

    if (trafficSummary) {
      trafficSummary.textContent = visitors
        ? fmt.format(visitors) + " visitors generated " + fmt.format(views) + " page views."
        : "Visitors and page views across the selected period.";
    }
  }

  function startAutoRefresh() {
    stopAutoRefresh();
    refreshTimer = window.setInterval(() => {
      if (!document.hidden && key && !loading) load({ silent: true });
    }, AUTO_REFRESH_MS);
  }

  function stopAutoRefresh() {
    if (refreshTimer) window.clearInterval(refreshTimer);
    refreshTimer = null;
  }

  async function load({ silent = false } = {}) {
    if (!key || loading) return;

    setLoading(true, !silent);
    status.classList.remove("is-error");

    try {
      const response = await fetch(REPORT_ENDPOINT + "&range=" + encodeURIComponent(range), {
        mode: "cors",
        credentials: "omit",
        headers: { Authorization: "Bearer " + key },
        cache: "no-store"
      });

      const data = await response.json().catch(() => ({}));

      if (response.status === 401) throw new Error("That analytics key was not accepted.");
      if (!response.ok) throw new Error("Analytics could not be loaded. Try again.");

      const metrics = data.metrics || {};
      [
        "visitors",
        "pageviews",
        "sessions",
        "active_now",
        "avg_session_seconds",
        "returning_visitors"
      ].forEach(name => setMetric(name, metrics[name]));

      const audience = document.querySelector("[data-audience]");
      if (audience) {
        audience.textContent =
          fmt.format(Number(metrics.new_visitors || 0)) +
          " new · " +
          fmt.format(Number(metrics.returning_visitors || 0)) +
          " returning";
      }

      renderMetricSummaries(metrics);
      chart(data.timeseries);
      renderLive(data.live);
      renderPages(data.topPaths);
      rankList("sections", data.sections, value => actionLabel(value));
      rankList("referrers", data.referrers);
      rankList("campaigns", data.campaigns);
      rankList("countries", data.countries, countryLabel);
      rankList("devices", data.devices);
      rankList("browsers", data.browsers);
      rankList("operatingSystems", data.operatingSystems);
      rankList("interactions", data.interactions, value => actionLabel(value));
      recent(data.recent);

      generated.textContent =
        "Updated " +
        new Date(data.generatedAt).toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit"
        });

      status.textContent = "Showing " + rangeLabel(range) + " · auto-refreshes every minute";
      auth.hidden = true;
      dashboard.hidden = false;
      authStatus.textContent = "";
      startAutoRefresh();
    } catch (error) {
      status.classList.add("is-error");
      status.textContent = error.message;

      if (dashboard.hidden) {
        authStatus.textContent = error.message;
        auth.hidden = false;
        keyInput.focus();
      }
    } finally {
      setLoading(false, false);
    }
  }

  form.addEventListener("submit", event => {
    event.preventDefault();
    key = keyInput.value.trim();
    if (!key) return;

    try { sessionStorage.setItem("pkm.analytics.dashboard.key", key); } catch {}

    authStatus.textContent = "Checking access…";
    load();
  });

  toggleKeyButton.addEventListener("click", () => {
    const revealing = keyInput.type === "password";
    keyInput.type = revealing ? "text" : "password";
    toggleKeyButton.textContent = revealing ? "Hide" : "Show";
    toggleKeyButton.setAttribute("aria-label", (revealing ? "Hide" : "Show") + " analytics key");
    keyInput.focus();
  });

  rangeButtons.forEach(button => {
    button.addEventListener("click", () => {
      const nextRange = button.dataset.range || "7d";
      if (nextRange === range) return;

      range = nextRange;
      rangeButtons.forEach(item => {
        const active = item === button;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-pressed", active ? "true" : "false");
      });

      try { sessionStorage.setItem("pkm.analytics.dashboard.range", range); } catch {}
      load();
    });
  });

  refreshButton.addEventListener("click", () => load());

  lockButton.addEventListener("click", () => {
    key = "";
    stopAutoRefresh();
    try { sessionStorage.removeItem("pkm.analytics.dashboard.key"); } catch {}

    dashboard.hidden = true;
    auth.hidden = false;
    keyInput.value = "";
    keyInput.type = "password";
    toggleKeyButton.textContent = "Show";
    toggleKeyButton.setAttribute("aria-label", "Show analytics key");
    authStatus.textContent = "";
    keyInput.focus();
  });

  document.addEventListener("visibilitychange", () => {
    if (!document.hidden && key && !dashboard.hidden && !loading) load({ silent: true });
  });

  try {
    const savedRange = sessionStorage.getItem("pkm.analytics.dashboard.range");
    if (savedRange && rangeButtons.some(button => button.dataset.range === savedRange)) {
      range = savedRange;
      rangeButtons.forEach(button => {
        const active = button.dataset.range === range;
        button.classList.toggle("is-active", active);
        button.setAttribute("aria-pressed", active ? "true" : "false");
      });
    }

    const savedKey = sessionStorage.getItem("pkm.analytics.dashboard.key");
    if (savedKey) {
      key = savedKey;
      keyInput.value = savedKey;
      load();
    }
  } catch {}
})();