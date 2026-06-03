/** AstralMandala products page — copy & CTA source of truth (v1 demo) */
window.AM_PRODUCTS_DATA = {
  links: {
    mainSite: "https://astralmandala.com",
    sayIt: "https://sayit.astralmandala.com",
    contact: "https://astralmandala.com/contact/",
    linkedIn: "https://www.linkedin.com/company/astralmandala",
    email: "hello@astralmandala.com",
  },
  learnMoreCta: { label: "Learn more", href: "#newsletter" },
  freeSection: {
    eyebrow: "Free",
    title: "Dip your toe in",
    offers: [
      {
        id: "sayit",
        name: "SayIt",
        price: "Free",
        detail: "Send a SayIt — share nurture with someone who matters.",
        ctaPrimary: { label: "Try SayIt", href: "https://sayit.astralmandala.com", external: true },
        ctaSecondary: { label: "Learn more", href: "https://sayit.astralmandala.com/about", external: true },
      },
      {
        id: "briefing",
        name: "Weekly briefing",
        price: "Free",
        detail: "30-minute live session — orientation to the AstralMandala approach.",
        ctaPrimary: { label: "Book for free", href: "#newsletter" },
        ctaSecondary: { label: "Learn more", href: "#newsletter" },
      },
      {
        id: "informed",
        name: "Thoughtful updates",
        price: "Free",
        detail: "Events, insight, and useful bits from AstralMandala — nurture in your inbox, not a blast.",
        ctaPrimary: { label: "Keep me informed", href: "#newsletter" },
        ctaSecondary: { label: "Learn more", href: "https://astralmandala.com/news/" },
      },
    ],
  },
  pathSection: {
    eyebrow: "Products",
    title: "Go deeper",
  },
  primaryLadder: [
    {
      id: "diagnostic",
      name: "Diagnostic",
      price: "£1,000",
      role: "Where you stand today",
      audiences: ["Businesses"],
      bullets: [
        "Half-day or full-day business diagnostic",
        "Where emotional capacity sits in your organisation",
        "Clear next-step recommendations",
        "Foundation for programme design",
      ],
      ctaPrimary: { label: "Book diagnostic", href: "#newsletter" },
    },
    {
      id: "m14",
      name: "Mandala14",
      price: "£95 per person",
      role: "Entry level guided reset",
      audiences: ["Individuals", "Businesses"],
      bullets: [
        "For individuals or organisations — priced per participant",
        "2-week Mandala nourishment protocol",
        "Digital journey plus drop-in sessions",
        "Daily mentor check-ins and 14-day content library",
      ],
      featured: true,
      ctaPrimary: { label: "Buy now", href: "#newsletter" },
    },
    {
      id: "m42",
      name: "Mandala42",
      price: "Pricing TBC",
      role: "Full programme for lasting change",
      audiences: ["Business"],
      bullets: [
        "Full 84-day limbic reset protocol (12 weeks)",
        "Phases: nourishment, core methodology, integration",
        "1-to-1 mentor support and ECI measurement",
        "Flagship organisational transformation offer",
      ],
      ctaPrimary: { label: "Join waitlist", href: "#newsletter" },
    },
  ],
  stillPoint: {
    title: "Still Point Leaders Series",
    intro:
      "Precision leadership architecture for people operating under sustained complexity — working at the human system level, not skills alone.",
    items: [
      {
        name: "Executive Briefings",
        detail: "90 minutes, in-person or remote — the macro-to-micro case for human capacity intelligence.",
      },
      {
        name: "Still Point — Response to Risk",
        detail: "One-day executive immersion combining briefing content with personal recalibration.",
      },
      {
        name: "Still Point 7:1:7",
        detail: "15 days (7 remote + 1 in-person + 7 remote) — structured leadership reset while in role.",
      },
      {
        name: "Private 1:1 Still Point",
        detail: "42-day executive reset — confidential, bespoke, delivered by the founder.",
      },
    ],
    cta: { label: "Explore leadership programmes", href: "#newsletter" },
  },
  organisation: [
    {
      id: "enterprise",
      name: "Enterprise",
      price: "£3,000",
      body: "Pre-canned consultancy and engagement package for teams ready to deploy human capacity infrastructure.",
      bullets: [
        "Structured organisational offer",
        "Consulting and programme design",
        "Volume and cohort options",
      ],
      cta: { label: "Book a call", href: "https://astralmandala.com/contact/" },
    },
    {
      id: "bespoke",
      name: "Bespoke",
      price: "Contact us",
      body: "Tailored programmes and advisory for unique organisational contexts.",
      bullets: [
        "Custom protocol design",
        "Leadership and workforce pathways",
        "Bolt-on services and expansion",
      ],
      cta: { label: "Contact us", href: "https://astralmandala.com/contact/" },
    },
    {
      id: "collaborate",
      name: "Collaborate",
      price: "Contact us",
      body: "Innovation, research, and pilot programme partnerships for health, academia, and strategic allies.",
      bullets: [
        "Research and efficacy evidence",
        "Pilot and grant-aligned programmes",
        "Population-scale partnership positioning",
      ],
      cta: { label: "Discuss collaboration", href: "https://astralmandala.com/contact/" },
    },
  ],
  b2b2cSection: {
    eyebrow: "Partners & channels",
    title: "Reach people through your offer",
    lead:
      "For organisations that deliver to others — resale, embedded benefits, or public-purpose programmes.",
    channels: [
      {
        id: "resellers",
        name: "Channel partners",
        body: "Resell or refer AstralMandala programmes as part of how you already serve clients.",
        examples: "HR firms, people management specialists, recruiters, advisory practices",
        bullets: [
          "White-label or co-branded delivery options",
          "Mandala14 through to enterprise pathways",
          "Revenue share and partner enablement",
        ],
        cta: { label: "Discuss partnership", href: "https://astralmandala.com/contact/" },
      },
      {
        id: "embedded",
        name: "Embedded benefit",
        body: "Bundle human capacity programmes inside what you already offer customers — a genuine value-add, not a bolt-on brochure.",
        examples: "Banks, platforms, memberships, benefits providers, telcos",
        bullets: [
          "Mandala14 as a starter benefit or loyalty layer",
          "Measurable outcomes for retention and trust",
          "Designed for B2B2C scale",
        ],
        cta: { label: "Explore embedding", href: "https://astralmandala.com/contact/" },
      },
      {
        id: "public",
        name: "Public & purpose-led",
        body: "Partnerships where delivery supports a mandate, obligation, or population outcome — not only commercial ROI.",
        examples: "Government, NGOs, social care, health systems, regional commissioners",
        bullets: [
          "Evidence and pilot-friendly models",
          "Aligns with wellbeing and prevention objectives",
          "Collaborate tier for larger programmes",
        ],
        cta: { label: "Talk to us", href: "https://astralmandala.com/contact/" },
      },
    ],
  },
};
