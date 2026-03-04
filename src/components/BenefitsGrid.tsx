import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import productHand from '@/assets/product-hand.jpeg';

const benefits = [
  {
    id: 'argan',
    title: 'Pure Argan Oil',
    desc: 'Rich in antioxidants and essential fatty acids to deeply nourish, restore elasticity and enhance natural shine. Sourced from Morocco and cold-pressed to preserve maximum potency.',
  },
  {
    id: 'amino',
    title: 'Fortified Amino Acids',
    desc: 'Help reinforce weakened internal bonds and improve hair strength after chemical treatments. Our proprietary blend targets the cortex layer for lasting structural repair.',
  },
  {
    id: 'siloxane',
    title: 'Cyclopentasiloxane',
    desc: 'Delivers instant smoothness, reduces frizz and creates a silky, lightweight finish. Evaporates cleanly without buildup, leaving hair naturally soft.',
  },
  {
    id: 'heat',
    title: 'Heat Protection',
    desc: 'Protects hair from styling tools up to 230°C while maintaining softness and movement. Forms a breathable thermal shield that locks in moisture during heat styling.',
  },
];

const BenefitsGrid = () => {
  return (
    <section id="benefits" className="py-24 bg-background">
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
              src={productHand}
              alt="Golden Haira product in use"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>

          {/* Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">
              Premium Ingredients
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-8">
              What's Inside
            </h2>

            <Accordion type="single" collapsible defaultValue="argan" className="w-full">
              {benefits.map((b) => (
                <AccordionItem key={b.id} value={b.id} className="border-border/50">
                  <AccordionTrigger className="font-serif text-xl text-foreground hover:no-underline hover:text-primary py-5">
                    {b.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground font-light leading-relaxed text-sm">
                    {b.desc}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsGrid;
