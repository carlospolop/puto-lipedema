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

  function initSearch() {
    const header = document.querySelector(".site-header");
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
    initSearch();

    const hero = document.querySelector(".page-hero");
    const article = document.querySelector(".article");
    const body = document.querySelector(".article-body");
    const summary = document.querySelector(".side-panel");

    if (!hero || !article || !body) return;

    if (summary) {
      summary.classList.add("hero-summary");
      hero.classList.add("has-summary");
      hero.appendChild(summary);
    }

    const headings = Array.from(body.querySelectorAll("h2, h3"))
      .filter(function (heading) {
        return heading.textContent.trim() && !heading.closest(".side-panel");
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
    title.textContent = "Índice";
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
    article.appendChild(toc);

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
