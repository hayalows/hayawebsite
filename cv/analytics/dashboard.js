(() => {
  "use strict";

  const REPORT_ENDPOINT = "https://fplengine-web.vercel.app/api/index?analytics=report";
  const auth = document.querySelector("[data-auth]");
  const dashboard = document.querySelector("[data-dashboard]");
  const form = document.querySelector("[data-auth-form]");
  const keyInput = document.querySelector("#analytics-key");
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
    if (seconds < 60) return seconds + "s ago";
    if (seconds < 3600) return Math.floor(seconds / 60) + "m ago";
    if (seconds < 86400) return Math.floor(seconds / 3600) + "h ago";
    return Math.floor(seconds / 86400) + "d ago";
  }

  function setMetric(name, value) {
    const node = document.querySelector('[data-metric="' + name + '"]');
    if (!node) return;
    node.textContent = name === "avg_session_seconds"
      ? duration(value)
      : fmt.format(Number(value || 0));
  }

  function emptyRow(body, colspan = 3, copy = "No data yet") {
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
      [row.label || "/", row.visitors || 0, row.value || 0].forEach((value, index) => {
        const td = document.createElement("td");
        td.textContent = index ? fmt.format(Number(value || 0)) : String(value);
        tr.append(td);
      });
      body.append(tr);
    });
  }

  function renderLive(rows) {
    const body = document.querySelector('[data-table="live"]');
    if (!rows?.length) return emptyRow(body, 6, "Nobody active in the last five minutes.");
    body.textContent = "";
    rows.forEach(row => {
      const tr = document.createElement("tr");
      const location = row.country_code ? countryLabel(row.country_code) + (row.region_code ? " · " + row.region_code : "") : "Unknown";
      const device = [row.device_type, row.browser_name].filter(Boolean).join(" · ") || "Unknown";
      const values = [
        { text: row.visitor || "anonymous", className: "visitor-id" },
        { text: location },
        { text: device },
        { text: row.entry_path || "/" },
        { text: row.referrer_host || "Direct" },
        { text: relativeTime(row.last_seen_at) }
      ];
      values.forEach(item => {
        const td = document.createElement("td");
        td.textContent = item.text;
        if (item.className) td.className = item.className;
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
      root.textContent = "No data yet";
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
      const fill = document.createElement("i");
      fill.style.width = Math.max(3, Number(row.value || 0) / max * 100) + "%";
      bar.append(fill);
      copy.append(head, bar);
      const strong = document.createElement("strong");
      strong.textContent = fmt.format(Number(row.value || 0));
      item.append(copy, strong);
      root.append(item);
    });
  }

  function chart(rows) {
    const root = document.querySelector("[data-chart]");
    root.textContent = "";
    if (!rows?.length) {
      const empty = document.createElement("div");
      empty.className = "chart-empty";
      empty.textContent = "Traffic will appear after the first visits are recorded.";
      root.append(empty);
      return;
    }

    const width = 900, height = 240;
    const pad = { left: 36, right: 16, top: 14, bottom: 30 };
    const values = rows.map(row => Number(row.visitors || 0));
    const max = Math.max(...values, 1);
    const x = index => pad.left + (rows.length === 1 ? 0 : index / (rows.length - 1)) * (width - pad.left - pad.right);
    const y = value => height - pad.bottom - (value / max) * (height - pad.top - pad.bottom);
    const points = rows.map((row, index) => [x(index), y(Number(row.visitors || 0))]);
    const line = points.map((point, index) => (index ? "L" : "M") + point[0].toFixed(1) + " " + point[1].toFixed(1)).join(" ");
    const area = line + " L " + points.at(-1)[0].toFixed(1) + " " + (height - pad.bottom) + " L " + points[0][0].toFixed(1) + " " + (height - pad.bottom) + " Z";
    const ns = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(ns, "svg");
    svg.setAttribute("viewBox", "0 0 " + width + " " + height);
    svg.setAttribute("class", "traffic-chart");
    svg.setAttribute("role", "img");
    svg.setAttribute("aria-label", "Anonymous visitors over time");

    [0, .5, 1].forEach(ratio => {
      const grid = document.createElementNS(ns, "line");
      const gy = pad.top + ratio * (height - pad.top - pad.bottom);
      grid.setAttribute("x1", pad.left);
      grid.setAttribute("x2", width - pad.right);
      grid.setAttribute("y1", gy);
      grid.setAttribute("y2", gy);
      grid.setAttribute("class", "chart-grid");
      svg.append(grid);
    });

    const areaPath = document.createElementNS(ns, "path");
    areaPath.setAttribute("d", area);
    areaPath.setAttribute("class", "chart-area");
    svg.append(areaPath);

    const path = document.createElementNS(ns, "path");
    path.setAttribute("d", line);
    path.setAttribute("class", "chart-line");
    svg.append(path);

    points.forEach((point, index) => {
      const circle = document.createElementNS(ns, "circle");
      circle.setAttribute("cx", point[0]);
      circle.setAttribute("cy", point[1]);
      circle.setAttribute("r", rows.length > 45 ? "2" : "3");
      circle.setAttribute("class", "chart-point");
      const title = document.createElementNS(ns, "title");
      title.textContent = new Date(rows[index].bucket).toLocaleString("en-GB", { day: "numeric", month: "short", hour: range === "1d" ? "2-digit" : undefined, timeZone: "UTC" }) + ": " + fmt.format(values[index]) + " visitors · " + fmt.format(Number(rows[index].pageviews || 0)) + " views";
      circle.append(title);
      svg.append(circle);
    });

    [...new Set([0, Math.floor((rows.length - 1) / 2), rows.length - 1])].forEach(index => {
      const text = document.createElementNS(ns, "text");
      text.setAttribute("x", x(index));
      text.setAttribute("y", height - 8);
      text.setAttribute("text-anchor", index === 0 ? "start" : index === rows.length - 1 ? "end" : "middle");
      text.setAttribute("class", "chart-label");
      text.textContent = new Date(rows[index].bucket).toLocaleDateString("en-GB", { day: "numeric", month: "short", timeZone: "UTC" });
      svg.append(text);
    });

    root.append(svg);
  }

  function recent(rows) {
    const list = document.querySelector("[data-recent]");
    list.textContent = "";
    if (!rows?.length) {
      const li = document.createElement("li");
      li.textContent = "No recent activity yet.";
      list.append(li);
      return;
    }

    rows.forEach(row => {
      const li = document.createElement("li");
      const time = document.createElement("time");
      const date = new Date(row.occurred_at);
      time.dateTime = date.toISOString();
      time.textContent = date.toLocaleString("en-GB", { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" });

      const main = document.createElement("span");
      main.className = "activity-main";
      const action = document.createElement("strong");
      action.textContent = String(row.event_name || "event").replaceAll("_", " ");
      const subject = row.target_label || row.section_id || row.path || "/";
      main.append(action, document.createTextNode(" · " + subject));

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

  async function load() {
    if (!key) return;
    status.classList.remove("is-error");
    status.textContent = "Loading analytics…";
    refreshButton.disabled = true;

    try {
      const response = await fetch(REPORT_ENDPOINT + "&range=" + encodeURIComponent(range), {
        mode: "cors",
        credentials: "omit",
        headers: { Authorization: "Bearer " + key },
        cache: "no-store"
      });
      const data = await response.json().catch(() => ({}));

      if (response.status === 401) throw new Error("That analytics key was not accepted.");
      if (!response.ok) throw new Error("Analytics could not be loaded.");

      const metrics = data.metrics || {};
      ["visitors", "pageviews", "sessions", "active_now", "avg_session_seconds", "returning_visitors"].forEach(name => setMetric(name, metrics[name]));

      const audience = document.querySelector("[data-audience]");
      if (audience) {
        audience.textContent = fmt.format(Number(metrics.new_visitors || 0)) + " new · " + fmt.format(Number(metrics.returning_visitors || 0)) + " returning";
      }

      chart(data.timeseries);
      renderLive(data.live);
      renderPages(data.topPaths);
      rankList("referrers", data.referrers);
      rankList("countries", data.countries, countryLabel);
      rankList("devices", data.devices);
      rankList("browsers", data.browsers);
      rankList("sections", data.sections, value => String(value || "Unknown").replaceAll("_", " "));
      rankList("interactions", data.interactions, value => String(value || "Unknown").replaceAll("_", " "));
      recent(data.recent);

      generated.textContent = "Updated " + new Date(data.generatedAt).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
      status.textContent = "Live data · " + ({ "1d": "last 24 hours", "7d": "last 7 days", "30d": "last 30 days", "90d": "last 90 days", "all": "all time" }[range] || range);
      auth.hidden = true;
      dashboard.hidden = false;
    } catch (error) {
      status.classList.add("is-error");
      status.textContent = error.message;
      if (dashboard.hidden) {
        authStatus.textContent = error.message;
        auth.hidden = false;
      }
    } finally {
      refreshButton.disabled = false;
    }
  }

  form.addEventListener("submit", event => {
    event.preventDefault();
    key = keyInput.value.trim();
    if (!key) return;
    try { sessionStorage.setItem("pkm.analytics.dashboard.key", key); } catch {}
    authStatus.textContent = "Checking…";
    load();
  });

  rangeButtons.forEach(button => button.addEventListener("click", () => {
    range = button.dataset.range || "7d";
    rangeButtons.forEach(item => item.classList.toggle("is-active", item === button));
    load();
  }));

  refreshButton.addEventListener("click", load);
  lockButton.addEventListener("click", () => {
    key = "";
    try { sessionStorage.removeItem("pkm.analytics.dashboard.key"); } catch {}
    dashboard.hidden = true;
    auth.hidden = false;
    keyInput.value = "";
    authStatus.textContent = "";
    keyInput.focus();
  });

  try {
    const saved = sessionStorage.getItem("pkm.analytics.dashboard.key");
    if (saved) {
      key = saved;
      keyInput.value = saved;
      load();
    }
  } catch {}
})();
