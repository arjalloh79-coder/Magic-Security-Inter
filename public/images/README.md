# Images

Real client assets are in place, each with responsive `-480w`/`-800w` variants
generated where the source resolution allows (no upscaling — a variant is only
generated when it's genuinely smaller than the original):

| File | Used for |
|---|---|
| `logo-msi.jpg` | Official MSI badge — navbar, footer, browser favicon |
| `hero-agents.jpg` (+ `-480w`, `-800w`) | Hero section full-width background, also used in the gallery and as the social share / Open Graph image |
| `agents-mission.jpg` (+ `-480w`) | Personnel section + gallery — agents on field duty |
| `agents-vehicle.jpg` (+ `-480w`, `-800w`) | Personnel section + gallery — the MSI-branded patrol vehicle |
| `agents-team.jpg` (+ `-480w`) | Personnel section + gallery — full team lineup in uniform |
| `event-crowd.jpg` (+ `-480w`) | Personnel section + gallery — event security presence |

**Note on sharpness**: these are real photos uploaded by the client at their
original resolution (551–1170px wide). The srcset always serves the sharpest
available file for a given viewport, but the images can't be sharper than
their source — if MSI ever supplies higher-resolution originals (e.g. from a
phone set to full quality instead of a compressed export), replace the base
file with the same name and re-run the resize step below to regenerate the
`-480w`/`-800w` variants at the new source quality.

To regenerate variants after replacing a source image (requires `sharp`,
not a project dependency — install temporarily):
```
npm install --no-save sharp
node -e "
const sharp = require('sharp');
sharp('public/images/FILENAME.jpg').resize({width:480}).jpeg({quality:78,mozjpeg:true}).toFile('public/images/FILENAME-480w.jpg');
"
```

Every image component (`Logo`, `PhotoSlot`) automatically falls back to an
elegant placeholder/recreation if a file here is ever renamed or removed —
so replacing any of these later is as simple as overwriting the file with
the same name, no code changes required.
