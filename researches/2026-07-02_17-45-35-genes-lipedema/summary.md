# Investigación extensiva: genes relacionados con lipedema

Fecha: 2026-07-02  
Carpeta: `researches/2026-07-02_17-45-35-genes-lipedema/`

## 1. Resumen ejecutivo

La conclusión más importante es que **hoy no existe un “gen del lipedema” validado clínicamente** ni un test genético fiable para confirmar lipedema típico. La evidencia acumulada encaja mejor con un modelo **heterogéneo y por módulos**:

1. **Base poligénica de distribución grasa femenina/gluteofemoral**: señales poblacionales como `VEGFA`, `GRB14-COBLL1`, `RSPO3`, `LYPLAL1`, `ADAMTS9`, `ANKRD55-MAP3K1`, `ZNF664/CCDC92`.
2. **Subgrupos familiares raros**: especialmente `AKR1C1` y, con más cautela, `AKR1C2`, ambos relacionados con metabolismo local de esteroides.
3. **Programa local del tejido afectado**: adipogénesis, proliferación de precursoras, macrófagos/remodelación, matriz extracelular, fibrosis, microvasos, linfa y dolor. Aquí aparecen `BUB1`, `ZNF423`, `PPARG`, `CSF1R`, `CD163`, `TREM2`, `C1Q/C2`, `AKT1`, `VEGFC`, `FLT4`, `TEK`, `COL6A3`, `MMPs`, etc.
4. **Genes de condiciones relacionadas o diferenciales**: linfedema primario (`FLT4`, `VEGFC`, `FOXC2`, `GJC2`, `PIEZO1`, `CCBE1`, `ADAMTS3`, `EPHB4`, `PROX1`, `SOX18`), sobrecrecimiento/malformaciones vasculares (`PIK3CA`, `AKT1`, `PTEN`, `TEK`), EDS/conectivo (`TNXB`, `COL5A1`, `COL5A2`, `COL3A1`, `ELN`, `FBN1`). Son importantes para entender piezas aisladas —edema, fragilidad, fibrosis, adiposo grande— pero **no deben llamarse genes de lipedema típico** sin más.

La forma más segura de comunicarlo al público es:

> El lipedema parece tener predisposición genética y familiar, pero probablemente no por un único gen. Los genes más interesantes apuntan a vasos, linfa, hormonas, adipocitos, inflamación y matriz del tejido. Hoy la genética sirve sobre todo para investigación y para descartar condiciones parecidas, no para diagnosticar lipedema de rutina.

## 2. Trabajo realizado

Se lanzó una investigación iterativa con:

- **1 ChatGPT Deep Research** amplio sobre genes directos e indirectos.
- **5 hilos ChatGPT Pro**:
  - matriz de genes directos/indirectos;
  - diferenciales/síndromes;
  - priorización de leads de primera ronda;
  - segunda ronda de leads omitidos;
  - revisión crítica/falsación.
- **6 subagentes**:
  - genética directa/ómica;
  - mecanismos linfáticos/vasculares/fibrosis/adipocitos;
  - OSINT/gris;
  - validación directa con suplementos GWAS;
  - condiciones cruzadas linfáticas/overgrowth/conectivo;
  - claims de blogs, patentes y literatura gris.
- Búsquedas propias en PubMed/Europe PMC y extracción local de contenido ya existente del repo.

Archivos principales:

- `chatgpt/chatgpt-deepresearch1-genes-original.md`
- `chatgpt/chatgpt-pro1-gene-matrix.md`
- `chatgpt/chatgpt-pro2-syndromes-differentials.md`
- `chatgpt/chatgpt-pro3-prioritized-leads.md`
- `chatgpt/chatgpt-pro4-second-pass-missed-leads.md`
- `chatgpt/chatgpt-pro5-critical-review.md`
- `subagents/direct-genetics-subresearch.md`
- `subagents/mechanism-genes-subresearch.md`
- `subagents/osint-grey-genetics-subresearch.md`
- `subagents/round2-direct-validation.md`
- `subagents/round2-cross-condition-mechanisms.md`
- `subagents/round2-grey-literature-claims.md`
- suplementos descargados en `subagents/round2_supp/`

## 3. Ranking de evidencia genética directa en lipedema

