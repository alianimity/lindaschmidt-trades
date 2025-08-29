# 10 · Contact Information & Legal Requirements

## Contact Information Standards

### Email Structure
- **General inquiries**: `hello@domain.com`
- **Customer support**: `support@domain.com`
- **Professional separation**: Use different emails for different purposes to improve customer service

### Phone Number
- Include proper formatting: `(XXX) XXX-XXXX`
- Specify business hours: "Mon-Fri 8AM-6PM ET"
- Use clickable tel: links: `tel:+1XXXXXXXXXX`

### Contact Information Locations
Update contact info across ALL these locations when changed:
- **Footer**: Primary contact display
- **Contact page hero**: Quick contact display
- **Contact info cards**: Detailed contact methods
- **FAQ section CTAs**: Action buttons
- **Legal pages**: Terms and Privacy Policy
- **CTA sections**: Throughout site for lead generation

## Legal Page Requirements

### Terms of Service (Required)
Must include:
- Service definitions covering all offered services
- Payment terms and conditions
- Liability limitations and disclaimers
- Governing law (state/jurisdiction)
- Contact information for legal matters
- Termination clauses
- Intellectual property rights

### Privacy Policy (Required)
Must include:
- Data collection practices
- Data usage and sharing policies
- Cookie usage (if applicable)
- User rights (GDPR compliance)
- Contact information for privacy matters
- Data retention policies
- Third-party integrations disclosure

### Content Guidelines
- Use `&quot;` instead of `"` in JSX text to avoid ESLint errors
- Include current contact information in both legal pages
- Update legal pages when business operations change

## Implementation Checklist

### Contact Info Update Process
When updating contact information:
1. [ ] Update `src/components/sections/contact-info.tsx`
2. [ ] Update `src/components/sections/contact-hero.tsx`
3. [ ] Update `src/components/layout/footer.tsx`
4. [ ] Update `src/components/sections/cta-section.tsx`
5. [ ] Update `src/components/sections/faq-section.tsx`
6. [ ] Update `src/app/terms/page.tsx`
7. [ ] Update `src/app/privacy/page.tsx`
8. [ ] Test all mailto: and tel: links
9. [ ] Verify build passes without errors

### Legal Pages Setup
1. [ ] Create Terms of Service page at `/terms`
2. [ ] Create Privacy Policy page at `/privacy`
3. [ ] Add links to both pages in footer
4. [ ] Ensure both pages include contact information
5. [ ] Review content for industry compliance
6. [ ] Test page accessibility and mobile responsiveness

## Best Practices

### Professional Contact Management
- **Response expectations**: Set clear response time expectations
- **Service coverage**: Use general email for quotes, support email for existing customers
- **Professional presentation**: Include service area (e.g., "Connecticut, USA - Serving all 50 states")

### Legal Compliance
- **Industry-specific requirements**: Ensure compliance with state/federal regulations
- **Regular updates**: Review and update legal pages when business changes
- **Contact accessibility**: Make legal contact information easily findable

### Technical Implementation
- **Build testing**: Always test build after contact info changes
- **Link validation**: Verify all contact links work properly
- **Responsive design**: Ensure contact info displays well on all devices
