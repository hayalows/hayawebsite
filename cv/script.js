const root = document.documentElement;
const menuButton = document.querySelector(".menu-button");
const primaryNav = document.querySelector(".primary-nav");
const themeButton = document.querySelector("[data-theme-toggle]");
const themeLabel = document.querySelector("[data-theme-label]");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function setTheme(theme) {
  root.dataset.theme = theme;
  if (themeLabel) {
    themeLabel.textContent = theme === "dark" ? "Light mode" : "Dark mode";
  }

  try {
    localStorage.setItem("pk-theme", theme);
  } catch (_) {}
}

setTheme(root.dataset.theme === "light" ? "light" : "dark");

themeButton?.addEventListener("click", () => {
  setTheme(root.dataset.theme === "dark" ? "light" : "dark");
});

function closeMenu() {
  menuButton?.setAttribute("aria-expanded", "false");
  primaryNav?.classList.remove("is-open");
  document.body.classList.remove("menu-open");
}

menuButton?.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  primaryNav?.classList.toggle("is-open", !isOpen);
  document.body.classList.toggle("menu-open", !isOpen);
});

primaryNav?.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeMenu();
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

window.matchMedia("(min-width: 761px)").addEventListener("change", closeMenu);

const revealItems = document.querySelectorAll("[data-reveal]");

if (prefersReducedMotion.matches || !("IntersectionObserver" in window)) {
  revealItems.forEach((item) => item.classList.add("is-visible"));
} else {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.16 }
  );

  revealItems.forEach((item) => {
    const delay = item.dataset.revealDelay;
    if (delay) item.style.setProperty("--reveal-delay", delay);
    revealObserver.observe(item);
  });
}

const filterButtons = document.querySelectorAll("[data-filter]");
const workItems = document.querySelectorAll("[data-work]");
const emptyMessage = document.querySelector("[data-filter-empty]");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selected = button.dataset.filter;
    let shown = 0;

    filterButtons.forEach((item) => {
      const active = item === button;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-pressed", String(active));
    });

    workItems.forEach((item) => {
      const matches = selected === "all" || item.dataset.work.split(" ").includes(selected);
      item.classList.toggle("is-hidden", !matches);
      if (matches) shown += 1;
    });

    if (emptyMessage) emptyMessage.hidden = shown > 0;
  });
});

document.querySelector("[data-current-year]").textContent = String(new Date().getFullYear());

const header = document.querySelector(".site-header");
const topSection = document.querySelector("#top");

if (header && topSection && "IntersectionObserver" in window) {
  const headerObserver = new IntersectionObserver(([entry]) => {
    header.classList.toggle("is-scrolled", !entry.isIntersecting);
  }, { threshold: 0.04 });

  headerObserver.observe(topSection);
}