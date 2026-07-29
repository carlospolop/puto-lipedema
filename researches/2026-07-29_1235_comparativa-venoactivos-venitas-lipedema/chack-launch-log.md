# Registro de lanzamientos Chack

Queue ID: `lipedema-venoactive-products-20260729`  
Carpeta compartida: `/tmp/chack-research-data/researcher-queues/lipedema-venoactive-products-20260729`.

| Ronda | Solicitud | Investigador requerido | Estado terminal | Evidencia | Resultado |
|---|---|---|---|---|---|
| 1 | Investigación clínica amplia | Deep Research | Error terminal x2 | `research-000-87a5da9e` | `no verified Deep Research connector target`; sin evidencia |
| 1 | Seguridad/farmacología | Pro | Éxito | `research-000-87a5da9e/researcher_outputs/003_prochatgpt_researcher.json` | Respuesta útil preservada |
| 1 | Metodología/etiquetas | Pro | Éxito | `research-000-87a5da9e/researcher_outputs/004_prochatgpt_researcher.json` | Respuesta útil preservada |
| 2 | Reintento clínico independiente | Deep Research | Error terminal x2 | `research-000-781cacdb` | Mismo fallo de conector; sin evidencia |
| 2 | Síntesis clínica de respaldo | Pro | Éxito | `research-000-781cacdb/researcher_outputs/003_prochatgpt_researcher.json` | Respuesta útil preservada |
| 2 | Falsación + algoritmo | Pro | Sin llamada adicional | `research-001-d152ee3b/admin_output.json` | Cola serial agotó tiempo; síntesis administrativa preservada, no contada como respuesta Pro independiente |
| 3 | Auditoría de contradicciones de etiqueta | Pro | Éxito | `research-000-df394eb4/researcher_outputs/001_prochatgpt_researcher.json` | Corrigió Codeage y confirmó problemas Axaven/PiùLife/HSN |

## Subagentes

| Subagente | Estado terminal | Trabajo observable | Artefacto |
|---|---|---|---|
| SerpAPI/etiquetas | Timeout 600 s | 26 llamadas; abrió HSN y fuentes de producto/estudio | `subagents/serpapi-label-audit.log` |
| OSINT/comunidad | Timeout 600 s | 21 llamadas; ForumScout, SerpAPI y publicaciones Reddit abiertas mediante archivo | `subagents/osint-community.log` |
| Auditor científico | Timeout 600 s | 3 llamadas; lanzó cola propia que fue interrumpida al vencer el worker | `subagents/scientific-audit.log` |

Los tres estados son terminales. Los hallazgos parciales se usaron solo cuando había contenido verificable; los timeouts no se contaron como investigaciones completas.
