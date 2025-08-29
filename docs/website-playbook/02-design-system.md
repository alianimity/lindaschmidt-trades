# 02 · Design System & UX Standards

## Theme & Tokens
- Dark theme recommended (modern, high contrast)
- **Tailwind v4 Color System**:
  - Use `@theme` block in globals.css instead of CSS variables
  - Define colors as: `--color-brand-primary: #D1793F`
  - Access in classes as: `bg-brand-primary`, `text-brand-primary`
  - **AVOID** `[var(--brand-primary)]` syntax - use direct classes
- Industry-agnostic color pairs; ensure WCAG AA contrast

### Tailwind v4 Setup (globals.css)
```css
@import "tailwindcss";

@theme {
  --color-brand-primary: #D1793F;
  --color-brand-support: #423833;
}
```

## Layout Patterns
- Hero → Overview → What's Included → Pricing → Special Card → CTA → Related
- Grid: 12-col responsive; cards use rounded-2xl, subtle borders
- Spacing rhythm: consistent section paddings (py-20+)

## Motion
- **Minimal Framer Motion usage** - prefer CSS transitions for performance
- Use Framer Motion only for complex animations (page transitions, mobile menus)
- For dropdowns/navbars: Use CSS-only with `group` and `group-hover` classes
- Duration ~0.6–0.8s when used; avoid over-animating

## Accessibility
- Semantic headings, landmarks
- Keyboard focus states, target sizes
- Alt text and descriptive labels

## Consistency Rules
- Identical section order across service pages
- **Unique service customization**: Each service should have unique stats card content
- **Contact Information Structure**: 
  - General email: `hello@domain.com`
  - Support email: `support@domain.com`
  - Include both in contact pages for better service coverage
- Realistic stats; avoid inflated claims; legal-safe wording
- **Legal Pages Required**: Terms of Service and Privacy Policy with proper contact info

## Reference Brands (as pattern inspiration only)
- Modern editorial (Block Renovation, Homebound, Norm Architects)
- Apply patterns, not visuals; stay brand-aligned
