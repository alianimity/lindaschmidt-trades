# 06 · QA & Troubleshooting

## Build & Lint

### TypeScript Errors
- **Array type assertions**: Add `as [number, number]` to pricing ranges
- **Client Component metadata**: Remove `export const metadata` from Client Components
- **Icon serialization**: Use `"use client"` for components receiving Lucide icons
- Remove explicit JSX.Element returns if Next/TS conflicts

### ESLint Issues
- **Unescaped quotes**: Use `&quot;` instead of `"` in JSX text content
- **Unused variables**: Rename to meaningful names or use underscore prefix
- Use next/link instead of `<a>` for internal links

### Common Build Errors
```bash
# Error: Cannot apply unknown utility class 'dark'
# Fix: Remove html className="dark" and use @theme block instead

# Error: Package path ./base is not exported
# Fix: Use @import "tailwindcss" instead of separate imports

# Error: Only plain objects can be passed to Client Components
# Fix: Add "use client" to components receiving icons
```

## Styling Issues

### Tailwind v4 Specific
- **Color system**: Use direct classes `bg-brand-primary` instead of `bg-[var(--brand-primary)]`
- **Import syntax**: Use single `@import "tailwindcss"` instead of base/components/utilities
- **Theme definition**: Use `@theme` block in globals.css, not `:root` variables
- **Config**: Simple config with content array, avoid complex plugin arrays

### Common Color Fixes
- Replace `[var(--brand-primary)]` with `brand-primary` throughout codebase
- Replace `[var(--brand-support)]` with `brand-support` throughout codebase
- White-on-dark cards: use `bg-brand-support` and `border-brand-primary/20`

## Layout & Interaction Bugs

### Navbar Issues
- **Dropdown vanishing**: Use CSS-only with proper hover areas, avoid excessive `mt-` spacing
- **Background transitions**: Use `bg-transparent` to `bg-black/95` with scroll detection
- **Mobile menu**: Prefer CSS transforms over complex Framer Motion

### General Layout
- Missing position context: add relative to parent when using absolute children
- Z-index stacking: ensure click targets are above decorative layers
- **Responsive design**: Test dropdown behavior on mobile vs desktop

## Windows Specific
- EPERM on .next/trace: safe to ignore; redeploy on Vercel for clean build
- Use separate PowerShell commands instead of chained && when failing

## Shopify CSV Errors
- Invalid price: check column alignment; add missing empty fields
- Invalid image src: add a valid Image Src URL for main product rows
- Weight unit issues: leave Variant Weight Unit blank for services

## Content QA
- Legal-safe language; realistic numbers
- **Unique service stats**: Each service page should have different stats card content
- **Realistic pricing**: Verify pricing ranges match service profile documentation
- Testimonials with personal names (no company names)
- **Contact information consistency**: Ensure all email/phone updates are applied across:
  - Footer
  - Contact pages (hero, info cards)
  - FAQ section CTAs
  - Legal pages
  - CTA sections

## Performance Optimization
- **Minimize Framer Motion**: Use only for complex interactions
- **CSS-only dropdowns**: Use `group` and `group-hover` instead of JavaScript
- **Icon optimization**: Define icons directly in components instead of passing as props
