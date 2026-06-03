(function () {
  const data = window.AM_PRODUCTS_DATA;
  if (!data) return;

  function el(tag, attrs, children) {
    const node = document.createElement(tag);
    if (attrs) {
      Object.entries(attrs).forEach(([k, v]) => {
        if (k === "className") node.className = v;
        else if (k === "htmlFor") node.htmlFor = v;
        else if (k.startsWith("on") && typeof v === "function") node.addEventListener(k.slice(2).toLowerCase(), v);
        else node.setAttribute(k, v);
      });
    }
    (children || []).forEach((c) => {
      if (c == null) return;
      node.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    });
    return node;
  }

  function learnMoreButton(override) {
    const cta = override || data.learnMoreCta || { label: "Learn more", href: "#newsletter" };
    return el("a", {
      className: "btn btn--ghost btn--block btn--small",
      href: cta.href,
      ...(cta.external ? { target: "_blank", rel: "noreferrer" } : {}),
    }, [cta.label]);
  }

  function primaryButton(cta) {
    return el(
      "a",
      Object.assign(
        { className: "btn btn--primary btn--block", href: cta.href },
        cta.external ? { target: "_blank", rel: "noreferrer" } : {}
      ),
      [cta.label]
    );
  }

  function renderSectionHead(elementId, section) {
    const head = document.getElementById(elementId);
    if (!head || !section) return;
    head.innerHTML = "";
    head.appendChild(el("p", { className: "eyebrow" }, [section.eyebrow]));
    head.appendChild(el("h2", { className: "section-title" }, [section.title]));
  }

  function renderFreeSection() {
    const section = data.freeSection;
    const root = document.getElementById("free-root");
    if (!section || !root) return;

    renderSectionHead("free-section-head", section);

    section.offers.forEach((offer) => {
      root.appendChild(
        el("article", { className: "free-card" }, [
          el("h3", { className: "free-card__name" }, [offer.name]),
          el("p", { className: "free-card__price" }, [offer.price]),
          el("p", { className: "free-card__detail" }, [offer.detail]),
          el("div", { className: "product-card__actions" }, [
            primaryButton(offer.ctaPrimary),
            learnMoreButton(offer.ctaSecondary),
          ]),
        ])
      );
    });
  }

  function renderLadder() {
    const root = document.getElementById("ladder-root");
    if (!root) return;
    data.primaryLadder.forEach((product, i) => {
      const tier = i + 1;
      const classes = ["product-card", `product-card--tier-${tier}`];
      if (product.featured) classes.push("product-card--featured");

      const bodyContent = el(
        "ul",
        { className: "product-card__bullets" },
        (product.bullets || []).map((b) => el("li", null, [b]))
      );

      const audiences = el(
        "div",
        { className: "product-card__audiences" },
        product.audiences.map((a) => el("span", { className: "chip" }, [a]))
      );

      const actionItems = [];
      if (product.ctaPrimary) {
        actionItems.push(primaryButton(product.ctaPrimary));
      }
      actionItems.push(learnMoreButton());
      const actions = el("div", { className: "product-card__actions" }, actionItems);

      const children = [
        el("h3", { className: "product-card__name" }, [product.name]),
      ];
      if (product.subtitle) {
        children.push(el("p", { className: "product-card__subtitle" }, [product.subtitle]));
      }
      children.push(
        el("p", { className: "product-card__price" }, [product.price]),
        el("p", { className: "product-card__role" }, [product.role]),
        audiences,
        bodyContent,
        actions
      );

      root.appendChild(el("article", { className: classes.join(" ") }, children));
    });
  }

  function renderStillPoint() {
    const list = document.getElementById("stillpoint-list");
    const intro = document.getElementById("stillpoint-intro");
    if (!list || !data.stillPoint) return;
    if (intro) intro.textContent = data.stillPoint.intro;
    data.stillPoint.items.forEach((item) => {
      list.appendChild(
        el("article", { className: "stillpoint-item" }, [
          el("h4", null, [item.name]),
          el("p", null, [item.detail]),
        ])
      );
    });
    const ctaWrap = document.querySelector(".stillpoint-cta");
    if (ctaWrap && data.stillPoint.cta) {
      ctaWrap.innerHTML = "";
      ctaWrap.appendChild(
        el("a", {
          className: "btn btn--primary",
          href: data.stillPoint.cta.href,
        }, [data.stillPoint.cta.label])
      );
      ctaWrap.appendChild(learnMoreButton());
    }
  }

  function renderOrganisation() {
    const root = document.getElementById("org-root");
    if (!root) return;
    data.organisation.forEach((org) => {
      root.appendChild(
        el("article", { className: "org-card" }, [
          el("h3", null, [org.name]),
          el("p", { className: "org-card__price" }, [org.price]),
          el("p", null, [org.body]),
          el("ul", null, org.bullets.map((b) => el("li", null, [b]))),
          el("div", { className: "product-card__actions" }, [
            el("a", { className: "btn btn--primary btn--block", href: org.cta.href }, [org.cta.label]),
            learnMoreButton(),
          ]),
        ])
      );
    });
  }

  function renderB2b2cSection() {
    const section = data.b2b2cSection;
    const root = document.getElementById("channels-root");
    const lead = document.getElementById("channels-section-lead");
    if (!section || !root) return;

    renderSectionHead("channels-section-head", section);
    if (lead) lead.textContent = section.lead || "";

    section.channels.forEach((channel) => {
      const children = [
        el("h3", null, [channel.name]),
        el("p", null, [channel.body]),
      ];
      if (channel.examples) {
        children.push(el("p", { className: "channel-card__examples" }, [channel.examples]));
      }
      children.push(
        el("ul", null, channel.bullets.map((b) => el("li", null, [b]))),
        el("div", { className: "product-card__actions" }, [
          el("a", { className: "btn btn--primary btn--block", href: channel.cta.href }, [channel.cta.label]),
          learnMoreButton(),
        ])
      );
      root.appendChild(el("article", { className: "channel-card" }, children));
    });
  }

  function renderQuotes() {
    const root = document.getElementById("quotes-root");
    if (!root || !data.quotes?.length) return;
    data.quotes.forEach((q) => {
      root.appendChild(
        el("figure", { className: "pull-quote" }, [
          el("blockquote", null, [`"${q.text}"`]),
          el("cite", null, [q.context]),
        ])
      );
    });
  }

  function wireNewsletter() {
    const form = document.getElementById("newsletter-form");
    if (!form) return;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const fd = new FormData(form);
      const subject = encodeURIComponent("AstralMandala — Keep me informed (products demo)");
      const body = encodeURIComponent(
        [
          `First name: ${fd.get("firstName") || ""}`,
          `Last name: ${fd.get("lastName") || ""}`,
          `Company: ${fd.get("company") || ""}`,
          `Email: ${fd.get("email") || ""}`,
          "",
          "Submitted from products page demo v1.",
        ].join("\n")
      );
      window.location.href = `mailto:${data.links.email}?subject=${subject}&body=${body}`;
    });
  }

  renderFreeSection();
  renderSectionHead("path-section-head", data.pathSection);
  renderLadder();
  renderStillPoint();
  renderOrganisation();
  renderB2b2cSection();
  renderQuotes();
  wireNewsletter();
})();
