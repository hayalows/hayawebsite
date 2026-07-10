const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");
const siteHeader = document.querySelector(".site-header");

function applyMobileNavigationSurface() {
  const isMobile = window.innerWidth <= 680;

  navigation.style.background = isMobile ? "var(--color-paper)" : "";
  navigation.style.backdropFilter = isMobile ? "none" : "";
  navigation.style.webkitBackdropFilter = isMobile ? "none" : "";
}

function setMenuState(isOpen) {
  const isMobile = window.innerWidth <= 680;
  const shouldOpen = isMobile && isOpen;

  menuButton.setAttribute("aria-expanded", String(shouldOpen));
  navigation.classList.toggle("is-open", shouldOpen);
  document.body.classList.toggle("menu-open", shouldOpen);

  if (isMobile) {
    navigation.toggleAttribute("inert", !shouldOpen);
    navigation.setAttribute("aria-hidden", String(!shouldOpen));
  } else {
    navigation.removeAttribute("inert");
    navigation.removeAttribute("aria-hidden");
  }
}

function closeMenu() {
  setMenuState(false);
}

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  setMenuState(!isOpen);
});

navigation.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    closeMenu();
  }
});

document.addEventListener("keydown", (event) => {
  const isMenuOpen = menuButton.getAttribute("aria-expanded") === "true";

  if (event.key === "Escape" && isMenuOpen) {
    closeMenu();
    menuButton.focus();
  }
});

window.addEventListener("resize", () => {
  closeMenu();
  applyMobileNavigationSurface();
});

applyMobileNavigationSurface();
closeMenu();

function updateHeaderMaterial() {
  if (siteHeader) {
    siteHeader.classList.toggle("is-scrolled", window.scrollY > 8);
  }
}

updateHeaderMaterial();
window.addEventListener("scroll", updateHeaderMaterial, { passive: true });

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

if (prefersReducedMotion) {
  document.documentElement.classList.add("is-loaded");
} else {
  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      document.documentElement.classList.add("is-loaded");
    });
  });
}
