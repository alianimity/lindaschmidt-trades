# 01 · Setup & Conventions

## Recommended Stack (primary)
- Next.js (App Router), TypeScript
- Tailwind CSS v4, shadcn/ui (Radix primitives), Framer Motion (minimal usage)
- react-hook-form + zod (validation)
- Deployed on Vercel

Alternatives:
- Framework: Remix, SvelteKit
- Styling: CSS Modules, styled-components
- Motion: GSAP

## Repo & Tooling
- Node LTS, pnpm or npm
- ESLint + TypeScript strict
- Prettier consistent formatting
- Git branching: feature/*, PR reviews
- Windows PowerShell notes: prefer separate commands over chained when needed (cd .. then Remove-Item -Recurse -Force)

## Project Initialization (Next.js + Tailwind)
<details><summary>Commands</summary>

```bash
npx create-next-app@latest my-site --ts --eslint --src-dir --app --tailwind --use-npm
cd my-site
npm i @radix-ui/react-slot framer-motion zod react-hook-form class-variance-authority lucide-react
```

```bash
# For Tailwind v4, create minimal config:
# tailwind.config.ts → export default { content: ["./src/**/*.{js,ts,jsx,tsx}"], theme: { extend: {} }, plugins: [] }
```
</details>

## Directory Structure (App Router)
- src/app/(routes)
- src/components/(ui + sections)
- src/lib/(utilities)
- public/(assets)

## Environment
- Vercel for hosting (zero-config)
- .env for API keys (never commit)
- Preview deployments for each PR

## Git Configuration
- For specific user attribution per project:
```bash
git config user.name "username"
git config user.email "username@users.noreply.github.com"
git remote set-url origin https://username@github.com/username/repo.git
```
- To reset Git history if needed:
```powershell
Remove-Item -Recurse -Force .git
git init
git remote add origin https://username@github.com/username/repo.git
git add .
git commit -m "Initial commit"
git branch -M main
git push -f origin main
```

