# Resumen: cómo medir fibrosis y rigidez en lipedema

**Fecha:** 2026-09-19
**Estado:** cerrado como síntesis de investigación, con deuda metodológica Chack explícita.
**Pregunta:** qué puede medirse de manera razonable en casa y en clínica para separar rigidez/fibrosis, líquido, dolor, grasa y función, y qué resultados cambiarían la recomendación.

## Respuesta breve
No existe una prueba doméstica validada para medir fibrosis ni un valor universal de elastografía/durometría que diagnostique lipedema. En clínica, la shear-wave elastography, la durometría/tonometría y la ecografía pueden describir propiedades mecánicas o ecográficas y quizá ayudar a fenotipar dolor, pero todavía son complementarias. El seguimiento más defendible separa cinco desenlaces: **grasa/volumen**, **líquido**, **rigidez**, **dolor** y **función**.

## Evidencia principal
- **Grado A — estado del campo:** Eason et al. (2025, PMID 40042124) revisaron 20 estudios y 13 herramientas. Incluyeron cinta, perometría, durometría, tonometría, bioimpedancia, TDC, ecografía, MRI, DEXA y linfografía; los puntos, protocolos y análisis fueron inconsistentes y la clinimetría fue limitada. No se puede recomendar una herramienta única.
- **Grado A — imagen diagnóstica:** van la Parra et al. (2024, PMID 37789512) sintetizaron 32 estudios/1.154 pacientes y concluyeron que la capacidad diagnóstica de la imagen disponible es limitada; hacen falta estudios prospectivos comparativos.
- **Grado B — SWE 2025:** Ozturk et al. (PMID 40670310; 35 mujeres con lipedema y 36 controles) midieron elasticidad en tres niveles. Dentro de estratos de IMC no hubo diferencias significativas constantes de elasticidad; algometría y dolor fueron más distintivos. Es transversal, pequeño y sin corte diagnóstico.
- **Grado B — SWE 2026:** Yaman et al. (PMID 41832313; 35 mujeres) encontraron relación entre algunas lecturas del muslo y VAS/PainDetect. No hubo controles ni histología/biomarcador; una lectura de rigidez no demuestra fibrosis ni causalidad.
- **Grado A — investigación en curso:** NCT07489248 registra 75 mujeres en grupos de lipedema, linfedema y controles, con B-mode, strain elastography, Doppler e ImageJ. El registro consultado no tiene resultados; `RECRUITING` convive con una fecha estimada de finalización ya pasada, por lo que su estado necesita actualización.
- **Grado C — consenso:** el Delphi LWA/Nature Communications 2026 mantiene el diagnóstico como clínico y señala que no hay modalidad oficialmente aprobada para verificarlo; pide validar reproducibilidad, sensibilidad y especificidad. El estadio tampoco resume toda la carga sintomática.
- **Grado B — líquido y resultados centrados en la persona:** BIS en 156 mujeres (PMC6919257) aporta información de agua regional, no de fibrosis, con solapamiento entre grupos. Angst et al. (PMC7374881) apoyan registrar dolor, molestias, vitalidad, función y calidad de vida; un número de rigidez aislado no equivale a mejoría clínica.

## Aplicación práctica prudente
1. **En casa, para seguimiento y no diagnóstico:** usar el mismo momento/condiciones, puntos de perímetro marcados, dos lecturas si es posible, fotos no identificables, dolor/tacto 0–10, pesadez, función, actividad, ciclo, calor y tolerancia a la compresión. Interpretar tendencias de varias mediciones, no cambios de horas o un número aislado.
2. **No hacer:** intentar “graduar” fibrosis presionando con el pulgar, pellizcando, con aparatos de consumo o comparando equipos distintos. No llamar fibrosis a una zona dura sin evaluación; en pocos días suelen fluctuar líquido, inflamación y dolor más que grasa o fibrosis.
3. **En consulta:** preguntar cuál es el desenlace buscado (diferencial, líquido, dolor, rigidez o función), qué equipo/unidades/puntos/postura/reposo/presión/número de lecturas se usarán, y si existe umbral validado para esa población. Repetir solo con el mismo protocolo y tratar el cambio como exploratorio si no hay fiabilidad o cambio mínimo clínicamente importante.

## Riesgos y señales de alarma
Una medición no debe retrasar atención por hinchazón brusca unilateral, dolor intenso, enrojecimiento/calor, fiebre, falta de aire, herida o sospecha de trombosis/infección. Elastografía y durometría requieren interpretación profesional; la compresión o presión aplicada debe revisarse si hay enfermedad arterial, dolor, infección activa, herida o intolerancia. La web no prescribe pruebas ni tratamientos.

## Qué cambiaría la conclusión
Un estudio prospectivo, independiente y preferiblemente multicéntrico que estandarice puntos/posición/operador, incluya lipedema y diferenciales, reporte repetibilidad, sensibilidad/especificidad, cambio mínimo clínicamente importante y resultados de dolor/función podría elevar la SWE/durometría. Un resultado nulo o una mala repetibilidad confirmaría que sirven solo para investigación/fenotipado.

## Estado de la investigación y publicación
- Qdrant: `knowledge_status` 1; 3 búsquedas iniciales de brecha + 1 verificación final; la última recuperó un hallazgo deduplicado, no nuevo.
- Chack: cola nueva `lipedema-medicion-fibrosis-rigidez-20260919`; 2 prompts y 1 reintento terminaron antes de investigadores por `401 invalid_refresh_token/token_expired`; Deep 0, Pro 0, scientific 0 y websearcher 0 investigadores ejecutados; `knowledge_update=0`; cola verificada sin procesos activos.
- Alternativo: 9 búsquedas web nativas; 14 URLs solicitadas a extracción (una editorial bloqueada y una página JS poco útil); 9 fuentes principales conservadas en el ledger. Helper: Europe PMC 1 éxito; SerpAPI 1 éxito y luego 429 (no relanzado); Brave 429; ForumScout 1 búsqueda ruidosa; dos workers Hermes auxiliares quedaron terminales por kill controlado sin informe, solo aviso `Unknown toolsets: no_mcp`.
- Sitio: se actualizó `deteccion/elastografia-durometria-lipedema.html` con límites, seguimiento doméstico seguro, preguntas clínicas y fuentes 2024–2026. Se actualizó `researches/suggestions.md` y se conservaron plan, recibos, ledger y manifest sin árbol raw de Chack.
