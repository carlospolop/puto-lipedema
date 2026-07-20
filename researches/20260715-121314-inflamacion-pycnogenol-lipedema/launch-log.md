# Launch log — Pycnogenol y venoactivos

Queue ID: `lipedema-pycnogenol-venoactivos-20260719`

| ID / trabajo | Iteración | Investigador | Estado terminal | Resultado local |
|---|---:|---|---|---|
| Informes del 15-07 | 1 | literatura primaria, SerpAPI, OSINT | terminal | `subagents/primary-literature.md`, `serpapi-scientific.md`, `osint-community.md` |
| `research-000-3e795d7e` | 1 | Deep Research | éxito, extraído | `chack-artifacts/.../research-000-3e795d7e/` |
| `research-000-2c64d8f3` | 2 | Pro forense | éxito, extraído | `chack-artifacts/.../research-000-2c64d8f3/` |
| `research-000-ace4be63` | 2 | Pro seguridad | fallo terminal | PermissionError sobre `/home/tester/.codex/auth.json` |
| `research-000-74fb3849` | 2 | Pro seguridad, reintento | fallo terminal | mismo PermissionError; propiedad corregida después |
| `research-000-07949367` | 2 | Pro seguridad, ejecución legado | timeout terminal, 0 caracteres | `chatgpt-run.json`; no cuenta como evidencia |
| tres workers `round1-new` | 2 | primaria, SerpAPI, OSINT | interrumpidos por reinicio del gateway | no produjeron los ficheros de salida previstos; no cuentan como evidencia |
| `research-000-d0c2334e`, salida 001 | 3 | Pro seguridad/editorial | éxito, extraído | `.../research-000-d0c2334e/prochatgpt_researcher/run-1784538320741558383-1e77bf29/` |
| `research-000-d0c2334e`, salida 002 | 3 | Pro verificación focalizada | éxito, extraído | `.../research-000-d0c2334e/prochatgpt_researcher/run-1784540026076908499-fee5eee1/` |

## Notas de calidad

- El informe `primary-literature.md` de la primera ronda contiene una identificación falsa del ensayo. Está refutado en `contradiction-resolution.md` y no se utilizó para la web.
- El trabajador SerpAPI, la Deep Research, el Pro forense y los dos Pro de cierre convergen en un único ensayo de 100 mujeres, DOI `10.7759/cureus.96589`.
- La segunda salida Pro corrigió dos afirmaciones demasiado absolutas de la primera: localizó un ensayo diosmina + castaño en hemorroides, no en lipedema/IVC, y degradó una mención no confirmada sobre Ruscus directo.
- Todos los trabajos lanzados están en éxito, fallo, timeout o interrupción terminal verificable; no queda cola ni proceso activo.
