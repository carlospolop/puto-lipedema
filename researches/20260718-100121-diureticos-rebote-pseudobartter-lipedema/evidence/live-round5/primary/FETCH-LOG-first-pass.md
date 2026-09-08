# Fetch log — first pass, 2026-09-05

The first public fetch pass was completed before the DRKS recheck. The byte artifacts were created in the same `primary/` directory; the later recheck refreshed those same live-round files, so this file preserves the first-pass hashes/statuses even though the final `FETCH-LOG.md` records the latest bytes.

- `awmf-guideline-full.pdf`: HTTP 200; 2510315 bytes; SHA-256 `70ecf9fea4754c0888895a397f8aa83a16ee49baa0493688ebd7e4397f6369a4`
- `awmf-guideline-detail.html`: HTTP 200; 6937 bytes; SHA-256 `83efeca3a3fa821469405775af97c6a65868069fe5ac559e6b09185d7682e791`
- `soc-lipedema-pmc8652358.html`: HTTP 200; 336395 bytes; SHA-256 `63a2e75cf875f8306839467ff9fc5b24203d9babb84b2d4a00928931a110a8ba`
- `diuretic-deprescribing-pmc11671325.html`: HTTP 200; 273872 bytes; SHA-256 `54f3e91dd4bdb68120f7679a5d6ccd76d7914e8f4877a281e1068c40ed3ad9f2`
- `diuretic-withdrawal-pmc2542786.html`: HTTP 200; 102004 bytes; SHA-256 `a08315466408106ca0b3af72bd6103012aae84beb8ae517735d603d03235a5be`
- `metabolic-alkalosis-pmc10947768.html`: HTTP 200; 196307 bytes; SHA-256 `e9e565501f07ee2982fa7dec0a5baaa0a356878b5016301db9fead39b2dc63b6`
- `pubmed-efetch-round5.xml`: HTTP 200; 149855 bytes; SHA-256 `99a7b69d1525fdeaa1fee14246d928537e62bd87aa7c8983776f80dfa444c9ac`
- `aafp-peripheral-edema.html`: HTTP 200; 472320 bytes; SHA-256 `509bddb98e35029248157d11704dfe9da41c9ad56ad9e0f717a90db9fde95552`
- Spanish AWMF PDF: `web_extract` reported `http_error`; the first direct fetch did not include it. The later direct recheck returned HTTP 500 and is recorded in `FETCH-LOG.md`.