| Prioridad | Gen/locus | Evidencia | Interpretación honesta | Nivel |
|---:|---|---|---|---|
| 1 | `VEGFA` | GWAS proxy UK Biobank + replicación clínica; PMID 36385154 | Mejor señal poblacional; apunta a vasos/angiogénesis/permeabilidad. Caveat: discovery usó fenotipo proxy de grasa de piernas, no diagnóstico clínico puro. | Moderada-alta como locus/ruta |
| 2 | `GRB14-COBLL1` | Mismo GWAS proxy + replicación clínica | Señal de distribución grasa/insulina/adipocito; probablemente arquitectura poligénica, no gen monogénico. | Moderada-alta como locus/ruta |
| 3 | `AKR1C1` | Familia con lipedema autosómico dominante limitado por sexo; variante `c.638T>A; p.Leu213Gln`; PMID 32872468 | Mejor candidato familiar concreto. Relaciona metabolismo de progesterona/esteroides con adipogénesis. No generalizable todavía. | Moderada como gen familiar |
| 4 | `BUB1` | Ómica de tejido/ADSC + inhibición/CRISPR reduce hiperproliferación; PMID 34764426 | Nodo funcional fuerte en precursoras adiposas. No es gen germinal diagnóstico. | Alta como mecanismo tisular |
| 5 | `LHFPL6/LHFP` región `rs1409440` | GWAS clínico UK pequeño; PMID 36227936 | Señal sugestiva, OR meta ~2, pero no genome-wide; eQTL/colocalización apunta más a región reguladora `LHFP/LHFPL6`. | Moderada-baja |
| 6 | `AKR1C2` | Variante/overexpresión pequeña; PMID 38112953; corrección/EOConcern | Interesante por esteroides, pero con caveats de replicación y conflicto/patente. | Baja-moderada |
| 7 | `RSPO3`, `LYPLAL1`, `ADAMTS9`, `ANKRD55-MAP3K1`, `ZNF664/CCDC92`, `ADAMTSL3`, `SLC12A2`, `AOC1/ABP1` | GWAS proxy de distribución de grasa/lipedema-like | Plausibles para distribución grasa, matriz, señal inmune o adiposa; no todos replicados clínicamente. | Exploratoria |
| 8 | `PLIN1`, `LIPE`, `PPARG`, `INSR`, `PPARA`, `GCKR`, `POMC`, etc. | Panel NGS 305 genes en 162 pacientes; PMID 35207755 | Útiles para diferenciales/metabolismo/lipodistrofia/obesidad; no causales de lipedema típico. | Hipótesis |
| 9 | `TNXB`, `STAB1`, `POMC`, `NCOA1`, `RREB1`, `BBS1`, `BBS4` | WES familiar 31 individuos/9 familias; PMID 38407896 | No hubo gen común; categorías GO: vasopressin receptor activity, microfibril binding, patched binding. `TNXB/STAB1` son leads ECM, no prueba causal. | Exploratoria |
| 10 | `AKT1` | Multi-omics avanzado n=4 vs 4; PMID 41580786 | Nodo de progresión/metabolismo/PI3K-AKT, no gen germinal de lipedema. | Mecanismo emergente |

## 4. Módulos biológicos principales

### A. Hormonas, esteroides y ginecología

Genes/rutas:

- `AKR1C1`, `AKR1C2`
- `ESR1`, `ESR2`, `GPER1`, `PGR`
- `CYP19A1`, `HSD17B1`, `HSD17B2`
- miRNAs: `let-7g-5p`, `miR-205-5p`, `miR-302b-3p`
- targets: `SMAD2`, `ESR1`, `VEGFA`

Interpretación:

- `AKR1C1` es el mejor candidato familiar concreto.
- `AKR1C2` es interesante pero más débil.
- El eje estrógeno/progesterona encaja con pubertad, embarazo, menopausia y solapamiento con endometriosis/adenomiosis/fibromas, pero la evidencia directa todavía es incompleta.
- No conviene afirmar que `ESR1/ESR2/CYP19A1` sean genes causales del lipedema; son **rutas plausibles**.

### B. Vascular, angiogénesis, permeabilidad y hematomas

Genes/rutas:

- `VEGFA`, `VEGFC`, `VEGFD`, `FLT4/VEGFR3`
- `TEK/TIE2`, `ANGPT1`, `ANGPT2`
- `CDH5`, `TJP1`, glicocálix/endotelio

