(() => {
  "use strict";

  const REPORT_ENDPOINT = "https://fplengine-web.vercel.app/api/index?analytics=report";
  const AUTO_REFRESH_MS = 60000;
  const KEY_STORAGE = "pkm.analytics.dashboard.key";
  const RANGE_STORAGE = "pkm.analytics.dashboard.range";
  const VIEW_STORAGE = "pkm.analytics.dashboard.view";

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
  const viewTabs = [...document.querySelectorAll("[data-view]")];
  const viewPanels = [...document.querySelectorAll("[data-view-panel]")];

  const fmt = new Intl.NumberFormat("en-GB");
  const countryNames = typeof Intl.DisplayNames === "function"
    ? new Intl.DisplayNames(["en"], { type: "region" })
    : null;

  let range = "7d";
  let activeView = "pulse";
  let key = "";
  let refreshTimer = null;
  let loading = false;
  let hasLoaded = false;
  let lastData = null;

  function countryLabel(code) {
    if (!code || code === "Unknown") return "Unknown";
    try { return countryNames?.of(code) || code; } catch { return code; }
  }

  function rangeLabel(value) {
    return ({
      "1d": "Last 24 hours",
      "7d": "Last 7 days",
      "30d": "Last 30 days",
      "90d": "Last 90 days",
      "all": "All time"
    })[value] || value;
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

  function pathLabel(path) {
    const value = String(path || "/");
    const known = {
      "/": "Home",
      "/resume/": "Résumé",
      "/resume": "Résumé",
      "/projects/": "Projects",
      "/projects": "Projects",
      "/privacy/": "Privacy",
      "/privacy": "Privacy"
    };
    if (known[value]) return known[value];
    return value.replace(/^\//, "").replace(/\/$/, "").replaceAll("-", " ") || "Home";
  }

  function tidyLabel(value) {
    return String(value || "Unknown")
      .replaceAll("_", " ")
      .replace(/\b\w/g, character => character.toUpperCase());
  }

  function plural(value, singular, pluralForm = singular + "s") {
    return Number(value) === 1 ? singular : pluralForm;
  }

  function setMetric(name, value) {
    document.querySelectorAll('[data-metric="' + name + '"]').forEach(node => {
      node.textContent = name === "avg_session_seconds"
        ? duration(value)
        : fmt.format(Number(value || 0));
    });
  }

  function showEmpty(root, copy) {
    root.textContent = "";
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = copy;
    root.append(empty);
  }

  function rankList(name, rows, {
    formatter = value => String(value || "Unknown"),
    empty = "No data in this period yet.",
    percentage = false
  } = {}) {
    const root = document.querySelector('[data-list="' + name + '"]');
    if (!root) return;
    root.textContent = "";

    if (!rows?.length) {
      showEmpty(root, empty);
      return;
    }

    const max = Math.max(...rows.map(row => Number(row.value || 0)), 1);
    const total = rows.reduce((sum, row) => sum + Number(row.value || 0), 0);

    rows.forEach(row => {
      const count = Number(row.value || 0);
      const item = document.createElement("div");
      item.className = "rank-row";

      const copy = document.createElement("div");
      copy.className = "rank-row__copy";

      const head = document.createElement("div");
      head.className = "rank-row__label";

      const label = document.createElement("span");
      label.textContent = formatter(row.label);

      const detail = document.createElement("span");
      detail.textContent = percentage && total
        ? fmt.format(count) + " · " + Math.round(count / total * 100) + "%"
        : fmt.format(count);

      head.append(label, detail);

      const bar = document.createElement("div");
      bar.className = "rank-row__bar";
      bar.setAttribute("aria-hidden", "true");

      const fill = document.createElement("i");
      fill.style.width = Math.max(3, count / max * 100) + "%";
      bar.append(fill);

      copy.append(head, bar);

      const strong = document.createElement("strong");
      strong.textContent = fmt.format(count);
      strong.setAttribute("aria-hidden", "true");

      item.append(copy, strong);
      root.append(item);
    });
  }

  function renderPages(rows) {
    const root = document.querySelector('[data-rich-list="pages"]');
    if (!root) return;
    root.textContent = "";

    if (!rows?.length) {
      showEmpty(root, "No page views in this period yet.");
      return;
    }

    rows.forEach(row => {
      const views = Number(row.value || 0);
      const visitors = Number(row.visitors || 0);

      const item = document.createElement("div");
      item.className = "rich-rank";

      const copy = document.createElement("div");
      copy.className = "rich-rank__copy";

      const title = document.createElement("strong");
      title.textContent = pathLabel(row.label);

      const detail = document.createElement("small");
      detail.textContent =
        fmt.format(visitors) + " " + plural(visitors, "visitor") +
        " · " +
        fmt.format(views) + " " + plural(views, "view");

      copy.append(title, detail);

      const value = document.createElement("span");
      value.textContent = fmt.format(views);

      item.append(copy, value);
      root.append(item);
    });
  }

  function renderLive(rows) {
    const root = document.querySelector("[data-live-list]");
    if (!root) return;
    root.textContent = "";

    if (!rows?.length) {
      showEmpty(root, "Nobody has been active in the last five minutes.");
      return;
    }

    rows.forEach(row => {
      const item = document.createElement("div");
      item.className = "live-row";

      const visitor = document.createElement("span");
      visitor.className = "live-row__id";
      visitor.textContent = "#" + (row.visitor || "anonymous");

      const location = document.createElement("span");
      location.textContent = row.country_code
        ? countryLabel(row.country_code) + (row.region_code ? " · " + row.region_code : "")
        : "Unknown location";

      const device = document.createElement("span");
      device.textContent = [row.device_type, row.browser_name].filter(Boolean).join(" · ") || "Unknown device";

      const entry = document.createElement("span");
      entry.textContent = "Entry: " + pathLabel(row.entry_path);

      const source = document.createElement("span");
      source.textContent = row.referrer_host || "Direct";

      const seen = document.createElement("span");
      seen.textContent = relativeTime(row.last_seen_at);

      item.append(visitor, location, device, entry, source, seen);
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

  function renderChart(rows) {
    const root = document.querySelector("[data-chart]");
    root.textContent = "";

    if (!rows?.length) {
      showEmpty(root, "Traffic will appear here after visits are recorded in this period.");
      return;
    }

    const width = 960;
    const height = 300;
    const pad = { left: 44, right: 18, top: 16, bottom: 34 };
    const allValues = rows.flatMap(row => [Number(row.visitors || 0), Number(row.pageviews || 0)]);
    const max = Math.max(...allValues, 1);

    const x = index =>
      pad.left +
      (rows.length === 1
        ? (width - pad.left - pad.right) / 2
        : index / (rows.length - 1) * (width - pad.left - pad.right));

    const y = value =>
      height - pad.bottom - (value / max) * (height - pad.top - pad.bottom);

    const ns = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(ns, "svg");
    svg.setAttribute("viewBox", "0 0 " + width + " " + height);
    svg.setAttribute("class", "traffic-chart");
    svg.setAttribute("role", "img");
    svg.setAttribute("aria-label", "Visitors and page views over " + rangeLabel(range).toLowerCase());

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
        " L " + visitorPoints[0][0].toFixed(1) + " " + (height - pad.bottom) +
        " Z";

      const areaPath = document.createElementNS(ns, "path");
      areaPath.setAttribute("d", area);
      areaPath.setAttribute("class", "chart-area");
      svg.append(areaPath);
    }

    drawSeries(svg, ns, rows, row => row.pageviews, x, y, "chart-line chart-line--views");
    drawSeries(svg, ns, rows, row => row.visitors, x, y, "chart-line", "chart-point");

    [...new Set([0, Math.floor((rows.length - 1) / 2), rows.length - 1])].forEach(index => {
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

  function renderRecent(rows) {
    const list = document.querySelector("[data-recent]");
    list.textContent = "";

    if (!rows?.length) {
      const li = document.createElement("li");
      li.className = "empty-state";
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
      main.className = "timeline-main";

      const action = document.createElement("strong");
      action.textContent = tidyLabel(row.event_name);

      const subject = row.target_label || row.section_id || pathLabel(row.path);
      main.append(action, document.createTextNode(subject));

      const meta = document.createElement("span");
      meta.className = "timeline-meta";
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

  function renderPulseBrief(data) {
    const metrics = data.metrics || {};
    const visitors = Number(metrics.visitors || 0);
    const views = Number(metrics.pageviews || 0);
    const topPage = data.topPaths?.[0];
    const topAction = data.interactions?.[0];
    const brief = document.querySelector("[data-pulse-brief]");

    if (!brief) return;

    if (!visitors && !views) {
      brief.textContent = "No traffic has been recorded in this period yet.";
      return;
    }

    const parts = [
      fmt.format(visitors) + " anonymous " + plural(visitors, "visitor") +
      " generated " + fmt.format(views) + " page " + plural(views, "view") + "."
    ];

    if (topPage?.label) {
      parts.push(pathLabel(topPage.label) + " is the most viewed page.");
    }

    if (topAction?.label) {
      parts.push("Most common tracked action: " + String(topAction.label) + ".");
    }

    brief.textContent = parts.join(" ");
  }

  function renderMetricContext(metrics) {
    const visitors = Number(metrics.visitors || 0);
    const views = Number(metrics.pageviews || 0);
    const returning = Number(metrics.returning_visitors || 0);
    const viewsPerVisitor = visitors ? views / visitors : 0;
    const returningRate = visitors ? Math.round(returning / visitors * 100) : 0;

    const viewSummary = document.querySelector("[data-views-summary]");
    const returningSummary = document.querySelector("[data-returning-summary]");
    const trafficSummary = document.querySelector("[data-traffic-summary]");
    const periodLabel = document.querySelector("[data-period-label]");

    if (periodLabel) periodLabel.textContent = rangeLabel(range);

    if (viewSummary) {
      viewSummary.textContent = visitors
        ? viewsPerVisitor.toFixed(viewsPerVisitor >= 10 ? 0 : 1) + " per visitor"
        : "Pages opened";
    }

    if (returningSummary) {
      returningSummary.textContent = visitors
        ? returningRate + "% returned"
        : "Repeat visitors";
    }

    if (trafficSummary) {
      trafficSummary.textContent = visitors
        ? fmt.format(visitors) + " visitors · " + fmt.format(views) + " page views"
        : "Visitors and page views across the selected period.";
    }
  }

  function renderAll(data) {
    const metrics = data.metrics || {};

    [
      "visitors",
      "pageviews",
      "sessions",
      "active_now",
      "avg_session_seconds",
      "returning_visitors"
    ].forEach(name => setMetric(name, metrics[name]));

    renderMetricContext(metrics);
    renderPulseBrief(data);
    renderChart(data.timeseries);
    renderPages(data.topPaths);
    rankList("referrers", data.referrers, {
      empty: "No referring sites yet. Direct visits will appear here.",
      percentage: true
    });
    rankList("campaigns", data.campaigns, {
      empty: "No UTM-tagged campaign visits in this period."
    });
    rankList("sections", data.sections, {
      formatter: tidyLabel,
      empty: "No section-view events in this period."
    });
    rankList("interactions", data.interactions, {
      formatter: tidyLabel,
      empty: "No tracked link actions in this period."
    });
    rankList("countries", data.countries, {
      formatter: countryLabel,
      empty: "Location data will appear after visits are recorded.",
      percentage: true
    });
    rankList("devices", data.devices, {
      empty: "Device data will appear after visits are recorded.",
      percentage: true
    });
    rankList("browsers", data.browsers, {
      empty: "Browser data will appear after visits are recorded.",
      percentage: true
    });
    rankList("operatingSystems", data.operatingSystems, {
      empty: "Operating-system data will appear after visits are recorded.",
      percentage: true
    });
    renderLive(data.live);
    renderRecent(data.recent);
  }

  function setLoading(value, announce = true) {
    loading = value;
    dashboard.setAttribute("aria-busy", value ? "true" : "false");
    dashboard.classList.toggle("is-loading", value && !hasLoaded);
    refreshButton.disabled = value;
    rangeButtons.forEach(button => { button.disabled = value; });

    if (value && announce) status.textContent = "Refreshing analytics…";
  }

  function activateView(view, { focus = false, persist = true } = {}) {
    const next = viewTabs.find(tab => tab.dataset.view === view);
    if (!next) return;

    activeView = view;

    viewTabs.forEach(tab => {
      const selected = tab === next;
      tab.setAttribute("aria-selected", selected ? "true" : "false");
      tab.tabIndex = selected ? 0 : -1;
    });

    viewPanels.forEach(panel => {
      const selected = panel.dataset.viewPanel === view;

      if (!selected) {
        panel.hidden = true;
        panel.classList.remove("is-visible", "is-entering");
        return;
      }

      panel.hidden = false;
      panel.classList.add("is-entering");
      panel.classList.remove("is-visible");

      requestAnimationFrame(() => {
        panel.classList.remove("is-entering");
        panel.classList.add("is-visible");
      });
    });

    if (focus) next.focus();
    if (persist) {
      try { sessionStorage.setItem(VIEW_STORAGE, view); } catch {}
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
      if (!response.ok) {
        throw new Error(navigator.onLine
          ? "Analytics could not be loaded. Try Refresh."
          : "You appear to be offline. Reconnect and try again.");
      }

      lastData = data;
      renderAll(data);
      hasLoaded = true;

      generated.textContent =
        "Updated " +
        new Date(data.generatedAt).toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit"
        });

      status.textContent = rangeLabel(range) + " · auto-refreshes every minute";
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

    const submit = form.querySelector('[type="submit"]');
    submit.disabled = true;
    authStatus.textContent = "Checking access…";

    try { sessionStorage.setItem(KEY_STORAGE, key); } catch {}

    load().finally(() => {
      submit.disabled = false;
    });
  });

  toggleKeyButton.addEventListener("click", () => {
    const revealing = keyInput.type === "password";
    keyInput.type = revealing ? "text" : "password";
    toggleKeyButton.textContent = revealing ? "Hide" : "Show";
    toggleKeyButton.setAttribute("aria-label", (revealing ? "Hide" : "Show") + " analytics key");
    keyInput.focus();
  });

  viewTabs.forEach((tab, index) => {
    tab.addEventListener("click", () => activateView(tab.dataset.view));

    tab.addEventListener("keydown", event => {
      let nextIndex = index;

      if (event.key === "ArrowRight") nextIndex = (index + 1) % viewTabs.length;
      else if (event.key === "ArrowLeft") nextIndex = (index - 1 + viewTabs.length) % viewTabs.length;
      else if (event.key === "Home") nextIndex = 0;
      else if (event.key === "End") nextIndex = viewTabs.length - 1;
      else return;

      event.preventDefault();
      activateView(viewTabs[nextIndex].dataset.view, { focus: true });
    });
  });

  rangeButtons.forEach(button => {
    button.addEventListener("click", () => {
      const nextRange = button.dataset.range || "7d";
      if (nextRange === range || loading) return;

      range = nextRange;

      rangeButtons.forEach(item => {
        const active = item === button;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-pressed", active ? "true" : "false");
      });

      try { sessionStorage.setItem(RANGE_STORAGE, range); } catch {}

      if (lastData) {
        const periodLabel = document.querySelector("[data-period-label]");
        if (periodLabel) periodLabel.textContent = rangeLabel(range);
      }

      load();
    });
  });

  refreshButton.addEventListener("click", () => load());

  lockButton.addEventListener("click", () => {
    key = "";
    lastData = null;
    hasLoaded = false;
    stopAutoRefresh();

    try { sessionStorage.removeItem(KEY_STORAGE); } catch {}

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
    if (!document.hidden && key && !dashboard.hidden && !loading) {
      load({ silent: true });
    }
  });

  try {
    const savedRange = sessionStorage.getItem(RANGE_STORAGE);
    if (savedRange && rangeButtons.some(button => button.dataset.range === savedRange)) {
      range = savedRange;
      rangeButtons.forEach(button => {
        const active = button.dataset.range === range;
        button.classList.toggle("is-active", active);
        button.setAttribute("aria-pressed", active ? "true" : "false");
      });
    }

    const savedView = sessionStorage.getItem(VIEW_STORAGE);
    if (savedView && viewTabs.some(tab => tab.dataset.view === savedView)) {
      activateView(savedView, { persist: false });
    }

    const savedKey = sessionStorage.getItem(KEY_STORAGE);
    if (savedKey) {
      key = savedKey;
      keyInput.value = savedKey;
      load();
    }
  } catch {}
})();