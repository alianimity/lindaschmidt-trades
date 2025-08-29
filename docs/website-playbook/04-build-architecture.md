# 04 · Build Architecture (Next.js App Router)

## Routes & Pages
- Home: hero, services grid, process, reviews, FAQ, CTA
- Services index: alternating cards with price/timeline
- Service detail: hero, overview, what's included (6 cards), pricing (3–4 tiers), special card, CTA, related services
- About: mission/values, story, team, stats, standards
- Contact: hero, contact info, validated form, CTA
- **Legal: terms, privacy** (Required for business compliance)

## Client vs Server Components
- **Service pages**: Use Client Components when passing Lucide icons to avoid serialization errors
  - Add `"use client"` directive at top
  - Remove `export const metadata` (Client Components can't export metadata)
- **Static pages**: Keep as Server Components when possible for SEO
- **Icon passing**: Never pass Lucide icon objects from Server to Client - define icons directly in Client Components

## Components
- Navbar (sticky, dropdown), Footer, Breadcrumbs, Related Services, Mobile Sticky CTA
- UI: Button (asChild), cards, stats, icons (lucide-react)

## Code Templates

<details><summary>Next.js page skeleton</summary>

```tsx
export default function Page() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      {/* Overview */}
      {/* What's Included */}
      {/* Pricing */}
      {/* Special Card */}
      {/* CTA */}
      {/* Related Services */}
    </main>
  );
}
```
</details>

<details><summary>Service card (consistent pattern)</summary>

```tsx
<div className="p-8 rounded-2xl border border-brand-primary/20 bg-brand-support">
  <div className="flex items-center justify-between mb-4">
    <h3 className="text-xl font-medium text-white">Tier Name</h3>
    <div className="text-2xl font-bold text-brand-primary">$X–$Y</div>
  </div>
  <p className="text-neutral-300 mb-3">Description</p>
  <p className="text-sm text-neutral-400"><strong>Example:</strong> Use case</p>
</div>
```
</details>

## TypeScript & Linting Fixes

### Common TypeScript Issues
- **Array type assertions**: Use `as [number, number]` for pricing ranges
  ```tsx
  priceRange: [500, 2000] as [number, number]
  ```
- Remove explicit JSX.Element return types if TS conflicts
- **Client Component metadata**: Remove `export const metadata` from Client Components

### JSX & ESLint
- **Quote escaping**: Use `&quot;` instead of `"` in JSX text
- **Unused variables**: Use meaningful names or prefix with underscore
- Use next/link instead of `<a>` for internal links

### Performance Patterns
- **Navbar dropdowns**: Use CSS-only with `group` and `group-hover` classes
- **Minimize Framer Motion**: Only use for complex interactions, prefer CSS transitions