Interpretación:

- `VEGFA` es una de las señales genéticas poblacionales más fuertes.
- `VEGFC/FLT4/VEGFR3` aparecen en tejido/linfa y pueden reflejar adaptación o disfunción linfática.
- Estas rutas explican bien edema, pesadez, fragilidad capilar, hematomas y comunicación vaso-adipocito.
- Pero `FLT4/VEGFC/FOXC2/GJC2` son ante todo genes de linfedema/diferenciales, no genes de lipedema puro.

### C. Distribución grasa, adipocito grande y lipólisis

Genes/rutas:

- `GRB14-COBLL1`, `RSPO3`, `LYPLAL1`, `ADAMTS9`
- `PPARG`, `ZNF423`, `CEBPA/B`
- `PLIN1`, `LIPE`, `PNPLA2`, `LPL`, `FABP4`, `ADIPOQ`, `LEP`
- `INSR`, `AKT1`, `PIK3CA/PTEN` como señal crecimiento/metabolismo

Interpretación:

- La evidencia apunta a predisposición a distribución grasa gluteofemoral y expansión adiposa regional.
- `BUB1` y `ZNF423` son claves para precursoras/adipogénesis.
- `PLIN1/LIPE/PNPLA2/LPL` explican por qué un depósito puede almacenar y vaciar grasa de forma distinta, pero no están validados como genes causales.

### D. Macrófagos, inflamación y remodelación

Genes/rutas:

- `CD68`, `CD163`, `MRC1/CD206`, `CD209`
- `CSF1R`, `MAFB`, `TREM2`, `C1Q`, `C2`, `CD84`, `BCAT1`, `ACP5`
- `MIF`, `CD74`
- `IL6`, `TNF`, `CCL2`, `IL10`, `NLRP3`

Interpretación:

- La evidencia tisular es fuerte para macrófagos/remodelación, pero no como mutaciones heredadas.
- Parece más un programa de reparación crónica/remodelado que una inflamación sistémica clásica tipo obesidad.
- `IL6` y `MTHFR` tienen estudios pequeños de polimorfismos, pero deben considerarse frágiles hasta replicación.

### E. Matriz extracelular, fibrosis, fascia e hipermovilidad

Genes/rutas:

- `TNXB`, `STAB1`
- `COL1A1`, `COL3A1`, `COL6A1/2/3`, `COL5A1/2`
- `MMP2`, `MMP9`, `MMP14`, `TIMP1/2/3`
- `TGFB1`, `LOX/LOXL2`, `FN1`, `POSTN`, lamininas

Interpretación:

- La matriz/fibrosis es una ruta muy importante para progresión, dolor, nódulos, atrapamiento de líquido y rigidez.
- `TNXB` es interesante porque conecta EDS/hipermovilidad, hematomas, laxitud y una señal en WES familiar, pero todavía no es causal.
- `COL3A1/COL5A1/COL5A2/FBN1/ELN` son importantes como **red flags/diferenciales** de trastornos de tejido conectivo, no como genes de lipedema.

### F. Linfedema, malformaciones y sobrecrecimiento como diferenciales

Genes/rutas:

- Linfedema: `FLT4`, `VEGFC`, `FOXC2`, `GJC2`, `PIEZO1`, `CCBE1`, `ADAMTS3`, `EPHB4`, `PROX1`, `SOX18`
- Overgrowth/mosaicismo: `PIK3CA`, `AKT1`, `PTEN`, `TEK`

Interpretación:

- Son esenciales si hay edema de pies/dedos, inicio congénito/infantil, asimetría marcada, malformaciones vasculares, manchas capilares, macrodactilia, lipomas segmentarios o historia familiar de linfedema.
- En esos casos puede hacer falta secuenciar **tejido afectado**, no solo sangre, porque `PIK3CA/AKT1/TEK` pueden ser mosaicos.
- No deben mezclarse con lipedema típico simétrico sin esos signos.

### G. Nuevo lead emergente: `PROC/PROCR/HIF1A`

Un preprint de 2025 propone mutaciones compuestas en `PROC` y una ruta proteína C / `PROCR` / `HIF1A` / progenitores adiposos.

Interpretación:

