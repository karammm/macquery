# MacQuery Company Brochure

**File:** `MacQuery-Company-Brochure.pdf` (5 pages, A4)

| Page | Content |
|------|---------|
| 1 | Cover — brand, tagline, SIILARD LABS LLP |
| 2 | About, why MacQuery, stats, industries |
| 3 | All 8 services + maintenance note |
| 4 | Portfolio / case studies + testimonial |
| 5 | Leadership team, contact, **QR → [macquery.in](https://www.macquery.in)** |

## Regenerate after content changes

```bash
npm install   # first time: pdfkit, pdf-lib, qrcode
npm run brochure
```

Requires `public/macquerylogo.png` for the cover logo. Each page is rendered separately and merged into exactly **5 pages** (A4).
