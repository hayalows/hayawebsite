window.HAYALOWS_SITE_CONFIG = Object.freeze({
  businessName: "Hayalows Ventures",
  domain: "https://hayalows.com",
  email: "info@hayalows.com",
  whatsappLocal: "050 620 1345",
  whatsappInternational: "+233 50 620 1345",
  whatsappNumber: "233506201345",
  whatsappUrl: "https://wa.me/233506201345",
  defaultWhatsappMessage:
    "Hello Hayalows. I would like to discuss something I need help with.",
  paymentSupportWhatsappMessage:
    "Hello Hayalows. I need help with a payment.",
  payments: Object.freeze({
    hayalows: Object.freeze({
      terminalUrl: "https://paystack.shop/pay/vt_h0ybe0po",
      ussdCode: "*415*2583#",
      ussdHref: "tel:*415*2583%23",
    }),
    fiftysBliss: Object.freeze({
      storefrontUrl: "https://paystack.shop/50sbliss",
      terminalUrl: "https://paystack.shop/pay/vt_voypnsow",
      ussdCode: "*415*2584#",
      ussdHref: "tel:*415*2584%23",
    }),
    flows: Object.freeze({
      hayalows: Object.freeze({
        title: "Pay Hayalows Ventures",
        description:
          "You are about to open the Hayalows secure Paystack payment page.",
        url: "https://paystack.shop/pay/vt_h0ybe0po",
        actionLabel: "Continue to Paystack",
        points: Object.freeze([
          "Confirm the amount agreed with Hayalows.",
          "Enter your correct full name when Paystack requests it.",
          "Keep the Paystack payment confirmation after paying.",
        ]),
      }),
      fiftysBlissStore: Object.freeze({
        title: "Visit the 50's Bliss store",
        description:
          "You will be taken to the 50's Bliss Paystack Storefront, where you can browse available products and place an order.",
        url: "https://paystack.shop/50sbliss",
        actionLabel: "Continue to store",
        points: Object.freeze([]),
      }),
      fiftysBlissOrder: Object.freeze({
        title: "Pay for a 50's Bliss order",
        description:
          "You are about to open the 50's Bliss secure Paystack payment page.",
        url: "https://paystack.shop/pay/vt_voypnsow",
        actionLabel: "Continue to Paystack",
        points: Object.freeze([
          "Confirm the products and quantity in your order.",
          "Confirm the total amount.",
          "Use the same name you used when placing the order.",
          "Keep the Paystack payment confirmation after paying.",
        ]),
      }),
    }),
  }),
  verifiedSocialLinks: Object.freeze({}),
  futureVentures: Object.freeze([]),
});
