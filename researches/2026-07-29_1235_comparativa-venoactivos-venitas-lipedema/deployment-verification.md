# Verificación de publicación

**Commit de contenido:** `758001892a6e712308923617b93570bb54bcb5eb`

## Validación local

- `node .github/scripts/build-search-index.js`: 104 páginas indexadas.
- HTML público comprobado: 99 páginas.
- Enlaces relativos rotos: 0.
- Entradas en últimas incorporaciones: 13, del 29-06-2026 al 29-07-2026.
- `git diff --check` para HTML/Markdown/índice: sin errores.

## GitHub Actions

- Search index: éxito — https://github.com/carlospolop/puto-lipedema/actions/runs/30463917006
- Deploy GitHub Pages: éxito — https://github.com/carlospolop/puto-lipedema/actions/runs/30463918628

## Producción

Verificación con query de caché `?v=7580018`:

- `https://putolipedema.com/manejo/suplementos-microcirculacion.html?v=7580018`: HTTP 200; contiene «Comparación práctica de fórmulas comerciales» y «La evitaría de entrada».
- `https://putolipedema.com/anexos/ultimas-incorporaciones.html?v=7580018`: HTTP 200; contiene «29 julio 2026» y «Comparación de fórmulas para venitas».
- `https://putolipedema.com/search-index.js?v=7580018`: HTTP 200; contiene las frases nuevas de la comparativa.

`HEAD` y `origin/main` coincidían en `758001892a6e712308923617b93570bb54bcb5eb` tras la comprobación.
