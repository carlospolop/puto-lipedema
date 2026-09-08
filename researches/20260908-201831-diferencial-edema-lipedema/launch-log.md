# Launch log — diferencial de edema en lipedema

## 2026-09-08

- **Inicio y elección:** se seleccionó el siguiente trabajo no completado de `researches/suggestions.md`: diferencias entre edema venoso, linfático, inflamatorio/tejido lipedematoso y retención sistémica; signos prácticos y cuándo pedir pruebas. No se reabrieron investigaciones marcadas como completadas.
- **Repositorio:** `git pull --ff-only` en `main`; ya estaba al día con `origin/main`.
- **Knowledge base:** `knowledge_status(knowledge_base=lipedema)` devolvió 357 fuentes, 7.103 fragmentos y 84 archivos eliminados tras ingestión verificada. Se ejecutaron tres búsquedas previas en modo lectura; los pasajes se trataron como leads. Hallazgos de contexto: ya existen trabajos sobre edema cíclico, diuréticos, edema farmacológico y algoritmos/CART; permanece el hueco de un diferencial integrado y no diagnóstico.
- **Heartbeat:** enviado a Telegram mediante `research_heartbeat.py`; no se llamó directamente a la API de Telegram.
- **Plan:** población adulta ambulatoria; resultados de signos, temporalidad, medidas y pruebas; se excluyen pautas individuales de medicación y eficacia terapéutica. Se buscarán guías/consensos y estudios directos antes de extrapolar.
- **Cola creada y llamada bloqueante completada:** `lipedema-edema-differential-20260908-201831`; batch `batch-1-7c59a6fd`; request `request-1-2014997f`; ruta de evidencia: `/tmp/chack-research-data/researcher-queues/lipedema-edema-differential-20260908-201831/requests/request-1-2014997f`. Las dos solicitudes fueron fusionadas por solapamiento material en una investigación integrada. La salida informa 1 `deepchatgpt_researcher`, 2 `prochatgpt_researcher`, 1 `scientific_research` y 1 `websearcher_research`, todos con `research_worked=true`, `required_researchers_satisfied=true` y terminales según el resumen; se inspeccionará el resultado completo y los ledgers antes de contar hallazgos.

## Trabajos Chack

- **Resultado integrado:** `research-000-825d1cc5`; 5 investigadores terminales: 1 Deep, 2 Pro, 1 scientific y 1 websearcher. El administrador reportó `research_worked=true`, `required_researchers_satisfied=true`, cero fallos de investigadores y la cola quedó sin trabajos activos según `researcher_queue_status`.
- **Curación Qdrant:** decisión externa enumeró 109 artefactos; se mapearon 50 `ingest_candidate` a `approved_for_knowledge`, 58 `archive_only` y 1 `discard`. Reconciliación del administrador: 1 `archive_only_missing` explicado como metadato no persistente; 2 metadatos internos ignorados. Actualización: 50 indexados, 58 omitidos, 1 eliminado tras descarte y 50 eliminados localmente después de hash/ingestión verificados. No se copió el árbol bruto.
- **Búsqueda KB posterior:** la consulta focalizada recuperó 3 resultados, incluido el nuevo documento aprobado de `PMC9542082` (chunk hash `40146995bb7f09b6bc301f2ab381e0775d56dcd1e962e76fd6f59342e84a240c`) y el hallazgo de que el piloto muestra captación/propulsión linfática y ausencia de reflujo dérmico sin validar un umbral diagnóstico.
- **Herramientas del administrador:** 6 consultas de knowledge search, 12 descargas PMC, 2 PDFs, 198 recuperaciones de URL, 167 lecturas de artefactos, 35 resoluciones DOI, 30 búsquedas Europe PMC y 4 búsquedas Google Scholar; se reabrieron las fuentes centrales.
- **SerpAPI directo del agente maestro:** Google y Google Scholar devolvieron HTTP 429 (cuota Free); se registró como fallo, no como evidencia. Brave devolvió HTTP 429 por cuota. Europe PMC devolvió resultados válidos y se usó para descubrimiento. OpenAlex devolvió HTTP 429 de presupuesto. ForumScout produjo resultados irrelevantes/ruidosos en Reddit; no se usó como evidencia.
- **Trabajador OSINT auxiliar:** proceso `hermes chat` con `--toolsets terminal,web,no_mcp` terminó con código 1 tras 3 reintentos por `[Errno 32] Broken pipe`; dejó solo la advertencia cosmética `Unknown toolsets: no_mcp` y no produjo evidencia. No se relanzará: la ronda Chack y las fuentes directas ya cubren el hueco; se conserva el fallo honestamente.
- **Trabajador SerpAPI auxiliar:** proceso `hermes chat` con `--toolsets terminal,web,no_mcp` terminó con código `-9` sin informe útil (solo advertencia cosmética `Unknown toolsets: no_mcp`); no se contó como evidencia ni se relanzó por cuota/tiempo y cobertura suficiente.
- **Señales de pacientes/comunidad:** ForumScout obtuvo una conversación de Reddit abierta directamente; se clasificó como anécdota de primera mano/opinión no verificada. La conversación muestra que las marcas de calcetín pueden aparecer en personas con y sin lipedema, que algunas personas refieren dolor o hinchazón y que se recomienda valoración venosa; contiene también afirmaciones contradictorias sobre pie/fóvea y recomendaciones comerciales, por lo que no se usará para diagnóstico ni protocolo. Otra búsqueda fue irrelevante y otra agotó el tiempo.

