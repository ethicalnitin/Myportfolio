# Nitin Srivastava · portfolio

Personal site: [portfolioreact1.vercel.app](https://portfolioreact1.vercel.app). A single page with experience,
two engineering case studies (architecture, a sequence diagram, decisions and trade-offs), skills and contact.

Built with React 18, Vite 5 and Tailwind CSS 3. No animation or 3D libraries; the only runtime dependencies are
React and `react-icons`.

## Run

```bash
npm install
npm run dev       # local dev server
npm run lint      # ESLint, zero warnings allowed
npm run build     # production build into dist/
npm run preview   # serve dist/ locally
```

## Where things live

| Path | What |
| --- | --- |
| `src/constants/index.js` | All site copy: profile, case studies, experience, skills. Edit content here. |
| `src/components/` | One component per section, plus `Section` (shared layout), `CaseStudy`, `SequenceTrace` and `SystemContext` (diagrams). |
| `src/index.css` | Design tokens (light and dark colours) and the few custom component classes. |
| `tools/resume.html` | Source of the resume PDF. |
| `tools/og-card.html` | Source of the link-preview image. |
| `public/` | Served as-is: `Nitin_Srivastava_Resume.pdf`, `og.png`, `favicon.svg`. |

## Updating the resume

The resume and the site must say the same things. Edit `tools/resume.html` (and the matching copy in
`src/constants/index.js`), then regenerate the PDF and preview image with headless Chrome or Edge:

```bash
npm run render    # set CHROME_PATH if your browser isn't found automatically
```

## Deploy

Vercel builds the `main` branch with the default Vite preset (`npm run build`, output `dist/`). No environment
variables are needed.