- Muy interesante como hipótesis de subgrupo familiar/progenitor-adipogénico.
- Pero sigue siendo **preprint**, sin revisión por pares ni replicación.
- No debe aparecer como recomendación pública fuerte todavía.

## 5. Genes/top 25 para seguimiento, con etiqueta honesta

| Gen/locus | Categoría | Uso correcto |
|---|---|---|
| `VEGFA` | Directo poblacional / vascular | Prioridad alta investigación; no diagnóstico |
| `GRB14-COBLL1` | Directo poblacional / grasa-insulina | Prioridad alta investigación; no diagnóstico |
| `AKR1C1` | Familiar raro / esteroides | Validar en familias/cohortes; no test general |
| `BUB1` | Funcional tisular / precursoras | Diana mecanística experimental |
| `LHFPL6/LHFP` | GWAS clínico sugestivo | Requiere replicación |
| `AKR1C2` | Familiar/esteroides débil | Mantener con cautela por EoC/conflictos |
| `ZNF423` | Adipogénesis | Mecanismo celular |
| `PPARG` | Adipogénesis/metabolismo | Mecanismo/diferencial; no causal universal |
| `PLIN1` | Gota lipídica | Hipótesis lipólisis/diferencial |
| `LIPE` | Lipólisis | Hipótesis lipólisis/diferencial |
| `AKT1` | Progresión/PI3K-AKT | Mecanismo avanzado; diferencial si mosaico |
| `VEGFC` | Linfático/vascular | Ruta y diferencial linfedema |
| `FLT4` | VEGFR3/linfa | Ruta y diferencial linfedema |
| `TEK` | Barrera vascular | Ruta vascular/diferencial malformaciones venosas |
| `CSF1R` | Macrófagos/adipogénesis | Firma tisular |
| `CD163` | Macrófago M2/remodelación | Firma tisular |
| `TREM2` | Macrófagos lipídicos | Firma tisular |
| `C1Q/C2` | Complemento/remodelación | Firma tisular |
| `TNXB` | ECM/EDS | Diferencial/conectivo; subgrupo hipermovilidad |
| `STAB1` | ECM/endotelio/macrófagos | Lead exploratorio familiar |
| `COL6A3` | ECM adiposa/fibrosis | Mecanismo de fibrosis |
| `MMP2/MMP9/MMP14` | Remodelado matriz | Progresión/fibrosis |
| `TGFB1` | Fibrosis | Ruta, no gen causal probado |
| `PROC/PROCR/HIF1A` | Preprint progenitor-adiposo | Seguir, no comunicar como establecido |
| `PIK3CA/PTEN/FOXC2/GJC2/PIEZO1` | Diferenciales | Solo si fenotipo sugiere linfedema/overgrowth |

## 6. Claims que se deben evitar

No conviene decir:

- “El lipedema está causado por `AKR1C1`.”  
  Mejor: `AKR1C1` es el candidato familiar más concreto, pero no explica la mayoría de casos.

- “Hay un panel genético que diagnostica lipedema.”  
  Mejor: no hay panel validado; algunos paneles ayudan a descartar condiciones parecidas.

- “`FLT4`, `FOXC2`, `GJC2`, `PIEZO1` son genes de lipedema.”  
  Mejor: son genes de linfedema/linfáticos que pueden ser diferenciales o modificadores.

- “`PIK3CA`, `AKT1`, `PTEN`, `TEK` causan lipedema típico.”  
  Mejor: causan síndromes de sobrecrecimiento/malformaciones que pueden parecerse en piezas aisladas; sospechar si hay asimetría, malformaciones o mosaicismo.

- “Genes de inflamación como `IL6`, `TNF`, `NLRP3` explican el lipedema.”  
  Mejor: la inflamación/remodelación aparece en tejido, pero las mutaciones o polimorfismos no están validados.

- “MTHFR/COMT/DAO/MCAS explican lipedema.”  
  Mejor: pueden ser comorbilidades o hipótesis de manejo en algunas personas; no evidencia causal.

## 7. Experimentos/análisis futuros más importantes

