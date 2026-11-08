# Emmanuel Kebodi | Data Analyst

Emmanuel Kebodi’s portfolio of business analysis, reporting and academic research writing.

## Collections

- **Data analytics** contains four case studies using Excel, MySQL and Power BI. Each includes its business question, method, findings, limitations and original repository.
- **Academic research** contains fourteen studies across five themes, with filters for theme and study design. Research briefs and reports open in their original Google Drive viewers and follow the sharing settings of each document.

The site includes shareable project detail views, search, sorting, list and grid layouts, a downloadable CV and contact details.

## Review or run locally

Serve the repository root with `python -m http.server 8000` and open `http://localhost:8000`. The checked-in website runs without installing packages. Use a local server when testing legacy case-study URLs.

## Editing

Update project evidence in `src/projects.ts`, theme labels in `src/research.ts`, the collection controls in `src/Collection.tsx`, and the page layout in `src/Portfolio.tsx`. Styles are in `styles.css`.

After changing the React source, use Node.js 22 or newer, run `npm install`, then `npm run build`. Commit the source and generated HTML and JavaScript together. The four original case-study addresses continue to open the corresponding project notes.

GitHub Pages can serve the root of the chosen publishing branch. This repository requires no backend service.
