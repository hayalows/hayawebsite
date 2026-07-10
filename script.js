const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");
const siteHeader = document.querySelector(".site-header");

function applyMobileNavigationSurface() {
  const isMobile = window.innerWidth <= 680;

  navigation.style.background = isMobile ? "var(--color-paper)" : "";
  navigation.style.backdropFilter = isMobile ? "none" : "";
  navigation.style.webkitBackdropFilter = isMobile ? "none" : "";
  navigation.style.opacity = isMobile ? "1" : "";
  navigation.style.visibility = isMobile ? "hidden" : "";
  navigation.style.transition = isMobile
    ? "transform 220ms var(--ease-out-soft)"
    : "";
}

function setMenuState(isOpen) {
  const isMobile = window.innerWidth <= 680;
  const shouldOpen = isMobile && isOpen;

  menuButton.setAttribute("aria-expanded", String(shouldOpen));
  navigation.classList.toggle("is-open", shouldOpen);
  document.body.classList.toggle("menu-open", shouldOpen);

  if (isMobile) {
    navigation.style.visibility = shouldOpen ? "visible" : "hidden";
    navigation.toggleAttribute("inert", !shouldOpen);
    navigation.setAttribute("aria-hidden", String(!shouldOpen));
  } else {
    navigation.style.visibility = "";
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

const revealTargets = document.querySelectorAll("[data-reveal]");
const usesCompactViewport = window.matchMedia("(max-width: 850px)").matches;
const rotatingWord = document.querySelector("[data-rotating-word]");
const heroOutcomes = document.querySelectorAll("[data-hero-outcome]");

if (rotatingWord && heroOutcomes.length && !prefersReducedMotion) {
  const heroWords = ["choose.", "trust.", "grow."];
  let activeWordIndex = 0;

  window.setInterval(() => {
    activeWordIndex = (activeWordIndex + 1) % heroWords.length;
    rotatingWord.classList.add("is-changing");

    window.setTimeout(() => {
      const activeWord = heroWords[activeWordIndex].replace(".", "");

      rotatingWord.textContent = heroWords[activeWordIndex];
      heroOutcomes.forEach((outcome) => {
        outcome.classList.toggle(
          "is-active",
          outcome.dataset.heroOutcome === activeWord
        );
      });
      rotatingWord.classList.remove("is-changing");
    }, 180);
  }, 2800);
}

if (!prefersReducedMotion && "IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: usesCompactViewport ? 0.08 : 0.15,
      rootMargin: usesCompactViewport ? "0px 0px -24px 0px" : "0px 0px -60px 0px",
    }
  );

  revealTargets.forEach((target) => revealObserver.observe(target));
} else {
  revealTargets.forEach((target) => {
    target.classList.add("is-visible");
  });
}
