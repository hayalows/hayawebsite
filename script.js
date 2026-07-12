const siteConfig = window.HAYALOWS_SITE_CONFIG || {
  businessName: "Hayalows Ventures",
  email: "info@hayalows.com",
  whatsappLocal: "050 620 1345",
  whatsappInternational: "+233 50 620 1345",
  whatsappNumber: "233506201345",
  whatsappUrl: "https://wa.me/233506201345",
  defaultWhatsappMessage:
    "Hello Hayalows. I would like to discuss something I need help with.",
};

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");
const siteHeader = document.querySelector(".site-header");
const mainContent = document.querySelector("main");
const siteFooter = document.querySelector(".site-footer");
const mobileViewport = window.matchMedia("(max-width: 680px)");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

document.querySelectorAll("[data-whatsapp-default]").forEach((link) => {
  link.href = `${siteConfig.whatsappUrl}?text=${encodeURIComponent(siteConfig.defaultWhatsappMessage)}`;
});

document.querySelectorAll("[data-whatsapp-link]").forEach((link) => {
  link.href = siteConfig.whatsappUrl;
});

document.querySelectorAll("[data-email-link]").forEach((link) => {
  link.href = `mailto:${siteConfig.email}`;
});

document.querySelectorAll("[data-email-text]").forEach((element) => {
  element.textContent = siteConfig.email;
});

document.querySelectorAll("[data-whatsapp-local]").forEach((element) => {
  element.textContent = siteConfig.whatsappLocal;
});

document.querySelectorAll("[data-whatsapp-international]").forEach((element) => {
  element.textContent = siteConfig.whatsappInternational;
});

function setBackgroundInteraction(isDisabled) {
  [mainContent, siteFooter].forEach((element) => {
    if (element) {
      element.toggleAttribute("inert", isDisabled);
    }
  });
}

function setMenuState(isOpen, options = {}) {
  if (!menuButton || !navigation) {
    return;
  }

  const shouldOpen = mobileViewport.matches && isOpen;
  menuButton.setAttribute("aria-expanded", String(shouldOpen));
  menuButton.setAttribute("aria-label", shouldOpen ? "Close menu" : "Open menu");
  navigation.classList.toggle("is-open", shouldOpen);
  document.body.classList.toggle("menu-open", shouldOpen);

  if (mobileViewport.matches) {
    navigation.toggleAttribute("inert", !shouldOpen);
    navigation.setAttribute("aria-hidden", String(!shouldOpen));
    setBackgroundInteraction(shouldOpen);
  } else {
    navigation.removeAttribute("inert");
    navigation.removeAttribute("aria-hidden");
    setBackgroundInteraction(false);
  }

  if (shouldOpen && options.moveFocus) {
    navigation.querySelector("a")?.focus();
  }
}

function closeMenu(options = {}) {
  const wasOpen = menuButton?.getAttribute("aria-expanded") === "true";
  setMenuState(false);

  if (wasOpen && options.returnFocus) {
    menuButton.focus();
  }
}

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    setMenuState(!isOpen, { moveFocus: !isOpen });
  });

  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu({ returnFocus: true });
    }
  });

  window.addEventListener("resize", () => closeMenu());
  setMenuState(false);
}

function updateHeaderMaterial() {
  siteHeader?.classList.toggle("is-scrolled", window.scrollY > 10);
}

updateHeaderMaterial();
window.addEventListener("scroll", updateHeaderMaterial, { passive: true });

if (reducedMotion.matches) {
  document.documentElement.classList.add("is-loaded");
} else {
  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      document.documentElement.classList.add("is-loaded");
    });
  });
}

const rotatingWord = document.querySelector("[data-rotating-word]");

if (rotatingWord && !reducedMotion.matches) {
  const heroWords = ["choose.", "trust.", "grow."];
  let wordIndex = 0;
  let rotationTimer;
  let changeTimer;

  function rotateHeroWord() {
    rotatingWord.classList.add("is-changing");
    changeTimer = window.setTimeout(() => {
      wordIndex = (wordIndex + 1) % heroWords.length;
      rotatingWord.textContent = heroWords[wordIndex];
      rotatingWord.classList.remove("is-changing");
    }, 180);
  }

  function startHeroRotation() {
    window.clearInterval(rotationTimer);
    rotationTimer = window.setInterval(rotateHeroWord, 3000);
  }

  function stopHeroRotation() {
    window.clearInterval(rotationTimer);
    window.clearTimeout(changeTimer);
    rotatingWord.classList.remove("is-changing");
  }

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      stopHeroRotation();
    } else {
      startHeroRotation();
    }
  });

  startHeroRotation();
}

const revealTargets = document.querySelectorAll("[data-reveal]");

