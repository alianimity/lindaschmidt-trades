# System Patterns: Linda Schmidt Trades Website

## Architecture Decisions

### Technology Stack
- **Framework**: Next.js 14 with App Router for modern React patterns
- **Language**: TypeScript for type safety and developer experience
- **Styling**: Tailwind CSS for rapid, consistent styling
- **Components**: shadcn/ui built on Radix primitives for accessibility
- **Motion**: Framer Motion for smooth, purposeful animations
- **Forms**: react-hook-form + zod for validation and user experience
- **Deployment**: Vercel for zero-config hosting and preview deployments

### Design System Patterns
- **Theme**: Dark theme with high contrast for modern, professional appearance
- **Color System**: Tailwind v4 @theme configuration with brand-primary (#D1793F) and brand-support (#423833)
- **Layout**: Clean, minimal design with consistent spacing and professional typography
- **Components**: Simple, functional card patterns with subtle borders and hover states
- **Typography**: Clear hierarchy with semantic headings and readable font sizes
- **Motion**: Minimal, purposeful transitions focused on usability over flashiness

### Page Structure Patterns
**Service Pages Follow Consistent Order:**
1. Hero section with value proposition
2. Overview (left text, right visual)
3. What's Included (6 cards highlighting features)
4. Pricing (3-4 tiers with clear price ranges)
5. Special Card (unique per service with icon)
6. Call-to-Action section
7. Related Services

**Homepage Structure:**
- Hero with main value proposition
- Services grid overview
- Process explanation
- Customer reviews/testimonials
- FAQ section
- Final CTA

### Component Patterns
- **Cards**: Clean styling with `border-brand-primary/20` and `bg-brand-support` using proper Tailwind classes
- **Navigation**: Professional fixed navbar with CSS-only dropdown, transparent to solid on scroll
- **CTAs**: Strategic placement with orange gradient buttons and clear call-to-action text
- **Forms**: Validated contact forms with proper error handling and accessibility
- **Related Content**: Cross-linking between services for improved discovery and SEO

### Content Patterns
- **Legal-Safe Language**: "Experienced, qualified, trained" rather than "licensed/certified" unless verified
- **Realistic Stats**: Avoid inflated claims, use verifiable ranges
- **Testimonials**: Personal names with city/region (no exact addresses)
- **Pricing**: Clear ranges that match the detailed service profile
- **Trust Signals**: Professional credentials, experience years, project counts

### Accessibility Patterns
- **Semantic HTML**: Proper heading hierarchy and landmark regions
- **Keyboard Navigation**: Full keyboard accessibility for all interactive elements
- **Focus States**: Clear visual focus indicators
- **Alt Text**: Descriptive alternative text for all images
- **Color Contrast**: WCAG AA compliance with high contrast ratios
- **Target Sizes**: Adequate touch targets for mobile users

### Performance Patterns
- **Image Optimization**: Next.js Image component for automatic optimization
- **Code Splitting**: Route-based code splitting via App Router
- **CSS**: Tailwind CSS for minimal bundle sizes
- **Fonts**: System fonts or optimized web fonts
- **Lazy Loading**: Images and components loaded as needed

### SEO Patterns
- **Metadata**: Comprehensive title/description for each page
- **Structured Data**: Service and business schema markup
- **URL Structure**: Clean, descriptive URLs
- **Internal Linking**: Strategic cross-linking between services
- **Content Hierarchy**: Clear H1-H6 structure for search engines
