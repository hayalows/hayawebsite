(() => {
  if (location.hostname === "localhost" || location.hostname === "127.0.0.1" || navigator.doNotTrack === "1" || navigator.globalPrivacyControl === true) return;

  const endpoint = "/api/analytics";
  const startedAt = Date.now();
  let maxScroll = 0;
  let engagementSent = false;
  const sessionKey = "pkm_analytics_session";

  function uuid() {
    if (crypto?.randomUUID) return crypto.randomUUID();
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (char) => {
      const value = Math.random() * 16 | 0;
      return (char === "x" ? value : (value & 3) | 8).toString(16);
    });
  }

  function sessionId() {
    try {
      let value = sessionStorage.getItem(sessionKey);
      if (!value) {
        value = uuid();
        sessionStorage.setItem(sessionKey, value);
      }
      return value;
    } catch {
      return uuid();
    }
  }

  const session = sessionId();
  const query = new URLSearchParams(location.search);
  const utm = {
    source: query.get("utm_source"),
    medium: query.get("utm_medium"),
    campaign: query.get("utm_campaign"),
    content: query.get("utm_content"),
  };

  function payload(event, details = {}) {
    return {
      id: uuid(), event, sessionId: session, path: location.pathname,
      referrer: document.referrer || null,
      section: details.section || null,
      target: details.target || null,
      durationMs: details.durationMs ?? null,
      scrollDepth: details.scrollDepth ?? null,
      screen: {
        width: Math.round(window.screen?.width || window.innerWidth || 0),
        height: Math.round(window.screen?.height || window.innerHeight || 0),
      },
      utm,
      meta: {
        title: document.title,
        label: details.label || null,
        hrefHost: details.hrefHost || null,
      },
    };
  }

  function send(event, details = {}, beacon = false) {
    const body = JSON.stringify(payload(event, details));
    if (beacon && navigator.sendBeacon) {
      navigator.sendBeacon(endpoint, new Blob([body], { type: "application/json" }));
      return;
    }
    fetch(endpoint, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body,
      keepalive: true,
      credentials: "same-origin",
    }).catch(() => {});
  }

  function classifyLink(link) {
    const href = link.getAttribute("href") || "";
    const label = (link.textContent || link.getAttribute("aria-label") || "").trim().slice(0, 160);
    let event = "external_click";
    let target = label || href.slice(0, 160);

    if (link.classList.contains("credential-link")) event = "credential_click";
    else if (link.dataset.projectLink) {
      event = "project_click";
      target = link.dataset.projectLink;
    } else if (href.startsWith("mailto:")) event = "email_click";
    else if (/linkedin\.com/i.test(href)) event = "linkedin_click";
    else if (/(^|\/)resume\/?(?:$|[?#])/.test(href)) event = "resume_open";
    else if (href.startsWith("#") || href.startsWith("/") || href.startsWith("./") || href.startsWith("../")) return null;

    let hrefHost = null;
    try { hrefHost = new URL(href, location.href).hostname || null; } catch {}
    return { event, target, label, hrefHost };
  }

  send("page_view");

  const seenSections = new Set();
  if ("IntersectionObserver" in window) {
    const sections = [...document.querySelectorAll("[data-section], .case[id]")];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || entry.intersectionRatio < 0.35) return;
        const section = entry.target.id || entry.target.dataset.section;
        if (!section || seenSections.has(section)) return;
        seenSections.add(section);
        send("section_view", { section, target: section });
      });
    }, { threshold: [0.35, 0.6] });
    sections.forEach((section) => observer.observe(section));
  }

  document.addEventListener("click", (event) => {
    const copy = event.target.closest?.("[data-copy-email]");
    if (copy) {
      send("copy_email", { target: "email" });
      return;
    }
    const link = event.target.closest?.("a[href]");
    if (!link) return;
    const classified = classifyLink(link);
    if (classified) send(classified.event, classified);
  }, { capture: true });

  const updateScroll = () => {
    const root = document.documentElement;
    const scrollable = Math.max(1, root.scrollHeight - window.innerHeight);
    maxScroll = Math.max(maxScroll, Math.min(100, Math.round((window.scrollY / scrollable) * 100)));
  };
  updateScroll();
  window.addEventListener("scroll", updateScroll, { passive: true });

  const sendEngagement = () => {
    if (engagementSent) return;
    engagementSent = true;
    updateScroll();
    send("engagement", { durationMs: Date.now() - startedAt, scrollDepth: maxScroll }, true);
  };

  window.addEventListener("pagehide", sendEngagement, { once: true });
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") sendEngagement();
  });
})();
