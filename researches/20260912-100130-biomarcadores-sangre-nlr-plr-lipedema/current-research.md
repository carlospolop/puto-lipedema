# Investigación en curso — NLR, PLR y PCR/CRP en lipedema

**Inicio:** 2026-09-12 10:01 CEST
**Estado:** en curso; no es diagnóstico ni pauta individual.

## Pregunta estrecha
En adultas con lipedema confirmado o sospechado, ¿existe evidencia humana directa (2019–2026) de que la proteína C reactiva (PCR/CRP, incluida hs-CRP), el recuento leucocitario, neutrófilos, linfocitos, plaquetas o los índices NLR/PLR (y derivados) sirvan para:

1. distinguir lipedema de obesidad, linfedema, enfermedad venosa u otras causas de volumen/dolor;
2. estratificar síntomas, estadio o fenotipo; o
3. monitorizar la respuesta a una intervención?

## Límites
- Prioridad: cohortes, estudios comparativos, registros, ensayos, revisiones sistemáticas y guías; abrir la fuente primaria.
- Población: adultas; separar lipedema puro, lipolinfedema, obesidad y comorbilidades.
- Resultados: biomarcador medido en sangre, rendimiento diagnóstico/relación clínica, confusores, repetición temporal y utilidad real.
- Incluir PF4/CXCL4, VEGF-C y citocinas solo como comparadores para no confundir una señal especializada con un hemograma rutinario.
- Excluir marketing, paneles patentados sin validación, tejido aislado como prueba sanguínea y extrapolación de enfermedad venosa/obesidad sin etiquetarla.
- La conclusión cambiaría si aparece una cohorte independiente y bien fenotipada con umbrales reproducibles, validación externa y utilidad incremental frente a la evaluación clínica; una asociación aislada no bastará.

## Señales previas de Qdrant
`knowledge_status` (base `lipedema`, 2026-09-12): 404 fuentes, 8.403 fragmentos, 19.699.571 bytes; 404 fuentes compatibles con embeddings.

Las búsquedas previas localizaron: macrófagos/CD68, PF4/CXCL4 y VEGF-C en estudios tisulares o especializados; estudios recientes que piden descubrir biomarcadores, pero no una validación de NLR/PLR. También apareció heterogeneidad: cambios inflamatorios locales no equivalen a inflamación sistémica. Estos pasajes son pistas, no evidencia final.

## Plan de verificación
1. Ronda Chack obligatoria con 1 Deep + 2 Pro, científicos y web; dos prompts complementarios, incluido un track de disconfirmación.
2. Búsqueda directa de artículos/guías/ClinicalTrials y lectura de páginas o artículos completos.
3. Búsqueda limitada de comunidades para señales de interpretación y efectos adversos, nunca como prueba.
4. Comparar denominadores, controles, IMC, infección, fármacos, menstruación/menopausia y momento de extracción.
5. Redactar síntesis, ledger, riesgos, qué pedir al clínico y si procede una nota breve en `deteccion/biomarcadores-sangre-lipedema.html`.

## Direct evidence — 2026-09-12

- **Cagliyan Turk et al. (PubMed 42261591; DOI 10.1177/15578585261454779):** retrospectivo, 60 lipedema/40 controles sanos; IMC medio similar; plaquetas, CRP, NLR y PLR más altos; MPV/PDW no diferentes; IMC correlacionó con leucocitos y CRP. Asociación exploratoria, sin comparador obeso ni umbral.
- **Bakirci & Karakilic (PubMed 42379186; DOI 10.1055/a-2897-4203):** retrospectivo, 78 lipedema/76 obesidad sin lipedema/75 peso normal. CRP, ESR y CAR mayores en lipedema y obesidad que en controles de peso normal; sin diferencia lipedema-obesidad; NLR, MLR, PLR, SII y CALLI sin diferencia; índices similares por grado.
- **Yavas (PubMed 42249859):** exploratorio 45/40; no apoya PDW/MPV como marcadores independientes tras correcciones.
- **Cohorte Regensburg, PMC13278978:** 24 lipedema/21 controles pareados por IMC; CRP, IL-6 y TNF sin diferencia. **Endostatin, PMC13409243:** 23/23 controles obesas; CRP y calprotectina similares y la señal de endostatina no persistió al ajustar.
- **Contexto anterior:** Nankam et al. (PMC9659629, n=13/13) describió que no había biomarcadores circulantes diagnósticos y un perfil heterogéneo. PF4/CXCL4 (PMC7406300) es una señal experimental de disfunción linfática, no un hemograma ni prueba validada para lipedema.
- **Interpretación:** resultados discordantes y retrospectivos; alta susceptibilidad a IMC/adiposidad, selección, infección, fármacos, estado hormonal y comparador. No existe umbral diagnóstico, validación externa ni seguimiento terapéutico.

## Cobertura auxiliar y fallos

- Helper Chack: `scientific europe_pmc`, `openalex` y `google_scholar` devolvieron descubrimientos; las fuentes centrales se abrieron después. La primera solicitud Brave/SerpAPI terminó con HTTP 429 de cuota y Google News sin resultados; no se relanzó esa vía.
- Trabajador OSINT/SerpAPI único: se inició desde esta carpeta con `--toolsets terminal,web,no_mcp`, pero el aviso cosmético `Unknown toolsets: no_mcp` fue seguido de `Broken pipe`/salida vacía, código 1. No se usa como evidencia y no se relanza por la regla de un único auxiliar.
- No hubo evidencia comunitaria utilizable; la síntesis se basa en fuentes primarias/PMC/PubMed y MedlinePlus.

## Verificación Qdrant y estado operativo

La lectura final de la base `lipedema` siguió en **404 fuentes, 8.403 fragmentos y 19.699.571 bytes**, igual que antes de las dos rondas. No hubo candidato aprobado, ingesta ni receipt porque ambos administradores fallaron; la búsqueda focalizada recuperó pasajes previamente aprobados sobre la ausencia de pruebas sanguíneas estandarizadas y la confusión IMC/obesidad, por lo que se verificó retrieval deduplicado pero **no** un hallazgo nuevo. La cola quedó sin batches activos ni ledgers durables.

## Regla editorial final
No presentar NLR, PLR, PCR/CRP ni un hemograma como prueba para confirmar o descartar lipedema. Cualquier resultado alterado requiere interpretar causas comunes y el contexto clínico; no justifica antiinflamatorios o suplementos por cuenta propia.

## Estado editorial

La página `deteccion/biomarcadores-sangre-lipedema.html` incorpora la señal positiva y la comparación con obesidad, la contradicción, los límites, preguntas clínicas y señales de alarma sin recomendar pruebas ni tratamientos. `researches/suggestions.md` marca este subtema como completado y deja como siguiente paso una replicación prospectiva. La verificación Qdrant no encontró ingesta nueva; queda como bloqueo operativo la falta de `research_worked=true` de la cola.
