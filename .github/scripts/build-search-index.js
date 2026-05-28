const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "../..");
const output = path.join(root, "search-index.js");
const ignoredDirs = new Set([".git", ".github", ".venv", ".pytest_cache", ".benchmarks", "03_lipedema", "pages", "scripts"]);

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (entry.name.startsWith(".") && ignoredDirs.has(entry.name)) continue;

    const absolute = path.join(dir, entry.name);
    const relative = path.relative(root, absolute);
    const firstSegment = relative.split(path.sep)[0];

    if (entry.isDirectory()) {
      if (!ignoredDirs.has(firstSegment)) files.push(...walk(absolute));
    } else if (entry.isFile() && entry.name.endsWith(".html")) {
      files.push(absolute);
    }
  }

  return files;
}

function decodeEntities(text) {
  const named = {
    amp: "&",
    gt: ">",
    lt: "<",
    nbsp: " ",
    quot: '"',
    apos: "'",
  };

  return text.replace(/&(#x?[0-9a-fA-F]+|[a-zA-Z]+);/g, function (_, entity) {
    if (entity[0] === "#") {
      const value = entity[1].toLowerCase() === "x"
        ? parseInt(entity.slice(2), 16)
        : parseInt(entity.slice(1), 10);
      return Number.isFinite(value) ? String.fromCodePoint(value) : " ";
    }
    return named[entity] || " ";
  });
}

function stripTags(html) {
  return decodeEntities(html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, " ")
    .replace(/<nav[\s\S]*?<\/nav>/gi, " ")
    .replace(/<header[\s\S]*?<\/header>/gi, " ")
    .replace(/<footer[\s\S]*?<\/footer>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim());
}

function matchTag(html, tag) {
  const re = new RegExp("<" + tag + "\\b[^>]*>([\\s\\S]*?)<\\/" + tag + ">", "i");
  const match = html.match(re);
  return match ? stripTags(match[1]) : "";
}

function sectionFromUrl(url) {
  const segment = url.includes("/") ? url.split("/")[0] : "Inicio";
  const labels = {
    anexos: "Anexos",
    deteccion: "Detección",
    efectos: "Efectos",
    factores: "Causas",
    manejo: "Manejo",
    modelo: "Modelo",
    "index.html": "Inicio",
  };
  return labels[segment] || segment;
}

const pages = walk(root)
  .sort()
  .map(function (file) {
    const html = fs.readFileSync(file, "utf8");
    const url = path.relative(root, file).split(path.sep).join("/");
    const h1 = matchTag(html, "h1");
    const title = h1 || matchTag(html, "title") || url;
    const description = stripTags((html.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i) || [])[1] || "");
    const content = stripTags(html);

    return {
      title,
      url,
      section: sectionFromUrl(url),
      text: [title, description, content].filter(Boolean).join(" "),
    };
  });

const body = "window.LIP_SEARCH_INDEX = " + JSON.stringify(pages, null, 2) + ";\n";
fs.writeFileSync(output, body);
console.log("Wrote " + pages.length + " pages to " + path.relative(root, output));