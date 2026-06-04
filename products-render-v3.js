(function () {
  const data = window.AM_V3_DATA;
  if (!data) return;

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

  function linkAttrs(cta) {
    return cta?.external ? { target: "_blank", rel: "noreferrer" } : {};
  }

  function primaryButton(cta) {
    return el(
      "a",
      Object.assign({ className: "btn btn--primary btn--block", href: cta.href }, linkAttrs(cta)),
      [cta.label]
    );
  }

  function learnMoreButton(override) {
    const cta = override || data.learnMoreCta;
    return el(
      "a",
      Object.assign(
        { className: "btn btn--ghost btn--block btn--small", href: cta.href },
        linkAttrs(cta)
      ),
      [cta.label]
    );
  }

  function renderSectionHead(elementId, section) {
    const head = document.getElementById(elementId);
    if (!head || !section) return;
    head.innerHTML = "";
    if (section.eyebrow) head.appendChild(el("p", { className: "eyebrow" }, [section.eyebrow]));
    head.appendChild(el("h2", { className: "section-title" }, [section.title]));
    if (section.lead) head.appendChild(el("p", { className: "section-lead" }, [section.lead]));
  }

  function learnMoreForItem(item) {
    if (item.ctaSecondary) return learnMoreButton(item.ctaSecondary);
    if (item.pageSlug && data.productPage) {
      return learnMoreButton({ label: "Learn more", href: data.productPage(item.pageSlug) });
    }
    return learnMoreButton();
  }

  function renderProductCard(product, tier) {
    return el("article", { className: `product-card product-card--tier-${tier}` }, [
      el("h3", { className: "product-card__name" }, [product.name]),
      el("p", { className: "product-card__price" }, [product.price]),
      el("p", { className: "product-card__role" }, [product.role]),
      el(
        "ul",
        { className: "product-card__bullets" },
        product.bullets.map((b) => el("li", null, [b]))
      ),
      el("div", { className: "product-card__actions" }, [
        primaryButton(product.ctaPrimary),
        learnMoreForItem(product),
      ]),
    ]);
  }

  function renderLadder() {
    const root = document.getElementById("ladder-v3-root");
    if (!root || !data.ladder) return;
    data.ladder.forEach((product, i) => {
      root.appendChild(renderProductCard(product, i + 1));
    });
  }

  function renderTeaserBox(rootId, box) {
    const root = document.getElementById(rootId);
    if (!root || !box) return;
    root.appendChild(
      el("article", { className: "page-teaser" }, [
        el("h3", { className: "page-teaser__title" }, [box.title]),
        el("p", { className: "page-teaser__body" }, [box.body]),
        el("a", { className: "btn btn--primary", href: box.cta.href }, [box.cta.label]),
      ])
    );
  }

  function renderFreeSection() {
    const section = data.freeSection;
    const root = document.getElementById("free-v3-root");
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
            learnMoreForItem(offer),
          ]),
        ])
      );
    });
  }

  function renderPartnershipsPage() {
    const page = data.partnershipsPage;
    if (!page) return;

    renderSectionHead("partnerships-head", page);

    const back = document.getElementById("partnerships-back");
    if (back) {
      back.href = data.links.productsV3;
      back.textContent = page.backLabel;
    }

    const root = document.getElementById("partnerships-channels-root");
    if (!root) return;

    page.channels.forEach((channel) => {
      const parts = [
        el("h3", null, [channel.name]),
        el("p", null, [channel.body]),
      ];
      if (channel.examples) {
        parts.push(el("p", { className: "channel-card__examples" }, [channel.examples]));
      }
      parts.push(el("ul", null, channel.bullets.map((b) => el("li", null, [b]))));
      const cardAttrs = { className: "channel-card" };
      if (channel.id) cardAttrs.id = channel.id;
      root.appendChild(el("article", cardAttrs, parts));
    });

    const ctaWrap = document.getElementById("partnerships-cta");
    if (ctaWrap && page.cta) {
      ctaWrap.appendChild(
        el("a", { className: "btn btn--primary", href: page.cta.href }, [page.cta.label])
      );
    }
  }

  const mode = document.body.dataset.v3Mode;
  if (mode === "partnerships") {
    renderPartnershipsPage();
  } else {
    renderFreeSection();
    renderSectionHead("v3-section-head", data.section);
    renderLadder();
    renderTeaserBox("partnership-teaser-root", data.partnershipTeaser);
  }
})();
