

## Revert to Cream/Gold Color Palette

The Avoca-style layouts (split hero, accordions, image grid, FAQ) are already in place and will stay. Only the **color palette** in `src/index.css` needs to change — reverting from deep green to a warm cream/gold scheme.

### Color Variable Changes (`src/index.css`)

| Token | Current (Green) | New (Cream/Gold) |
|-------|----------------|------------------|
| `--background` | `160 25% 22%` (deep green) | `40 33% 96%` (warm cream) |
| `--foreground` | `36 33% 93%` (cream) | `30 10% 15%` (dark brown/charcoal) |
| `--card` | `160 22% 18%` (darker green) | `38 30% 92%` (slightly darker cream) |
| `--primary` | stays gold | stays gold |
| `--secondary` | green tones | warm neutral tones |
| `--muted` | green tones | warm neutral tones |
| `--border/input` | green tones | warm neutral tones |
| `--dark/dark-deep` | deep green | dark warm brown |

All component files use Tailwind semantic tokens (`bg-background`, `text-foreground`, `bg-card`, `text-primary`, etc.), so they will automatically pick up the new palette — **no component file changes needed**.

Only the custom utility class `bg-dark-deep` used in `Footer.tsx` and `CTABanner.tsx` will need the custom token updated in CSS, which is covered by the variable change.

### Single File to Edit
- **`src/index.css`** — Update all CSS custom property values to cream/gold/warm brown scheme

