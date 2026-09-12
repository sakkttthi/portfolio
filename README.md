# Sakthivel Nathan — Portfolio

Personal portfolio for **Sakthivel Nathan**, SDET / Automation Test Engineer (4+ years). All page content is taken from the attached resume: contact details, professional summary, technical skills, both roles with every bullet, and education.

## Run locally

```bash
npm install
npm run dev
```

Open the printed local URL (typically `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

Static output is written to `dist/`. Vite `base` is `./` so the site works on GitHub Pages.

## GitHub Pages

Live site: **https://sakkttthi.github.io/portfolio/**

A GitHub Actions workflow (`.github/workflows/deploy-pages.yml`) builds the app and publishes `dist/` to GitHub Pages on push to `main`. Merge that change into `main` to publish — GitHub only allows the `github-pages` environment to deploy from `main`.

## Resume PDF

The downloadable resume is at [`public/Sakthivel_Nathan_Automation_Tester.pdf`](public/Sakthivel_Nathan_Automation_Tester.pdf).
