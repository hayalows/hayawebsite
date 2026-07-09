const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");

function closeMenu() {
  menuButton.setAttribute("aria-expanded", "false");
  navigation.classList.remove("is-open");
  document.body.classList.remove("menu-open");
}

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  navigation.classList.toggle("is-open", !isOpen);
  document.body.classList.toggle("menu-open", !isOpen);
});

navigation.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    closeMenu();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
    menuButton.focus();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 680) {
    closeMenu();
  }
});

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
