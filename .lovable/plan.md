

# Brand Repositioning: From AI Startup to Premium Hair Care

This is a comprehensive brand overhaul to reposition the site as a luxury professional hair oil brand (90% premium hair care, 10% science-backed formulation).

---

## What Gets Removed

1. **AIToolsShowcase component** — entire "AI-Powered Suite" section with AI Mixologist, AI Expert, AI Cocktailing Guide, AI Salon Strategist, AI Marketing Suite cards
2. **RoutineCustomizer component** — AI-powered routine generator
3. **AskExpert component** — AI expert Q&A
4. **Cocktailing component** — AI cocktailing guide
5. **HowItWorks component** — "Three Steps to Smarter Styling" (AI tool workflow)
6. **Revenue breakdown block** in PartnerSection (RM2,500 / RM6,250 MLM-style numbers)
7. **Salon Strategist dialog** in PartnerSection (Generate Strategy AI tool)
8. **Salon Post Generator** in PartnerSection (Instagram AI content generator)

---

## What Gets Rewritten

### HeroSection
- Headline: **"Restore. Strengthen. Elevate."** (replaces "Sell Smarter. Style Better.")
- Subheading: **"THE GOLDEN HAIRA™ Argan Bonding Oil"**
- Tagline: **"Professional-grade bonding oil formulated in France. Designed to restore strength, smoothness and radiant shine for chemically treated and damaged hair."**
- Remove "Explore AI Tools" CTA; keep "Order Now" and "Partner With Us"

### Navigation
- Remove "How It Works" and "AI Tools" links
- Add "Ingredients" link pointing to `#benefits`
- Keep Product, Our Story, Partner, Order

### Marquee
- Keep as-is (already on-brand: "FORMULATED IN FRANCE", "SALON EXCLUSIVE", etc.)

### ProductShowcase
- Rewrite description: *"The Golden Haira™ Argan Bonding Oil is a professional finishing oil designed to repair internal hair bonds, restore softness, and deliver long-lasting shine — without weight or grease."*
- Add "Ideal for" list: Dry hair, Chemically treated, Color-treated, Heat-damaged
- Add closing line: *"Lightweight. Powerful. Salon-approved."*

### BenefitsGrid
- Rewrite subtitle: Replace "Engineered with fortified amino acids..." with *"Formulated with fortified amino acids to reconstruct from within, delivering a lightweight, non-greasy, salon-approved finish."*
- Refine individual ingredient descriptions per the brief (Pure Argan Oil, Fortified Amino Acids, Cyclopentasiloxane, Heat Protection)

### SocialProof
- Replace AI-focused testimonials with product-focused ones:
  - *"Clients immediately feel the softness after blow-dry. It's become our go-to finishing oil."*
  - *"Perfect retail product — lightweight but powerful. Clients keep coming back for it."*
  - *"Best finishing oil for chemically treated hair. Noticeably stronger, shinier results."*

### PartnerSection
- Remove Revenue Breakdown block, Strategist dialog, and Post Generator
- Replace with elegant "Why Salons Love Golden Haira™" block: Strong retail repeat rate, Easy add-on during blow dry, Healthy protected margins, No online price competition
- Keep partner benefit cards and contact card

### CTABanner
- Rewrite: *"Experience the Gold Standard in Hair Care"*
- Subtitle: *"Join the salons already offering Golden Haira™ Argan Bonding Oil to their clients. Premium results. Protected margins. Effortless retail."*

### Index.tsx
- Remove imports and usage of: HowItWorks, AIToolsShowcase, RoutineCustomizer, AskExpert, Cocktailing

---

## What Stays Unchanged
- FounderSection (already on-brand)
- FloatingOrderButton
- Footer
- ClickSpark
- Marquee
- All product images/videos
- All styling/CSS

---

## Technical Notes
- Components removed from the page will have their files kept but unused (or deleted for cleanliness)
- No backend/database changes needed
- AI streaming libraries (`ai-stream.ts`, `ai-invoke.ts`) and edge function remain but are no longer referenced from the homepage

