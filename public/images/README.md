# Image placeholders

This build could not receive the actual photo/logo files shared in the request (the remote build
environment does not have access to images pasted into chat), so the site currently renders elegant
placeholder panels wherever a photo belongs. Add real files with these **exact names** to this folder
and they will appear automatically — no code changes needed.

| File to add | Used for |
|---|---|
| `hero-agents.jpg` | Hero section full-width background |
| `agents-mission.jpg` | "Des agents prêts à protéger..." section, large photo |
| `agents-vehicle.jpg` | Same section, small photo (e.g. the MSI patrol vehicle) |
| `agents-team.jpg` | Same section, small photo (team / uniforms group shot) |
| `og-cover.jpg` | Social share preview image (1200×630px recommended) |
| `logo-msi.png` | Optional: replace the built-in SVG badge with the client's exact logo file (also update `<link rel="icon">` in `index.html` and swap `<Logo />` for an `<img>` in `Navbar.tsx` / `Footer.tsx`) |

Recommended sizes: hero image ≥ 1920×1080px, section photos ≥ 1200×900px, all as optimized `.jpg` or `.webp` (under ~300KB each) for fast loading.
