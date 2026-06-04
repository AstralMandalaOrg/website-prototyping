(function () {
  const catalog = window.AM_PRODUCT_PAGES;
  if (!catalog) return;

  const params = new URLSearchParams(window.location.search);
  const slug = params.get("p");
  const page = slug && catalog.pages[slug];

  if (!page) {
    document.body.innerHTML =
      '<main class="container" style="padding:4rem 0"><h1>Product not found</h1><p><a href="' +
      catalog.links.home +
      '">Back to products</a></p></main>';
    return;
  }

  function el(tag, attrs, children) {
    const node = document.createElement(tag);
    if (attrs) {
      Object.entries(attrs).forEach(([k, v]) => {
        if (k === "className") node.className = v;
        else if (k.startsWith("on") && typeof v === "function")
          node.addEventListener(k.slice(2).toLowerCase(), v);
        else node.setAttribute(k, v);
      });
    }
    (children || []).forEach((c) => {
      if (c == null) return;
      node.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    });
    return node;
  }

  function ctaLink(cta, className) {
    return el(
      "a",
      Object.assign({ className, href: cta.href }, cta.external ? { target: "_blank", rel: "noreferrer" } : {}),
      [cta.label]
    );
  }

  const pillarIcons = {
    protocol: "◈",
    daily: "▶",
    journal: "▣",
    live: "◎",
  };

  function renderMandalaShowcase(page) {
    const assets = catalog.mandalaAppAssets;
    const show = page.mandalaShowcase;
    if (!show || !assets) return null;

    const brand = el("section", { className: "mandala-brand" }, [
      el("div", { className: "container mandala-brand__inner" }, [
        el("img", {
          className: "mandala-brand__logo",
          src: show.logo.src,
          alt: show.logo.alt,
          width: "640",
          height: "280",
          loading: "lazy",
        }),
      ]),
    ]);

    const story = el("section", { className: "mandala-story" }, [
      el("div", { className: "container mandala-story__grid" }, [
        el("div", { className: "mandala-story__copy" }, [
          el("h2", { className: "mandala-story__title" }, [show.storyTitle]),
          ...show.storyParagraphs.map((p) => el("p", null, [p])),
        ]),
        el("figure", { className: "mandala-story__stack" }, [
          el("img", {
            src: assets.stack,
            alt: "Mandala app on mobile",
            width: "450",
            height: "540",
            loading: "lazy",
          }),
        ]),
      ]),
    ]);

    const pillars = el("section", { className: "mandala-pillars" }, [
      el("div", { className: "container" }, [
        el(
          "ul",
          { className: "mandala-pillars__grid" },
          assets.pillars.map((item) =>
            el("li", { className: "mandala-pillar" }, [
              el("span", { className: "mandala-pillar__icon", "aria-hidden": "true" }, [
                pillarIcons[item.icon] || "◆",
              ]),
              el("h3", { className: "mandala-pillar__title" }, [item.title]),
            ])
          )
        ),
      ]),
    ]);

    const screens = el("section", { className: "mandala-screens" }, [
      el("div", { className: "container" }, [
        el("h2", { className: "mandala-screens__heading" }, ["Your digital companion"]),
        el("p", { className: "mandala-screens__lead" }, [
          "The Mandala journal on mobile — daily practice, cohort progress, and what's ahead.",
        ]),
        el(
          "ul",
          { className: "mandala-screens__grid" },
          assets.screens.map((screen) =>
            el("li", { className: "mandala-screen" }, [
              el("figure", null, [
                el("img", {
                  src: screen.src,
                  alt: screen.alt,
                  loading: "lazy",
                }),
                el("figcaption", null, [screen.caption]),
              ]),
            ])
          )
        ),
      ]),
    ]);

    const scheduleBlock = show.schedule
      ? el("section", { className: "mandala-schedule" }, [
          el("div", { className: "container mandala-schedule__inner" }, [
            el("h2", { className: "mandala-schedule__title" }, [show.schedule.title]),
            el(
              "ul",
              { className: "mandala-schedule__dates" },
              show.schedule.lines.map((line) => el("li", null, [line]))
            ),
            show.schedule.note
              ? el("p", { className: "mandala-schedule__note" }, [show.schedule.note])
              : null,
          ]),
        ])
      : null;

    return el("div", { className: "mandala-showcase" }, [
      brand,
      story,
      pillars,
      screens,
      scheduleBlock,
    ]);
  }

  document.title = page.title;

  const root = document.getElementById("product-page-root");
  if (!root) return;

  const hero = el("section", { className: "product-hero" }, [
    el("p", { className: "eyebrow" }, [page.eyebrow]),
    el("p", { className: "product-hero__price" }, [page.price]),
    el("h1", { className: "product-hero__title" }, [page.heroTitle]),
    el("p", { className: "product-hero__lead" }, [page.heroLead]),
    el("div", { className: "product-hero__actions" }, [
      ctaLink(page.ctaPrimary, "btn btn--primary"),
      ctaLink(page.ctaSecondary, "btn btn--ghost"),
    ]),
  ]);

  const introParas = page.introParagraphs.map((p) => el("p", null, [p]));
  const introCol = el("div", null, [
    el("h2", null, [page.introTitle]),
    ...introParas,
    el("p", { className: "product-audience" }, [
      el("strong", null, ["Who it's for: "]),
      page.audience,
    ]),
  ]);

  const includesCol = el("div", null, [
    el("h2", null, [page.includesTitle]),
    el(
      "ul",
      { className: "product-includes" },
      page.includes.map((item) => el("li", null, [item]))
    ),
  ]);

  const body = el("section", { className: "product-body" }, [
    el("div", { className: "container product-body__grid" }, [introCol, includesCol]),
  ]);

  root.appendChild(hero);

  if (page.layout === "mandala-app") {
    const showcase = renderMandalaShowcase(page);
    if (showcase) root.appendChild(showcase);
  }

  root.appendChild(body);

  if (page.highlightBox) {
    const hb = page.highlightBox;
    root.appendChild(
      el("section", { className: "container" }, [
        el("article", { className: "product-highlight" }, [
          el("h3", null, [hb.title]),
          el("p", null, [hb.body]),
          ctaLink(hb.cta, "btn btn--primary"),
        ]),
      ])
    );
  }

  const form = el("form", { className: "product-booking__form", id: "product-booking-form" }, [
    el("div", { className: "field" }, [
      el("label", { htmlFor: "pb-first" }, ["First name"]),
      el("input", { id: "pb-first", name: "firstName", type: "text", required: "true" }),
    ]),
    el("div", { className: "field" }, [
      el("label", { htmlFor: "pb-last" }, ["Last name"]),
      el("input", { id: "pb-last", name: "lastName", type: "text", required: "true" }),
    ]),
    el("div", { className: "field" }, [
      el("label", { htmlFor: "pb-company" }, ["Company"]),
      el("input", { id: "pb-company", name: "company", type: "text" }),
    ]),
    el("div", { className: "field" }, [
      el("label", { htmlFor: "pb-email" }, ["Email"]),
      el("input", { id: "pb-email", name: "email", type: "email", required: "true" }),
    ]),
    el("button", { type: "submit", className: "btn btn--primary btn--block" }, [page.ctaPrimary.label]),
  ]);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const subject = encodeURIComponent(`AstralMandala — ${page.heroTitle}`);
    const bodyText = encodeURIComponent(
      [
        `Product: ${page.heroTitle}`,
        `First name: ${fd.get("firstName") || ""}`,
        `Last name: ${fd.get("lastName") || ""}`,
        `Company: ${fd.get("company") || ""}`,
        `Email: ${fd.get("email") || ""}`,
        "",
        "Submitted from product page demo.",
      ].join("\n")
    );
    window.location.href = `mailto:hello@astralmandala.com?subject=${subject}&body=${bodyText}`;
  });

  root.appendChild(
    el("section", { className: "product-booking", id: "book" }, [
      el("div", { className: "container product-booking__panel" }, [
        el("h2", null, [page.formTitle]),
        el("p", { className: "product-booking__note" }, [page.formNote]),
        form,
      ]),
    ])
  );
})();
