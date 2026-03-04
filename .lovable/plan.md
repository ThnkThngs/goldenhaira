

## Create Light Shade Section

A new `LightShadeSection` component following the existing split-layout pattern (50/50 grid with image + text), and wire it into the page + nav.

### New Component: `src/components/LightShadeSection.tsx`
- Split layout matching BenefitsGrid/HeroSection pattern: image left, content right
- `id="light-shade"` for anchor linking
- Content about the Light Shade variant of the product (lighter formula for fine/light-colored hair)
- Uses existing product image asset as placeholder
- Framer Motion fade-in animations matching other sections
- Semantic Tailwind tokens for colors

### Edit: `src/pages/Index.tsx`
- Import `LightShadeSection` (lazy loaded)
- Place it after `ProductShowcase` and before `BenefitsGrid` in the below-fold `<Suspense>` block

### Nav Link
- Already wired: `{ href: '#light-shade', label: 'Light Shade' }` exists in Navigation.tsx — will scroll to the new `id="light-shade"` section automatically

