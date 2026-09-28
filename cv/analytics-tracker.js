(() => {
  "use strict";

  const ENDPOINT = "https://fplengine-web.vercel.app/api/index?analytics=collect";
  const VISITOR_KEY = "pkm.analytics.visitor.v1";
  const SESSION_KEY = "pkm.analytics.session.v1";
  const SESSION_SENT_KEY = "pkm.analytics.session.sent.v1";
  const HEARTBEAT_MS = 60000;

  if (
    location.hostname === "localhost" ||
    location.hostname === "127.0.0.1" ||
    navigator.doNotTrack === "1" ||
    navigator.globalPrivacyControl === true
  ) return;

  function randomId() {
    if (crypto && typeof crypto.randomUUID === "function") {
      return crypto.randomUUID().replaceAll("-", "");
    }
    const bytes = new Uint8Array(18);
    crypto.getRandomValues(bytes);
    return Array.from(bytes, byte => byte.toString(16).padStart(2, "0")).join("");
  }

  function storedId(storage, key) {
    try {
      let value = storage.getItem(key);
      if (!value || !/^[A-Za-z0-9_-]{8,80}$/.test(value)) {
        value = randomId();
        storage.setItem(key, value);
      }
      return value;
    } catch {
      return randomId();
    }
  }

  const visitorId = storedId(localStorage, VISITOR_KEY);
  const sessionId = storedId(sessionStorage, SESSION_KEY);

  function parseBrowser(ua) {
    if (/Edg\//.test(ua)) return "Edge";
    if (/OPR\//.test(ua)) return "Opera";
    if (/Firefox\//.test(ua)) return "Firefox";
    if (/CriOS\//.test(ua)) return "Chrome iOS";
    if (/Chrome\//.test(ua)) return "Chrome";
    if (/Safari\//.test(ua) && /Version\//.test(ua)) return "Safari";
    return "Other";
  }

  function parseOS(ua) {
    if (/iPhone|iPad|iPod/.test(ua)) return "iOS";
    if (/Android/.test(ua)) return "Android";
    if (/Windows NT/.test(ua)) return "Windows";
    if (/Mac OS X/.test(ua)) return "macOS";
    if (/Linux/.test(ua)) return "Linux";
    return "Other";
  }

  function deviceType(ua) {
    if (/iPad|Tablet|PlayBook|Silk/i.test(ua)) return "Tablet";
    if (/Mobi|Android|iPhone|iPod/i.test(ua)) return "Mobile";
    return "Desktop";
  }

  function referrerHost() {
    if (!document.referrer) return null;
    try {
      const host = new URL(document.referrer).hostname;
      return host || null;
    } catch {
      return null;
    }
  }

  const params = new URLSearchParams(location.search);
  const ua = navigator.userAgent || "";
  const context = {
    referrerHost: referrerHost(),
    deviceType: deviceType(ua),
    browser: parseBrowser(ua),
    os: parseOS(ua),
    language: navigator.language || null,
    utmSource: params.get("utm_source"),
    utmMedium: params.get("utm_medium"),
    utmCampaign: params.get("utm_campaign"),
    viewportWidth: Math.round(window.innerWidth || 0),
    screenWidth: Math.round(window.screen?.width || 0)
  };

  function cleanUrl(raw) {
    if (!raw) return null;
    if (raw.startsWith("mailto:")) return "mailto:";
    if (raw.startsWith("tel:")) return "tel:";
    try {
      const url = new URL(raw, location.href);
      return url.origin + url.pathname;
    } catch {
      return raw.startsWith("#") ? raw.slice(0, 120) : null;
    }
  }

  function send(event, data = {}, beacon = false) {
    const body = JSON.stringify({
      event,
      visitorId,
      sessionId,
      path: location.pathname,
      context,
      data
    });

    if (beacon && navigator.sendBeacon) {
      try {
        const blob = new Blob([body], { type: "text/plain;charset=UTF-8" });
        if (navigator.sendBeacon(ENDPOINT, blob)) return;
      } catch {}
    }

    fetch(ENDPOINT, {
      method: "POST",
      mode: "cors",
      credentials: "omit",
      keepalive: true,
      headers: { "Content-Type": "text/plain;charset=UTF-8" },
      body
    }).catch(() => {});
  }

  let sessionSent = false;
  try {
    sessionSent = sessionStorage.getItem(SESSION_SENT_KEY) === sessionId;
    if (!sessionSent) sessionStorage.setItem(SESSION_SENT_KEY, sessionId);
  } catch {}

  if (!sessionSent) send("session_start");
  send("pageview");

  const seenSections = new Set();
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting || entry.intersectionRatio < 0.4) continue;
        const sectionId = entry.target.id || entry.target.dataset.section;
        if (!sectionId || seenSections.has(sectionId)) continue;
        seenSections.add(sectionId);
        send("section_view", { sectionId });
      }
    }, { threshold: [0.4, 0.7] });

    document.querySelectorAll("[data-section]").forEach(section => observer.observe(section));
  }

  function classifyLink(link) {
    const rawHref = link.getAttribute("href") || "";
    const absolute = (() => {
      try { return new URL(rawHref, location.href); } catch { return null; }
    })();
    const external = absolute && /^https?:$/.test(absolute.protocol) && absolute.origin !== location.origin;
    const label = (
      link.getAttribute("aria-label") ||
      link.dataset.projectLink ||
      link.textContent ||
      rawHref
    ).replace(/\s+/g, " ").trim().slice(0, 180);

    let targetType = external ? "outbound" : "navigation";
    if (link.classList.contains("credential-link")) targetType = "credential";
    else if (link.dataset.projectLink) targetType = "project";
    else if (rawHref.startsWith("mailto:")) targetType = "email";
    else if (/linkedin\.com/i.test(rawHref)) targetType = "linkedin";
    else if (/(^|\/)resume\/?(?:$|[?#])/.test(rawHref)) targetType = "resume";
    else if (/open\.spotify\.com/i.test(rawHref)) targetType = "spotify";
    else if (/privacy\/?(?:$|[?#])/.test(rawHref)) targetType = "privacy";

    return {
      event: external || rawHref.startsWith("mailto:") ? "outbound" : "click",
      data: {
        targetType,
        targetLabel: label || targetType,
        targetUrl: cleanUrl(rawHref),
        metadata: link.dataset.projectLink ? { project: link.dataset.projectLink } : {}
      }
    };
  }

  document.addEventListener("click", event => {
    const copyButton = event.target.closest?.("[data-copy-email]");
    if (copyButton) {
      send("click", { targetType: "email_copy", targetLabel: "Copy email" });
      return;
    }

    const link = event.target.closest?.("a[href]");
    if (!link) return;
    const classified = classifyLink(link);
    send(classified.event, classified.data);
  }, { capture: true });

  let activeMs = 0;
  let visibleSince = document.hidden ? null : performance.now();
  let lastSentMs = 0;
  let maxScroll = 0;

  function updateScroll() {
    const root = document.documentElement;
    const scrollable = Math.max(1, root.scrollHeight - window.innerHeight);
    maxScroll = Math.max(
      maxScroll,
      Math.min(100, Math.round((window.scrollY / scrollable) * 100))
    );
  }

  function closeVisiblePeriod() {
    if (visibleSince === null) return;
    activeMs += Math.max(0, performance.now() - visibleSince);
    visibleSince = null;
  }

  function openVisiblePeriod() {
    if (visibleSince === null && !document.hidden) visibleSince = performance.now();
  }

  function currentActiveMs() {
    return Math.round(
      activeMs + (visibleSince === null ? 0 : Math.max(0, performance.now() - visibleSince))
    );
  }

  function sendEngagement(beacon = false, force = false) {
    updateScroll();
    const total = currentActiveMs();
    if (!force && total - lastSentMs < 10000) return;
    lastSentMs = total;
    send("engagement", {
      durationMs: total,
      metadata: { scrollDepth: maxScroll }
    }, beacon);
  }

  updateScroll();
  window.addEventListener("scroll", updateScroll, { passive: true });

  const heartbeat = window.setInterval(() => {
    if (!document.hidden) sendEngagement(false, false);
  }, HEARTBEAT_MS);

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      closeVisiblePeriod();
      sendEngagement(true, true);
    } else {
      openVisiblePeriod();
    }
  });

  window.addEventListener("pagehide", () => {
    closeVisiblePeriod();
    sendEngagement(true, true);
    clearInterval(heartbeat);
  }, { once: true });
})();
