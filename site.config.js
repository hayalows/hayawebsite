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
        title: "Pay for a Hayalows service",
        description:
          "You'll continue to Paystack to pay the amount agreed with Hayalows.",
        url: "https://paystack.shop/pay/vt_h0ybe0po",
        actionLabel: "Continue to Paystack",
        points: Object.freeze([
          "Check the agreed amount.",
          "Use your correct name.",
          "Keep the Paystack reference after paying.",
        ]),
      }),
      fiftysBlissStore: Object.freeze({
        title: "Shop 50's Bliss",
        description:
          "You'll continue to the 50's Bliss Paystack store to browse products and place a new order.",
        url: "https://paystack.shop/50sbliss",
        actionLabel: "Continue to store",
        points: Object.freeze([]),
      }),
      fiftysBlissOrder: Object.freeze({
        title: "Pay for your 50's Bliss order",
        description:
          "You'll continue to Paystack to pay the total already confirmed with 50's Bliss.",
        url: "https://paystack.shop/pay/vt_voypnsow",
        actionLabel: "Continue to Paystack",
        points: Object.freeze([
          "Check the products, quantity and total.",
          "Use the same name as your order.",
          "Keep the Paystack reference after paying.",
        ]),
      }),
    }),
  }),
  verifiedSocialLinks: Object.freeze({}),
  futureVentures: Object.freeze([]),
});
