const paymentSiteConfig = window.HAYALOWS_SITE_CONFIG || {};
const paymentConfig = paymentSiteConfig.payments || {};
const paymentFlows = paymentConfig.flows || {};
const paymentDialog = document.querySelector("[data-payment-dialog]");
const paymentTriggers = document.querySelectorAll("[data-payment-trigger]");
const copyButtons = document.querySelectorAll("[data-copy-ussd]");
const paymentRoutes = [...document.querySelectorAll("[data-payment-route]")];
const mobilePaymentViewport = window.matchMedia("(max-width: 680px)");
const reducedPaymentMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
);

let activePaymentTrigger = null;
const copyResetTimers = new WeakMap();

function setPaymentRouteLayout(viewport) {
  paymentRoutes.forEach((route) => {
    route.open = !viewport.matches;
  });
}

if (paymentRoutes.length) {
  setPaymentRouteLayout(mobilePaymentViewport);
  mobilePaymentViewport.addEventListener("change", setPaymentRouteLayout);

  paymentRoutes.forEach((route) => {
    route.addEventListener("toggle", () => {
      if (!mobilePaymentViewport.matches || !route.open) {
        return;
      }

      paymentRoutes.forEach((otherRoute) => {
        if (otherRoute !== route) {
          otherRoute.open = false;
        }
      });
    });
  });
}

function getFocusableElements(container) {
  return [
    ...container.querySelectorAll(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    ),
  ].filter(
    (element) =>
      !element.hasAttribute("hidden") &&
      element.getAttribute("aria-hidden") !== "true"
  );
}

function closePaymentDialog({ restoreFocus = true } = {}) {
  if (!paymentDialog?.open) {
    return;
  }

  paymentDialog.close();
  document.body.classList.remove("modal-open");

  if (restoreFocus && activePaymentTrigger) {
    activePaymentTrigger.focus({ preventScroll: true });
  }

  activePaymentTrigger = null;
}

function openPaymentDialog(trigger) {
  const flow = paymentFlows[trigger.dataset.paymentKey];

  if (
    !flow ||
    !paymentDialog ||
    typeof paymentDialog.showModal !== "function"
  ) {
    return false;
  }

  const title = paymentDialog.querySelector("[data-dialog-title]");
  const description = paymentDialog.querySelector("[data-dialog-description]");
  const beforeLabel = paymentDialog.querySelector("[data-dialog-before]");
  const points = paymentDialog.querySelector("[data-dialog-points]");
  const confirm = paymentDialog.querySelector("[data-payment-confirm]");

  title.textContent = flow.title;
  description.textContent = flow.description;
  points.replaceChildren();

  flow.points.forEach((point) => {
    const item = document.createElement("li");
    item.textContent = point;
    points.append(item);
  });

  beforeLabel.hidden = flow.points.length === 0;
  confirm.textContent = flow.actionLabel;
  confirm.href = flow.url;
  activePaymentTrigger = trigger;
  document.body.classList.add("modal-open");
  paymentDialog.showModal();

  window.requestAnimationFrame(() => {
    paymentDialog.querySelector("[data-dialog-close]")?.focus();
  });

  return true;
}

paymentTriggers.forEach((trigger) => {
  trigger.addEventListener("click", (event) => {
    if (openPaymentDialog(trigger)) {
      event.preventDefault();
    }
  });
});

if (paymentDialog) {
  paymentDialog.querySelectorAll("[data-dialog-close]").forEach((control) => {
    control.addEventListener("click", () => closePaymentDialog());
  });

  paymentDialog.addEventListener("click", (event) => {
    if (event.target === paymentDialog) {
      closePaymentDialog();
    }
  });

  paymentDialog.addEventListener("cancel", (event) => {
    event.preventDefault();
    closePaymentDialog();
  });

  paymentDialog.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      closePaymentDialog();
      return;
    }

    if (event.key !== "Tab") {
      return;
    }

    const focusable = getFocusableElements(paymentDialog);
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (!first || !last) {
      event.preventDefault();
      return;
    }

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  paymentDialog
    .querySelector("[data-payment-confirm]")
    ?.addEventListener("click", () => {
      window.setTimeout(() => closePaymentDialog(), 0);
    });
}

function copyWithFallback(text) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.setAttribute("readonly", "");
  textArea.style.position = "fixed";
  textArea.style.opacity = "0";
  document.body.append(textArea);
  textArea.select();
  const copied = document.execCommand("copy");
  textArea.remove();

  if (!copied) {
    throw new Error("Copy command was unavailable.");
  }
}

async function copyText(text) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }

  copyWithFallback(text);
}

copyButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    const key = button.dataset.copyUssd;
    const details = paymentConfig[key];
    const status = button
      .closest("[data-ussd-option]")
      ?.querySelector("[data-copy-status]");
    const originalLabel = button.dataset.originalLabel || button.textContent;

    button.dataset.originalLabel = originalLabel;
    window.clearTimeout(copyResetTimers.get(button));

    try {
      await copyText(details.ussdCode);
      button.textContent = "Copied";
      if (status) {
        status.textContent = `${details.ussdCode} copied to your clipboard.`;
      }
    } catch {
      if (status) {
        status.textContent = `Copy did not work. Select and copy ${details.ussdCode}.`;
      }
      return;
    }

    const resetTimer = window.setTimeout(
      () => {
        button.textContent = originalLabel;
        if (status) {
          status.textContent = "";
        }
      },
      reducedPaymentMotion.matches ? 1200 : 2200
    );
    copyResetTimers.set(button, resetTimer);
  });
});

document.querySelectorAll("[data-payment-support-whatsapp]").forEach((link) => {
  const message =
    paymentSiteConfig.paymentSupportWhatsappMessage ||
    "Hello Hayalows. I need help with a payment.";
  link.href = `${paymentSiteConfig.whatsappUrl}?text=${encodeURIComponent(
    message
  )}`;
});
