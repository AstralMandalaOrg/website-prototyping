/** AstralMandala products page v3 */
window.AM_V3_DATA = {
  links: {
    mainSite: "https://astralmandala.com",
    contact: "https://astralmandala.com/contact/",
    email: "hello@astralmandala.com",
    productsV1: "index-v1.html",
    productsV2: "index-v2.html",
    productsV3: "index-v3.html",
    partnerships: "partnerships.html",
    sayIt: "https://sayit.astralmandala.com",
  },
  learnMoreCta: { label: "Learn more", href: "https://astralmandala.com/contact/" },
  productPage(slug) {
    return `products/product.html?p=${slug}`;
  },
  freeSection: {
    eyebrow: "Dip your toe in",
    title: "Gifted",
    offers: [
      {
        id: "sayit",
        name: "SayIt",
        price: "Gifted",
        detail: "Send a SayIt — share nurture with someone who matters.",
        pageSlug: "sayit",
        ctaPrimary: { label: "Try SayIt", href: "https://sayit.astralmandala.com", external: true },
        ctaSecondary: { label: "Learn more", href: "products/product.html?p=sayit" },
      },
    ],
  },
  section: {
    eyebrow: "Go deeper",
    title: "Still Point Leaders Series",
    lead:
      "Take what you need. From an executive briefing or diagnostic through Still Point and Mandala — explored at whatever depth feels right.",
  },
  ladder: [
    {
      id: "exec-briefing",
      name: "Executive briefing",
      price: "£XXXX",
      role: "Know the Unknowns · 90 minutes",
      pageSlug: "exec-briefing",
      bullets: [
        "Up to 20 participants",
        "Orientation to human capacity and emotional granularity",
        "Clear view of what comes next in the series",
      ],
      ctaPrimary: { label: "Book briefing", href: "products/product.html?p=exec-briefing#book" },
    },
    {
      id: "response-to-risk",
      name: "Response to Risk",
      price: "£3000",
      role: "One-day leadership immersion",
      pageSlug: "response-to-risk",
      bullets: [
        "9am–5pm · up to 20 people",
        "Recalibration under sustained complexity",
        "Still in role — not a retreat",
      ],
      ctaPrimary: { label: "Book a call", href: "products/product.html?p=response-to-risk#book" },
    },
    {
      id: "mandala14",
      name: "Mandala14",
      price: "£95 per person",
      role: "Nourishment protocol",
      pageSlug: "mandala14",
      bullets: [
        "14-day mentored sequence",
        "Any cohort size — individuals or teams",
        "Digital journey with live mentor support",
      ],
      ctaPrimary: { label: "Buy now", href: "products/product.html?p=mandala14#book" },
    },
  ],
  mandala42Section: {
    eyebrow: "Limbic reset",
    title: "Mandala42 Protocol",
    lead:
      "The full 84-day limbic reset — nourishment, core methodology, and integration with mentor support and ECI measurement.",
    product: {
      id: "m42",
      name: "Mandala42",
      price: "£XXX per person",
      role: "Full programme for lasting change",
      pageSlug: "mandala42",
      flow: ["14 day Nourishment", "42 day Core", "28 day Integration"],
      bullets: [
        "84-day limbic reset",
        "1-to-1 mentor support throughout",
        "ECI measurement",
        "Flagship organisational transformation",
      ],
      ctaPrimary: { label: "Join waitlist", href: "products/product.html?p=mandala42#book" },
    },
  },
  partnershipsPage: {
    eyebrow: "Partners & channels",
    title: "Reach people through your offer",
    lead:
      "For organisations that deliver to others — resale, embedded benefits, or public-purpose programmes.",
    backLabel: "Back to programmes",
    channels: [
      {
        id: "channel-partners",
        name: "Channel partners",
        body: "Resell or refer AstralMandala programmes as part of how you already serve clients.",
        examples: "HR firms, people management specialists, recruiters, advisory practices",
        bullets: [
          "White-label or co-branded delivery",
          "Mandala14 through to enterprise pathways",
          "Revenue share and partner enablement",
        ],
      },
      {
        id: "embedded-benefit",
        name: "Embedded benefit",
        body: "Bundle programmes inside what you already offer — like insurance with a bank account.",
        examples: "Banks, platforms, memberships, benefits providers, telcos",
        bullets: [
          "Mandala14 as a starter benefit or loyalty layer",
          "Measurable outcomes for retention",
          "Designed for B2B2C scale",
        ],
      },
      {
        id: "public-sector",
        name: "Government, NGO & SCR",
        body: "Partnerships where delivery supports a mandate, obligation, or population outcome.",
        examples: "Government, NGOs, social care, health systems, regional commissioners",
        bullets: [
          "Evidence and pilot-friendly models",
          "Wellbeing and prevention objectives",
          "Larger programmes via collaboration",
        ],
      },
      {
        id: "collaboration",
        name: "Collaboration & research",
        body: "Innovation, research, and pilot programmes with health, academia, and strategic allies.",
        examples: "Research partners, grant-funded pilots, population-scale programmes",
        bullets: [
          "Efficacy and evidence building",
          "Pilot and grant-aligned delivery",
          "Strategic alliance positioning",
        ],
      },
    ],
    cta: { label: "Contact us", href: "https://astralmandala.com/contact/" },
  },
};
