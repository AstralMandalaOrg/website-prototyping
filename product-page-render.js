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
