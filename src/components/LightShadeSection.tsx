import { motion } from 'framer-motion';
import { ArrowRight, Feather, Sun, Sparkles } from 'lucide-react';
import product1 from '@/assets/product-1.jpeg';

const highlights = [
  { icon: Feather, label: 'Ultra-Lightweight' },
  { icon: Sun, label: 'Color-Safe' },
  { icon: Sparkles, label: 'No Residue' },
];

const LightShadeSection = () => {
  return (
    <section id="light-shade" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[3/4] overflow-hidden"
          >
            <img
              src={product1}
              alt="Golden Haira Light Shade variant"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">
              New Variant
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
              Light Shade
            </h2>

            <div className="flex gap-6 mb-6">
              {highlights.map((h) => (
                <div key={h.label} className="flex items-center gap-2 text-muted-foreground">
                  <h.icon size={16} className="text-primary" />
                  <span className="text-xs tracking-wider uppercase">{h.label}</span>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground font-light leading-relaxed mb-4">
              Specially formulated for fine, light-colored, and blonde hair. The same
              bond-repairing technology in a feather-light formula that won't weigh
              hair down or alter delicate tones.
            </p>

            <ul className="space-y-2 mb-8 text-sm text-muted-foreground font-light">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">✦</span> Invisible finish — zero residue on blonde & highlighted hair
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">✦</span> Same argan + amino acid bonding complex
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">✦</span> Heat protection up to 230°C
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">✦</span> Ideal for fine, thin, or color-treated strands
              </li>
            </ul>

            <a
              href="https://hairlibrary.co/product/argan-bonding-oil/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-xs tracking-[0.15em] uppercase font-medium hover:bg-primary/90 transition-colors"
            >
              Order Light Shade <ArrowRight size={14} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LightShadeSection;
