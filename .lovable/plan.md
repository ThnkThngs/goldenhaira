## Redesign: Adopt Avoca.store Layout & Design

The Avoca.store site has a distinctive design language: deep green color palette, organic/natural aesthetic, split-layout hero with product image on one side and text on the other, decorative leaf elements, accordion-style content blocks, full-bleed image grids, and a featured product section with FAQs.

Here's the plan to adapt this layout to Golden Haira while keeping your brand content.

---

### 1. Color Palette Overhaul

Use the current cream/gold palette with an Avoca-inspired deep green scheme:

### 2. Hero Section — Split Layout

Redesign `HeroSection.tsx` to match Avoca's split hero:

- **Left half**: Dark green background with brand icon/logo, large serif headline, description paragraph, and "Order Now" button
- **Right half**: Full-bleed product hero image (the bottle on greenery/natural backdrop)
- Remove the current overlay gradient approach; use a true 50/50 grid layout
- Add a small decorative brand mark above the headline

### 3. Navigation

Update `Navigation.tsx`:

- Transparent/dark green background matching the hero
- Logo on the left, links on the right
- Simpler, more minimal styling to match Avoca's clean nav

### 4. Marquee Banner

Keep the existing marquee but restyle:

- Use the green color scheme instead of dark foreground
- Slightly different text content style

### 5. "Farm to Table" Style Section (Product Story)

Create a new section or restyle `ProductShowcase.tsx`:

- **Split layout**: Large product/lifestyle image on one side, text on the other
- Decorative leaf/botanical elements in corners (using CSS or SVG)
- Headline + paragraph describing the product origin story
- Alternate image/text sides for visual rhythm

### 6. Accordion Content Section ("Our Roots" style)

Restyle or replace `BenefitsGrid.tsx`:

- Use an **accordion** layout (like Avoca's "Our Roots", "The Essence", "Quality Assurance" sections)
- Each item expands to reveal content
- Sits alongside or below a lifestyle image
- Uses the existing Radix accordion component

### 7. Full-Bleed Image Grid

Add a new section with a **4-column image grid** (like Avoca's usage images):

- Full-width row of product/lifestyle images
- No gaps or minimal gaps
- Caption overlay or standalone heading above

### 8. Featured Product Section

Restyle `ProductShowcase.tsx` to match Avoca's featured product block:

- Product image on the left
- Product name, price, benefit icons in a horizontal row
- Bullet-point feature list
- Size selector and "Add to Cart" / "Order Now" button
- Clean card-style layout

### 9. FAQ Accordion

Add a FAQ section using Radix accordion:

- Common questions about the argan bonding oil
- Sits below the featured product section
- Clean expand/collapse with + icon

### 10. Footer

Restyle `Footer.tsx`:

- Dark green background matching overall theme
- Minimal layout with brand name, links, social icons

### 11. Files to Modify


| File                                 | Change                                   |
| ------------------------------------ | ---------------------------------------- |
| `src/index.css`                      | New color variables (green palette)      |
| `src/components/HeroSection.tsx`     | Split 50/50 layout                       |
| `src/components/Navigation.tsx`      | Green theme, minimal style               |
| `src/components/Marquee.tsx`         | Color updates                            |
| `src/components/ProductShowcase.tsx` | Major restyle to featured product layout |
| `src/components/BenefitsGrid.tsx`    | Accordion-based layout                   |
| `src/components/SocialProof.tsx`     | Restyle to match green theme             |
| `src/components/FounderSection.tsx`  | Restyle, decorative elements             |
| `src/components/PartnerSection.tsx`  | Green theme update                       |
| `src/components/CTABanner.tsx`       | Green theme update                       |
| `src/components/Footer.tsx`          | Green theme restyle                      |
| `src/pages/Index.tsx`                | Add new image grid section               |


### 12. New Components

- **ImageGrid.tsx** — Full-bleed 4-column lifestyle image row
- **FAQSection.tsx** — Accordion FAQ section using Radix

### Summary

This is a significant visual overhaul touching ~12 files. The structure of sections remains similar but the color palette shifts from cream/gold to deep green/cream, layouts shift to split 50/50 compositions, and interactive elements like accordions replace the current static grid cards.