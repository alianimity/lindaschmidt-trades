# 09 · Templates & Snippets

## Service Page Section Order
1. Hero
2. Overview (left text, right visual)
3. What’s Included (6 cards)
4. Pricing (3–4 tiers)
5. Special Card (unique per service)
6. CTA
7. Related Services

## Reusable Copy Blocks
- Legal-safe credentialing: “Work requiring specialized credentials is performed by appropriately qualified partners.”
- Nationwide: “Available across all 50 states.”

## Code Templates

<details><summary>Hero block</summary>

```tsx
<section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-neutral-900 via-neutral-800 to-black">
  <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-support)]/20 to-[var(--brand-primary)]/10" />
  <div className="relative z-10 max-w-[1000px] mx-auto px-6 text-center">
    {/* title, subtitle, stats */}
  </div>
</section>
```
</details>

<details><summary>Pricing card</summary>

```tsx
<div className="p-8 rounded-2xl border border-[var(--brand-primary)]/20 bg-[var(--brand-support)]">
  <div className="flex items-center justify-between mb-4">
    <h3 className="text-xl font-medium text-white">Tier</h3>
    <div className="text-2xl font-bold text-[var(--brand-primary)]">$X–$Y</div>
  </div>
  <p className="text-neutral-300 mb-3">Description</p>
  <p className="text-sm text-neutral-400"><strong>Example:</strong> …</p>
</div>
```
</details>

<details><summary>Special card (variant)</summary>

```tsx
<div className="mt-8 p-6 bg-[var(--brand-primary)]/10 rounded-2xl border border-[var(--brand-primary)]/20">
  <div className="flex items-center gap-3 mb-3">
    {/* Icon */}
    <h3 className="font-medium text-white">Title</h3>
  </div>
  <p className="text-neutral-300">Message</p>
</div>
```
</details>
