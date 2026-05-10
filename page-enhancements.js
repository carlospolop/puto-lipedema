(function () {
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

  document.addEventListener("DOMContentLoaded", function () {
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