## Fuentes directas abiertas

- AWMF S2k 2024, Standard of Care US 2021, consenso LWA 2026, consenso brasileño 2025 y revisión de alcance 2024: abiertos con `web_extract`.
- Estudios abiertos: líquido intersticial `PMC7784769`, sodio tisular `PMC7180116`, VEGF-C/macrófagos `PMC7331572`, encuesta de 707 mujeres `PMC10858625`, NIRFLI `PMC9542082`, linfoscintigrafía `PMC7875021`, BIS `PMC6919257` y cohorte suiza `PMC11925301`: abiertos con `web_extract`; sus tamaños, selección y limitaciones se incorporarán al ledger.
- Triaje general NHS/NICE para edema, trombosis, embolia, celulitis e insuficiencia cardiaca: páginas oficiales abiertas; se usarán solo para seguridad general, no para atribuir esos diagnósticos a una persona.
## Registro compacto de la cola

| ID/cola | Estado | Administrador | Tipos terminales | Resultado | Curación/recibo |
|---|---|---|---|---|---|
| `batch-1-7c59a6fd` / `request-1-2014997f` | terminal; cola sin trabajos activos | `research-000-825d1cc5` | 1 Deep, 2 Pro, 1 scientific, 1 websearcher | `research_worked=true`; `required_researchers_satisfied=true`; 0 fallos | 50 indexados y hash verificado; 58 archive_only; 1 discard limpiado; no se copió árbol bruto |

## Búsquedas directas y auxiliares

| Fuente | Propósito | Estado |
|---|---|---|
| Knowledge base `lipedema` | evitar duplicación y localizar huecos | completado antes de inspeccionar el repositorio; lectura posterior confirmó un hallazgo recién aprobado |
| Fuentes científicas/oficiales | validar criterios, pruebas y urgencias | completado; guías, consensos, estudios PMC y NHS/AAFP abiertos directamente |
| Europe PMC | descubrimiento de revisiones y registros recientes | completado; válido para localizar fuentes, no para sustituir la lectura de artículos |
| SerpAPI/Brave/OpenAlex | cobertura de motores | Google, Google Scholar y Brave: HTTP 429; OpenAlex: presupuesto insuficiente; fallos registrados, no evidencia |
| ForumScout | señales de pacientes/comunidad | una conversación Reddit abierta; anécdota/opinión separada, sin peso diagnóstico; búsquedas restantes ruidosa/timeout |
| Trabajador OSINT | cierre de hueco social | terminal con código 1 por broken pipe; sin evidencia; no relanzado |
| Trabajador SerpAPI | cobertura de motores/verticales | terminal con código -9 y solo advertencia `no_mcp`; sin evidencia; no relanzado |

## Fallos

- `SerpAPI google` y `google_scholar`: `HTTP Error 429: Too Many Requests`; `Brave`: HTTP 429 de cuota; `OpenAlex`: 429 de presupuesto; no se trataron como resultados.
- ForumScout `forum`: `TimeoutError: The read operation timed out`; otra búsqueda Reddit fue ruido irrelevante.
- OSINT auxiliar: `[Errno 32] Broken pipe` tras 3 reintentos, código 1.
- SerpAPI auxiliar: terminó con código -9; no generó informe utilizable.
- `web_extract` para la URL de recomendaciones NICE devolvió una página PMC no pertinente; se marcó como no relevante tras apertura y se usaron NHS DVT/PE/celulitis y AAFP para seguridad general.

## Siguiente decisión

No se necesita otra ronda de investigación para la síntesis central: las fuentes independientes convergen en un diferencial no diagnóstico y en la falta de validación externa de signos/pruebas. Se hará una pasada editorial de seguridad, se redactará el ledger y se actualizará el sitio solo con afirmaciones respaldadas.

## Publicación y verificación final

- **Commit publicado:** [`59bb951435ec9e36919a6c229718789c90a9715b`](https://github.com/carlospolop/puto-lipedema/commit/59bb951435ec9e36919a6c229718789c90a9715b) en `main`; `git ls-remote` confirmó el mismo SHA.
- **Search index:** workflow [34282386555](https://github.com/carlospolop/puto-lipedema/actions/runs/34282386555), `success`; **Deploy GitHub Pages:** [34282386607](https://github.com/carlospolop/puto-lipedema/actions/runs/34282386607), `success` (build y deploy).
- **Producción:** `https://putolipedema.com/deteccion/diferencial-edema-lipedema.html?v=59bb951`, `https://putolipedema.com/index.html?v=59bb951`, `https://putolipedema.com/anexos/ultimas-incorporaciones.html?v=59bb951` y `search-index.js?v=59bb951` respondieron HTTP 200; la guía, el enlace de portada y la actualización fueron visibles; no aparecieron rutas privadas.
- **Cierre:** cola Chack y procesos auxiliares terminales; no quedan workers activos. El contenido público no incluye credenciales, rutas de cola ni copias de artefactos brutos.
