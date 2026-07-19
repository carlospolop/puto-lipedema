(function () {
  const currentScript = document.currentScript;
  const scriptSrc = currentScript ? currentScript.getAttribute("src") || "" : "";
  const searchRoot = scriptSrc.includes("/")
    ? scriptSrc.slice(0, scriptSrc.lastIndexOf("/") + 1)
    : "";

  function slugify(text) {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "seccion";
  }

  function ensureUniqueId(base, used) {
    let id = base;
    let count = 2;
    while (used.has(id) || document.getElementById(id)) {
      id = base + "-" + count;
      count += 1;
    }
    used.add(id);
    return id;
  }

  function normalize(text) {
    return (text || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  function escapeRegExp(text) {
    return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function escapeHtml(text) {
    return (text || "").replace(/[&<>"']/g, function (char) {
      return {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      }[char];
    });
  }

  function makeSnippet(text, terms) {
    const clean = (text || "").replace(/\s+/g, " ").trim();
    const haystack = normalize(clean);
    const firstIndex = terms.reduce(function (best, term) {
      const index = haystack.indexOf(term);
      return index === -1 ? best : Math.min(best, index);
    }, Number.POSITIVE_INFINITY);
    const start = Number.isFinite(firstIndex) ? Math.max(0, firstIndex - 72) : 0;
    const snippet = clean.slice(start, start + 190);
    return (start > 0 ? "... " : "") + snippet + (start + 190 < clean.length ? " ..." : "");
  }

  function highlight(text, terms) {
    let safe = escapeHtml(text);
    terms
      .slice()
      .sort(function (a, b) { return b.length - a.length; })
      .forEach(function (term) {
        if (term.length < 2) return;
        const pattern = new RegExp("(" + escapeRegExp(escapeHtml(term)) + ")", "gi");
        safe = safe.replace(pattern, "<mark>$1</mark>");
      });
    return safe;
  }

  function pageUrl(url) {
    return searchRoot + url;
  }

  function initHeader() {
    const header = document.querySelector(".site-header");
    if (!header) return;

    const isHome = Boolean(document.querySelector(".hero"));
    const nav = header.querySelector(".nav");

    if (nav && !isHome) {
      nav.innerHTML = [
        '<a href="' + pageUrl("index.html") + '">Inicio</a>',
        '<a href="' + pageUrl("index.html#que-es") + '">Qué es</a>',
        '<a href="' + pageUrl("index.html#pruebas") + '">Detectarlo</a>',
        '<a href="' + pageUrl("index.html#modelo") + '">Modelo</a>',
        '<a href="' + pageUrl("index.html#causas") + '">Qué lo causa</a>',
        '<a href="' + pageUrl("index.html#efectos") + '">Qué provoca</a>',
        '<a href="' + pageUrl("index.html#manejo") + '">Manejo</a>',
        '<a href="' + pageUrl("index.html#anexos") + '">Anexos</a>',
      ].join("");
    }

    if (!header.querySelector(".site-header-inner")) {
      const inner = document.createElement("div");
      inner.className = "site-header-inner";
      while (header.firstChild) inner.appendChild(header.firstChild);
      header.appendChild(inner);
    }
  }

  function initPageHero() {
    const hero = document.querySelector(".page-hero");
    if (!hero || hero.querySelector(":scope > .page-hero-inner")) return;

    const inner = document.createElement("div");
    inner.className = "page-hero-inner";
    while (hero.firstChild) inner.appendChild(hero.firstChild);

    const eyebrow = inner.querySelector(":scope > .eyebrow");
    const tags = inner.querySelector(":scope > .page-category-tags");
    if (eyebrow) {
      const meta = document.createElement("div");
      meta.className = "page-hero-meta";
      if (tags) meta.appendChild(tags);
      meta.appendChild(eyebrow);
      const heading = inner.querySelector(":scope > h1");
      inner.insertBefore(meta, heading || inner.firstChild);
    }

    hero.appendChild(inner);
  }

  function initMedicalNote() {
    const hero = document.querySelector(".hero");
    const note = hero && hero.querySelector(".hero-note");
    if (!hero || !note || document.querySelector(".medical-note-wrap")) return;

    const wrap = document.createElement("div");
    wrap.className = "medical-note-wrap";
    wrap.appendChild(note);
    hero.insertAdjacentElement("afterend", wrap);
  }

  function initFooter() {
    let footer = document.querySelector(".footer");

    if (!footer) {
      footer = document.createElement("footer");
      footer.className = "footer";
      footer.innerHTML = [
        '<p>Guía divulgativa. No sustituye diagnóstico ni seguimiento médico personalizado.</p>',
        '<p><a href="' + pageUrl("index.html") + '">← Volver al inicio</a></p>',
      ].join("");
      document.body.appendChild(footer);
    }

    if (!footer.querySelector(":scope > .footer-inner")) {
      const inner = document.createElement("div");
      inner.className = "footer-inner";
      while (footer.firstChild) inner.appendChild(footer.firstChild);
      footer.appendChild(inner);
    }
  }

  function initSearch() {
    const header = document.querySelector(".site-header-inner") || document.querySelector(".site-header");
    if (!header || document.querySelector(".search-open")) return;

    const button = document.createElement("button");
    button.className = "search-open";
    button.type = "button";
    button.setAttribute("aria-haspopup", "dialog");
    button.setAttribute("aria-expanded", "false");
    button.innerHTML = '<span aria-hidden="true">⌕</span><span>Buscar</span>';
    header.appendChild(button);

    const layer = document.createElement("div");
    layer.className = "search-layer";
    layer.hidden = true;
    layer.innerHTML = [
      '<div class="search-backdrop" data-search-close></div>',
      '<div class="search-panel" role="dialog" aria-modal="true" aria-label="Buscar en la web">',
      '<form class="search-form" role="search">',
      '<span aria-hidden="true">⌕</span>',
      '<input class="search-input" type="search" placeholder="Buscar..." autocomplete="off" spellcheck="false" aria-label="Buscar en la web">',
      '<button class="search-close" type="button" data-search-close aria-label="Cerrar búsqueda">×</button>',
      '</form>',
      '<div class="search-results" role="listbox" aria-label="Resultados de búsqueda"></div>',
      '</div>',
    ].join("");
    document.body.appendChild(layer);

    const input = layer.querySelector(".search-input");
    const results = layer.querySelector(".search-results");
    let activeIndex = -1;
    let loaded = false;
    let loading = false;

    function loadIndex(callback) {
      if (loaded) {
        callback();
        return;
      }
      if (loading) return;
      loading = true;

      const script = document.createElement("script");
      script.src = searchRoot + "search-index.js";
      script.onload = function () {
        loaded = true;
        loading = false;
        callback();
      };
      script.onerror = function () {
        loading = false;
        results.innerHTML = '<div class="search-empty">No se pudo cargar el índice de búsqueda.</div>';
      };
      document.head.appendChild(script);
    }

    function setActive(index) {
      const items = Array.from(results.querySelectorAll(".search-result"));
      activeIndex = items.length ? Math.max(0, Math.min(index, items.length - 1)) : -1;
      items.forEach(function (item, itemIndex) {
        item.classList.toggle("is-active", itemIndex === activeIndex);
      });
      if (activeIndex >= 0) items[activeIndex].scrollIntoView({ block: "nearest" });
    }

    function search(query) {
      const terms = normalize(query)
        .split(/[^a-z0-9ñ]+/i)
        .map(function (term) { return term.trim(); })
        .filter(function (term) { return term.length >= 2; });

      if (!terms.length) {
        activeIndex = -1;
        results.innerHTML = '<div class="search-empty">Escribe al menos 2 letras.</div>';
        return;
      }

      const pages = window.LIP_SEARCH_INDEX || [];
      const matches = pages
        .map(function (page) {
          const title = normalize(page.title);
          const body = normalize(page.text);
          const allTermsMatch = terms.every(function (term) {
            return title.includes(term) || body.includes(term);
          });
          if (!allTermsMatch) return null;

          const score = terms.reduce(function (total, term) {
            let next = total;
            if (title.startsWith(term)) next += 16;
            if (title.includes(term)) next += 10;
            if (body.includes(term)) next += 2;
            return next;
          }, 0);

          return { page, score };
        })
        .filter(Boolean)
        .sort(function (a, b) {
          return b.score - a.score || a.page.title.localeCompare(b.page.title);
        })
        .slice(0, 12);

      if (!matches.length) {
        activeIndex = -1;
        results.innerHTML = '<div class="search-empty">Sin resultados.</div>';
        return;
      }

      results.innerHTML = matches.map(function (match, index) {
        const page = match.page;
        const snippet = makeSnippet(page.text, terms);
        return [
          '<a class="search-result" role="option" data-index="', index, '" href="', pageUrl(page.url), '">',
          '<span class="search-result-section">', escapeHtml(page.section), '</span>',
          '<strong>', highlight(page.title, terms), '</strong>',
          '<small>', highlight(snippet, terms), '</small>',
          '</a>',
        ].join("");
      }).join("");
      setActive(0);
    }

    function openSearch() {
      layer.hidden = false;
      document.body.classList.add("search-is-open");
      button.setAttribute("aria-expanded", "true");
      loadIndex(function () {
        input.focus();
        search(input.value);
      });
    }

    function closeSearch() {
      layer.hidden = true;
      document.body.classList.remove("search-is-open");
      button.setAttribute("aria-expanded", "false");
      button.focus();
    }

    button.addEventListener("click", openSearch);
    layer.addEventListener("click", function (event) {
      if (event.target.matches("[data-search-close]")) closeSearch();
    });
    input.addEventListener("input", function () { search(input.value); });
    results.addEventListener("mousemove", function (event) {
      const item = event.target.closest(".search-result");
      if (item) setActive(Number(item.dataset.index));
    });
    document.addEventListener("keydown", function (event) {
      const key = event.key.toLowerCase();
      const isShortcut = key === "/" && !event.metaKey && !event.ctrlKey && !event.altKey;
      const isCommandSearch = key === "k" && (event.metaKey || event.ctrlKey);
      const typing = ["input", "textarea", "select"].includes((event.target.tagName || "").toLowerCase());

      if ((isShortcut && !typing) || isCommandSearch) {
        event.preventDefault();
        openSearch();
        return;
      }

      if (layer.hidden) return;

      if (event.key === "Escape") {
        event.preventDefault();
        closeSearch();
      } else if (event.key === "ArrowDown") {
        event.preventDefault();
        setActive(activeIndex + 1);
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        setActive(activeIndex - 1);
      } else if (event.key === "Enter" && activeIndex >= 0) {
        const active = results.querySelector(".search-result.is-active");
        if (active) {
          event.preventDefault();
          window.location.href = active.href;
        }
      }
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initHeader();
    initPageHero();
    initMedicalNote();
    initFooter();
    initSearch();

    const hero = document.querySelector(".page-hero");
    const article = document.querySelector(".article");
    const body = document.querySelector(".article-body");
    const summary = document.querySelector(".side-panel");

    if (!hero || !article || !body) return;

    const headings = Array.from(body.querySelectorAll("h2, h3"))
      .filter(function (heading) {
        return heading.textContent.trim() && !heading.closest(".side-panel, .article-summary");
      });

    if (!headings.length) return;

    const used = new Set();
    headings.forEach(function (heading) {
      if (!heading.id) {
        heading.id = ensureUniqueId(slugify(heading.textContent), used);
      } else {
        used.add(heading.id);
      }
    });

    const toc = document.createElement("aside");
    toc.className = "toc-panel";
    toc.setAttribute("aria-label", "Índice de la página");

    const title = document.createElement("h2");
    title.textContent = "En esta página";
    toc.appendChild(title);

    const list = document.createElement("ol");
    headings.forEach(function (heading) {
      const item = document.createElement("li");
      item.className = heading.tagName.toLowerCase() === "h3" ? "toc-subitem" : "toc-item";

      const link = document.createElement("a");
      link.href = "#" + heading.id;
      link.textContent = heading.textContent.trim();

      item.appendChild(link);
      list.appendChild(item);
    });
    toc.appendChild(list);
    article.insertBefore(toc, body);

    if (summary) {
      summary.classList.add("article-summary");
      body.appendChild(summary);
    }

    if ("IntersectionObserver" in window) {
      const links = Array.from(toc.querySelectorAll("a"));
      const linksById = new Map(links.map(function (link) {
        return [decodeURIComponent(link.hash.slice(1)), link];
      }));

      const observer = new IntersectionObserver(function (entries) {
        const visible = entries
          .filter(function (entry) { return entry.isIntersecting; })
          .sort(function (a, b) { return a.boundingClientRect.top - b.boundingClientRect.top; });
        if (!visible.length) return;
        links.forEach(function (link) { link.classList.remove("is-active"); });
        const active = linksById.get(visible[0].target.id);
        if (active) active.classList.add("is-active");
      }, { rootMargin: "-92px 0px -68% 0px" });

      headings.forEach(function (heading) { observer.observe(heading); });
    }

    if (window.location.hash) {
      const target = document.getElementById(decodeURIComponent(window.location.hash.slice(1)));
      if (target) {
        window.setTimeout(function () {
          target.scrollIntoView({ block: "start" });
        }, 50);
      }
    }
  });
}());
