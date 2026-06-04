/** AstralMandala products page v2 — simplified ladder + partnerships detail */
window.AM_V2_DATA = {
  links: {
    mainSite: "https://astralmandala.com",
    contact: "https://astralmandala.com/contact/",
    email: "hello@astralmandala.com",
    productsV1: "index-v1.html",
    productsV2: "index-v2.html",
    partnerships: "partnerships.html",
    sayIt: "https://sayit.astralmandala.com",
  },
  learnMoreCta: { label: "Learn more", href: "https://astralmandala.com/contact/" },
  productPage(slug) {
    return `products/product.html?p=${slug}`;
  },
  freeSection: {
    eyebrow: "Free",
    title: "Dip your toe in",
    offers: [
      {
        id: "sayit",
        name: "SayIt",
        price: "Free",
        detail: "Send a SayIt — share nurture with someone who matters.",
        pageSlug: "sayit",
        ctaPrimary: { label: "Try SayIt", href: "https://sayit.astralmandala.com", external: true },
        ctaSecondary: { label: "Learn more", href: "products/product.html?p=sayit" },
      },
      {
        id: "briefing",
        name: "Weekly briefing",
        price: "Free",
        detail: "30-minute live session — orientation to the AstralMandala approach.",
        pageSlug: "weekly-briefing",
        ctaPrimary: { label: "Book for free", href: "products/product.html?p=weekly-briefing#book" },
        ctaSecondary: { label: "Learn more", href: "products/product.html?p=weekly-briefing" },
      },
      {
        id: "informed",
        name: "Thoughtful updates",
        price: "Free",
        detail: "Events, insight, and useful bits from AstralMandala — nurture in your inbox, not a blast.",
        pageSlug: "thoughtful-updates",
        ctaPrimary: { label: "Keep me informed", href: "products/product.html?p=thoughtful-updates#book" },
        ctaSecondary: { label: "Learn more", href: "products/product.html?p=thoughtful-updates" },
      },
    ],
  },
  section: {
    eyebrow: "Products",
    title: "Programmes",
  },
  ladder: [
    {
      id: "diagnostic",
      name: "Diagnostic",
      price: "£1,000",
      role: "Where you stand today",
      pageSlug: "diagnostic",
      bullets: [
        "Half-day or full-day business diagnostic",
        "Emotional capacity across your organisation",
        "Clear recommendations and next steps",
      ],
      ctaPrimary: { label: "Book diagnostic", href: "products/product.html?p=diagnostic#book" },
    },
    {
      id: "stillpoint",
      name: "Still Point",
      price: "£3,000",
      role: "Leadership recalibration",
      pageSlug: "still-point",
      bullets: [
        "Executive immersion and response to risk",
        "Personal recalibration under sustained complexity",
        "Structured leadership reset while in role",
      ],
      ctaPrimary: { label: "Book a call", href: "products/product.html?p=still-point#book" },
    },
    {
      id: "m14",
      name: "Mandala14",
      price: "£95 per person",
      role: "Entry level guided reset",
      pageSlug: "mandala14",
      bullets: [
        "2-week nourishment protocol",
        "Individuals or teams — per participant",
        "Digital journey with mentor check-ins",
      ],
      ctaPrimary: { label: "Buy now", href: "products/product.html?p=mandala14#book" },
    },
    {
      id: "m42",
      name: "Mandala42",
      price: "Pricing TBC",
      role: "Full programme for lasting change",
      pageSlug: "mandala42",
      bullets: [
        "84-day limbic reset (12 weeks)",
        "Full protocol with ECI measurement",
        "Flagship organisational transformation",
      ],
      ctaPrimary: { label: "Join waitlist", href: "products/product.html?p=mandala42#book" },
    },
  ],
  partnershipTeaser: {
    title: "Government, NGOs, partners & collaboration",
    body:
      "Channel partners, embedded benefits, public-sector mandates, research pilots, and strategic collaboration — when delivery happens through or alongside other organisations.",
    cta: { label: "Partnerships & channels", href: "partnerships.html" },
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