if (!reducedMotion.matches && "IntersectionObserver" in window) {
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
      threshold: 0.08,
      rootMargin: "0px 0px -36px 0px",
    }
  );

  revealTargets.forEach((target) => revealObserver.observe(target));
} else {
  revealTargets.forEach((target) => target.classList.add("is-visible"));
}

const contactForm = document.querySelector("#contact-form");

if (contactForm) {
  const formStatus = contactForm.querySelector("[data-form-status]");
  const emailButton = contactForm.querySelector("[data-email-message]");
  const copyButton = contactForm.querySelector("[data-copy-message]");
  const fields = {
    name: contactForm.elements.namedItem("name"),
    business: contactForm.elements.namedItem("business"),
    phone: contactForm.elements.namedItem("phone"),
    email: contactForm.elements.namedItem("email"),
    helpType: contactForm.elements.namedItem("helpType"),
    message: contactForm.elements.namedItem("message"),
  };

  const errorMessages = {
    name: "Please enter your name.",
    phone: "Please enter a phone or WhatsApp number.",
    email: "Enter a valid email address or leave this field empty.",
    helpType: "Please select the type of help you need.",
    message: "Please tell us what is happening now.",
  };

  function setFieldError(name, message = "") {
    const field = fields[name];
    const error = document.querySelector(`#${field.id}-error`);

    field.setAttribute("aria-invalid", String(Boolean(message)));
    if (error) {
      error.textContent = message;
    }
  }

  function fieldIsValid(name) {
    const field = fields[name];
    const value = field.value.trim();

    if (name === "email") {
      return !value || !field.validity.typeMismatch;
    }

    if (name === "phone") {
      return value.replace(/\D/g, "").length >= 7;
    }

    if (name === "business") {
      return true;
    }

    return Boolean(value);
  }

  function validateForm() {
    const names = ["name", "phone", "email", "helpType", "message"];
    let firstInvalidField = null;

    names.forEach((name) => {
      const isValid = fieldIsValid(name);
      setFieldError(name, isValid ? "" : errorMessages[name]);

      if (!isValid && !firstInvalidField) {
        firstInvalidField = fields[name];
      }
    });

    if (firstInvalidField) {
      formStatus.textContent = "Please check the highlighted fields.";
      firstInvalidField.focus();
      return false;
    }

    formStatus.textContent = "";
    return true;
  }

  function buildMessage() {
    const lines = [
      "Hello Hayalows.",
      "",
      `My name is: ${fields.name.value.trim()}`,
    ];

    if (fields.business.value.trim()) {
      lines.push("", `Business or organisation: ${fields.business.value.trim()}`);
    }

    lines.push("", `Phone or WhatsApp: ${fields.phone.value.trim()}`);

    if (fields.email.value.trim()) {
      lines.push("", `Email: ${fields.email.value.trim()}`);
    }

    lines.push(
      "",
      `Type of help: ${fields.helpType.value}`,
      "",
      "What is happening now:",
      "",
      fields.message.value.trim()
    );

    return lines.join("\n");
  }

  function getValidMessage() {
    return validateForm() ? buildMessage() : null;
  }

  Object.entries(fields).forEach(([name, field]) => {
    if (name === "business") {
      return;
    }

    const eventName = field.tagName === "SELECT" ? "change" : "input";
    field.addEventListener(eventName, () => {
      if (fieldIsValid(name)) {
        setFieldError(name);
      }
    });
  });

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const message = getValidMessage();

    if (!message) {
      return;
    }

    const whatsappUrl = `${siteConfig.whatsappUrl}?text=${encodeURIComponent(message)}`;
    const whatsappWindow = window.open(whatsappUrl, "_blank");

    if (whatsappWindow) {
      whatsappWindow.opener = null;
      formStatus.textContent = "WhatsApp opened with your message ready to review.";
    } else {
      formStatus.textContent = "WhatsApp could not open. Copy the message and send it in the app you prefer.";
    }
  });

  emailButton?.addEventListener("click", () => {
    const message = getValidMessage();

    if (!message) {
      return;
    }

    const subject = `Hayalows enquiry from ${fields.name.value.trim()}`;
    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    formStatus.textContent = "Your email app should open with the message ready to review.";
  });

  copyButton?.addEventListener("click", async () => {
    const message = getValidMessage();

    if (!message) {
      return;
    }

    try {
      await navigator.clipboard.writeText(message);
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = message;
      textArea.setAttribute("readonly", "");
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";
      document.body.append(textArea);
      textArea.select();
      document.execCommand("copy");
      textArea.remove();
    }

    formStatus.textContent = "Message copied. You can paste it wherever you prefer.";
  });
}
