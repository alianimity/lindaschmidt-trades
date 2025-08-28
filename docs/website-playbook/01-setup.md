# 01 · Setup & Conventions

## Recommended Stack (primary)
- Next.js (App Router), TypeScript
- Tailwind CSS, shadcn/ui (Radix primitives), Framer Motion
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
# If you see tailwind darkMode array config error, use:
# tailwind.config.ts → export default { darkMode: 'class', ... }
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

