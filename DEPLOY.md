# Publishing thefinito.org (GitHub Pages)

This repository **is** the website — a single static `index.html` plus `assets/`.
There is no build step. It publishes to GitHub Pages via the workflow in
`.github/workflows/` (see `npm-gulp.yml`, which now contains the static-site
deploy — rename it to `pages.yml` when convenient; GitHub uses the file contents,
not the name).

## One-time setup (in the GitHub repo)

1. **Settings → Pages → Build and deployment → Source:** select **GitHub Actions**.
   (The old "Deploy from a branch" / gh-pages flow is no longer used — the previous
   `npm install && npm run build` workflow was removed because there is no npm build.)
2. Push to `main`. The **Deploy static site to GitHub Pages** workflow uploads the
   repo root as a Pages artifact and deploys it. Watch it under the **Actions** tab.
3. **Settings → Pages → Custom domain:** confirm it shows `thefinito.org` (the
   `CNAME` file already sets this), then enable **Enforce HTTPS** once the
   certificate is issued.

## What's in the repo for Pages

- `index.html` — the site (asset paths are **relative**, so they work at the domain root).
- `assets/` — logo mark, wordmark, favicons, OG image.
- `CNAME` — `thefinito.org` (custom apex domain).
- `.nojekyll` — tells Pages not to run Jekyll (serve files as-is).
- `.github/workflows/npm-gulp.yml` — the deploy workflow.

## DNS records (at your domain registrar)

**Apex `thefinito.org` → GitHub Pages:**

| Type | Host | Value               |
|------|------|---------------------|
| A    | @    | 185.199.108.153     |
| A    | @    | 185.199.109.153     |
| A    | @    | 185.199.110.153     |
| A    | @    | 185.199.111.153     |
| AAAA | @    | 2606:50c0:8000::153 |
| AAAA | @    | 2606:50c0:8001::153 |
| AAAA | @    | 2606:50c0:8002::153 |
| AAAA | @    | 2606:50c0:8003::153 |

**`www.thefinito.org` → the Pages host** (enables the automatic www→apex redirect):

| Type  | Host | Value                    |
|-------|------|--------------------------|
| CNAME | www  | ajapros.github.io.       |

## Verify

```bash
dig +short thefinito.org         # the four 185.199.108-111.153 A records
curl -sI https://thefinito.org   # 200, served over HTTPS
```
