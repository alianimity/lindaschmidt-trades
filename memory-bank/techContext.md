# Tech Context: Linda Schmidt Trades Website

## Development Environment
- **OS**: Windows 10 (PowerShell-based development)
- **Node**: LTS version with npm package management
- **Editor**: Cursor with TypeScript and ESLint support
- **Git**: Feature branch workflow with PR reviews

## Technology Stack

### Core Framework
- **Next.js 14**: App Router for modern React patterns and file-system routing
- **TypeScript**: Strict mode enabled for type safety
- **React 18**: Latest React features with concurrent rendering

### Styling & UI
- **Tailwind CSS**: Utility-first CSS with dark mode support
- **shadcn/ui**: Pre-built accessible components on Radix primitives
- **Framer Motion**: Animation library for smooth transitions
- **Lucide React**: Icon library for consistent iconography

### Forms & Validation
- **react-hook-form**: Performant forms with minimal re-renders
- **zod**: TypeScript-first schema validation
- **class-variance-authority**: Component variant management

### Development Tools
- **ESLint**: Code linting with TypeScript rules
- **Prettier**: Code formatting for consistency
- **TypeScript**: Strict configuration for catch errors early

### Deployment & Hosting
- **Vercel**: Zero-config deployment with preview environments
- **Domain**: TBD - will need custom domain configuration
- **Analytics**: Vercel Analytics for performance monitoring
- **Error Tracking**: Optional Sentry integration for production

## Project Structure
```
src/
├── app/                    # App Router pages and layouts
│   ├── (routes)/          # Route groups for organization
│   ├── globals.css        # Global styles and CSS variables
│   └── layout.tsx         # Root layout component
├── components/            # Reusable React components
│   ├── ui/               # Base UI components (shadcn/ui)
│   └── sections/         # Page section components
├── lib/                  # Utility functions and configurations
│   ├── utils.ts          # Helper functions
│   └── validations.ts    # Zod schemas
public/                   # Static assets
├── favicons/            # Favicon files (already provided)
├── logos/               # Brand logos (already provided)
└── images/              # Additional images as needed
```

## Configuration Files
- **tailwind.config.ts**: Dark mode support, custom CSS variables
- **next.config.js**: Next.js configuration for optimization
- **tsconfig.json**: TypeScript strict configuration
- **eslint.config.js**: Linting rules and TypeScript integration

## Development Workflow
1. **Local Development**: `npm run dev` for hot reloading
2. **Type Checking**: `npm run type-check` before commits
3. **Linting**: `npm run lint` for code quality
4. **Building**: `npm run build` for production testing
5. **Deployment**: Automatic via Vercel Git integration

## Environment Variables
- **Production**: Set via Vercel dashboard
- **Development**: `.env.local` for local secrets (never committed)
- **Preview**: Vercel preview deployments for testing

## Dependencies
### Core Dependencies
- `next`: Framework
- `react` & `react-dom`: React library
- `typescript`: Type system
- `tailwindcss`: Styling

### UI & Interaction
- `@radix-ui/react-*`: Accessible UI primitives
- `framer-motion`: Animations
- `lucide-react`: Icons
- `class-variance-authority`: Component variants

### Forms & Validation
- `react-hook-form`: Form management
- `zod`: Schema validation
- `@hookform/resolvers`: Form resolver for zod

### Development
- `eslint`: Linting
- `prettier`: Code formatting
- `@types/*`: TypeScript definitions

## Browser Support
- **Modern browsers**: Chrome, Firefox, Safari, Edge (latest 2 versions)
- **Mobile**: iOS Safari, Chrome Mobile
- **Progressive Enhancement**: Core functionality works without JavaScript

## Performance Targets
- **Lighthouse Score**: >90 for Performance, Accessibility, Best Practices, SEO
- **Core Web Vitals**: Pass all metrics
- **Load Time**: <3 seconds on 3G
- **Bundle Size**: Keep JavaScript bundles minimal via code splitting

## Accessibility Standards
- **WCAG 2.1 AA**: Full compliance for legal and usability requirements
- **Keyboard Navigation**: Complete keyboard accessibility
- **Screen Readers**: Compatible with NVDA, JAWS, VoiceOver
- **Color Contrast**: Minimum 4.5:1 ratio for normal text