1. **Cohorte grande y bien fenotipada**: lipedema puro I-II, avanzado, lipolinfedema, obesidad, linfedema, HSD/EDS, Dercum, PROS/vascular malformations y controles.
2. **WGS en familias**, no solo exoma; analizar variantes raras por módulos.
3. **Replicar `AKR1C1/AKR1C2`** con segregación familiar, ensayos enzimáticos y metabolómica esteroidea.
4. **Fine-mapping/eQTL/colocalización** de `VEGFA`, `GRB14-COBLL1`, `LHFPL6/LHFP` en tejido adiposo femoral, endotelio y progenitores.
5. **PRS de distribución grasa femenina** y comparación con lipedema clínico, lipohipertrofia, obesidad y linfedema.
6. **snRNA-seq/spatial transcriptomics** de muslo/pierna afectada vs tejido no afectado/control, separando adipocitos, progenitores, endotelio sanguíneo/linfático, pericitos, fascia/fibroblastos, macrófagos y nervios.
7. **Validación proteica/IHC**: `CD68/CD163/TREM2/C1Q`, `LYVE1/PROX1/FLT4`, `VEGFA/VEGFC`, `COL6A3`, laminina, fibronectina, `PROCR`.
8. **Ensayos funcionales en ASCs**: editar `AKR1C1`, `AKR1C2`, `BUB1`, `ZNF423`, `PROC/PROCR`, `TNXB/STAB1`; medir adipogénesis, tamaño/número de gotas, fibrosis y respuesta hormonal.
9. **Co-cultivos adipocito-endotelio/linfático** con medición de permeabilidad, glicocálix, uniones endoteliales y respuesta a VEGFA/VEGFC/hipoxia.
10. **Secuenciación profunda de tejido afectado** si hay asimetría, malformaciones o sospecha de mosaicismo `PIK3CA/AKT1/TEK`.

## 8. Recomendación para contenido público del sitio

Para una página divulgativa simple, el mensaje debería ser:

- El lipedema **sí parece tener componente familiar/genético**.
- No hay un test genético de lipedema validado.
- Los genes más interesantes apuntan a:
  - vasos y permeabilidad (`VEGFA`);
  - distribución grasa e insulina (`GRB14-COBLL1`);
  - metabolismo hormonal local (`AKR1C1`);
  - crecimiento de precursoras adiposas (`BUB1`, `ZNF423`, `PPARG`);
  - macrófagos/fibrosis/matriz (`CD163`, `TREM2`, `COL6A3`, `TNXB`);
  - linfa y diferenciales (`FLT4`, `FOXC2`, `GJC2`, etc.).
- Si una persona tiene síntomas atípicos —edema en pies, inicio infantil, asimetría marcada, malformaciones vasculares, hipermovilidad grave, hematomas extremos— puede ser útil valorar diferenciales genéticos con especialistas.
- Evitar comprar tests comerciales que prometan “diagnosticar lipedema” si no explican que son experimentales o diferenciales.

## 9. Fuentes clave

- Child et al. 2010 — herencia familiar/sex-limited: PMID 20358611.
- Michelini et al. 2020 — `AKR1C1`: PMID 32872468 / PMC7503355.
- Bano et al. 2022 — UK Lipoedema clinical GWAS, `rs1409440`: PMID 36227936 / PMC9560129.
- Michelini et al. 2022 — panel 305 genes: PMID 35207755 / PMC8877075.
- Klimentidis et al. 2023 — UKBB proxy GWAS, `VEGFA`, `GRB14-COBLL1`: PMID 36385154 / PMC9995497.
- Ishaq et al. 2021 — `BUB1`/ADSC functional omics: PMID 34764426 / PMC8873020.
- Morgan et al. 2024 — family WES 31 individuos/9 familias: PMID 38407896 / PMC11044871.
- Transcriptómica SAT lipedema 2024: PMID 39525887.
- miRNA tejido adiposo lipedema 2024: PMID 39590304 / PMC11592672.
- Diabetes 2025 — pérdida de peso, inflamación/fibrosis, linfático/vascular: PMID 39652636 / PMC11842599.
- AKT1 multi-omics 2026: PMID 41580786 / PMC12911300.
- Vascular changes review 2026: PMC13193901.

## 10. Estado final

La investigación soporta una síntesis robusta, pero **no justifica recomendaciones genéticas clínicas directas** salvo como investigación/diferencial. El siguiente paso natural sería convertir esta síntesis en una página pública sencilla de `putolipedema.com` y dejar los detalles técnicos en este research.
