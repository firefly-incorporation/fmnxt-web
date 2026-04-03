# FMNXT Web

Professional learning platform UI for FM and CRE — React, TypeScript, Vite, Ant Design, Tailwind CSS.

**Suggested repository name:** `fmnxt-web`

## Scripts

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
npm run preview  # preview production build
```

## Publish to GitHub

1. Create a new repository on GitHub named **`fmnxt-web`** (empty, no README).
2. From this folder:

```bash
git remote add origin https://github.com/YOUR_USERNAME/fmnxt-web.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username or organization.

## Client preview (deploy)

After the repo exists, connect it to **Vercel**, **Netlify**, or **Cloudflare Pages** (build: `npm run build`, output: `dist`) and share the generated `https://…` URL.
