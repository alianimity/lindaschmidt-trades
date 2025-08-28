# 04 · Build Architecture (Next.js App Router)

## Routes & Pages
- Home: hero, services grid, process, reviews, FAQ, CTA
- Services index: alternating cards with price/timeline
- Service detail: hero, overview, what's included (6 cards), pricing (3–4 tiers), special card, CTA, related services
- About: mission/values, story, team, stats, standards
- Contact: hero, contact info, validated form, CTA
- Legal: terms, privacy

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
<div className="p-8 rounded-2xl border border-[var(--brand-primary)]/20 bg-[var(--brand-support)]">
  <div className="flex items-center justify-between mb-4">
    <h3 className="text-xl font-medium text-white">Tier Name</h3>
    <div className="text-2xl font-bold text-[var(--brand-primary)]">$X–$Y</div>
  </div>
  <p className="text-neutral-300 mb-3">Description</p>
  <p className="text-sm text-neutral-400"><strong>Example:</strong> Use case</p>
</div>
```
</details>

## Linting & Common Fixes
- Remove explicit JSX.Element return types if TS conflicts
- Use next/link instead of <a> for internal links
- Tailwind darkMode: 'class'
