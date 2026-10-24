(() => {
  const entries = window.PORTFOLIO_ENTRIES || [];
  const featuredList = document.querySelector("#featured-list");
  const portfolioList = document.querySelector("#portfolio-list");
  const searchInput = document.querySelector("#portfolio-search");
  const resultCount = document.querySelector("#result-count");
  const emptyState = document.querySelector("#empty-state");
  const lensExplainer = document.querySelector("[data-lens-explainer]");
  const lensCopy = {
    designer: "Look for a decision you can learn from and a way to explain your own contribution more clearly.",
    hiring: "Look for evidence of ownership, judgment and outcomes—and note where a claim still needs a conversation to verify it."
  };
  let activeLens = "designer";
  let activeFilter = "all";

  const make = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };
  const hostFor = entry => entry.url ? new URL(entry.url).hostname.replace(/^www\./, "") : (entry.domain || "Portfolio link needs confirmation");
  const makeLink = (href, label, className = "") => {
    const link = make("a", className, label);
    link.href = href;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    return link;
  };

  function renderFeatured() {
    featuredList.replaceChildren();
    const picks = entries.filter(entry => entry.featured);
    picks.forEach((entry, index) => {
      const card = make("article", "featured-card");
      const top = make("div", "featured-card__top");
      top.append(make("span", "featured-card__index", `FIELD NOTE ${String(index + 1).padStart(2, "0")}`));
      top.append(make("span", "featured-card__label", "Leading group · ties kept"));
      card.append(top);
      card.append(make("h3", "", entry.name));
      if (entry.subline) card.append(make("p", "featured-card__subline", entry.subline));
      const note = make("p", "featured-card__note", entry[activeLens] || (activeLens === "designer" ? "Open the source and look for one decision that makes the work easier to understand." : "Use the source to check role, project context and the evidence behind any outcome claim."));
      card.append(note);
      const links = make("div", "featured-card__source");
      if (entry.url) links.append(makeLink(entry.url, "Visit portfolio ↗"));
      else links.append(make("span", "", "Link needs confirmation"));
      if (entry.caseUrl && entry.caseUrl !== entry.url) links.append(makeLink(entry.caseUrl, "Open a project example ↗"));
      card.append(links);
      featuredList.append(card);
    });
  }

  function matches(entry, query) {
    const haystack = `${entry.name} ${entry.url || ""} ${entry.domain || ""} ${entry.subline || ""}`.toLowerCase();
    if (query && !haystack.includes(query)) return false;
    if (activeFilter === "featured" && !entry.featured) return false;
    if (activeFilter === "revisit" && entry.reviewed !== false) return false;
    return true;
  }

  function renderDirectory() {
    const query = searchInput.value.trim().toLowerCase();
    const shown = entries.filter(entry => matches(entry, query)).sort((a, b) => a.name.localeCompare(b.name, undefined, {sensitivity:"base"}));
    portfolioList.replaceChildren();
    shown.forEach((entry, index) => {
      const row = make("li", "portfolio-row");
      row.append(make("span", "portfolio-row__number", String(index + 1).padStart(2, "0")));
      const name = make("span", "portfolio-row__name");
      if (entry.url) name.append(makeLink(entry.url, entry.name));
      else name.append(document.createTextNode(entry.name));
      row.append(name);
      row.append(make("span", "portfolio-row__domain", hostFor(entry)));
      let status = "Reviewed";
      let statusClass = "portfolio-row__status";
      if (entry.reviewed === false) {
        status = "Needs another look";
        statusClass += " portfolio-row__status--revisit";
      } else if (entry.linkCheck) {
        status = "Link to check";
      } else if (entry.featured) {
        status = "Leading group";
        statusClass += " portfolio-row__status--featured";
      }
      row.append(make("span", statusClass, status));
      row.append(make("span", `portfolio-row__arrow${entry.url ? "" : " portfolio-row__arrow--muted"}`, entry.url ? "↗" : "·"));
      row.title = entry.reviewed === false ? entry.revisitNote : (entry.linkCheck ? "The address in the earlier notes needs confirmation." : "");
      portfolioList.append(row);
    });
    const total = entries.length;
    resultCount.textContent = `${shown.length} of ${total} portfolios${activeFilter === "revisit" ? " · not assessed in the earlier pass" : ""}${query ? ` · matching “${searchInput.value.trim()}”` : ""}`;
    emptyState.hidden = shown.length > 0;
    portfolioList.hidden = shown.length === 0;
  }

  document.querySelectorAll("[data-lens]").forEach(button => {
    button.addEventListener("click", () => {
      activeLens = button.dataset.lens;
      document.querySelectorAll("[data-lens]").forEach(item => {
        const active = item === button;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-pressed", String(active));
      });
      lensExplainer.textContent = lensCopy[activeLens];
      renderFeatured();
    });
  });

  document.querySelectorAll("[data-filter]").forEach(button => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;
      document.querySelectorAll("[data-filter]").forEach(item => {
        const active = item === button;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-pressed", String(active));
      });
      renderDirectory();
    });
  });

  searchInput.addEventListener("input", renderDirectory);
  document.querySelector("[data-clear-search]").addEventListener("click", () => {
    searchInput.value = "";
    activeFilter = "all";
    document.querySelector('[data-filter="all"]').click();
    searchInput.focus();
  });
  document.addEventListener("keydown", event => {
    if (event.key === "/" && !/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)) {
      event.preventDefault();
      searchInput.focus();
    }
  });

  renderFeatured();
  renderDirectory();
})();
