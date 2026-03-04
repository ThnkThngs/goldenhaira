import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    q: 'What hair types is this oil suitable for?',
    a: 'Golden Haira Argan Bonding Oil works on all hair types - straight, wavy, curly and coily. It is especially effective for chemically treated, color-treated and heat-damaged hair.',
  },
  {
    q: 'How do I use the bonding oil?',
    a: 'Apply 2-3 drops to damp or dry hair, focusing on mid-lengths and ends. Can be used as a finishing oil after blow-dry or as a pre-styling heat protectant.',
  },
  {
    q: 'Is the oil greasy or heavy?',
    a: 'No. The lightweight Cyclopentasiloxane base evaporates cleanly, leaving a silky, non-greasy finish with no product buildup.',
  },
  {
    q: 'Can I use it with other styling products?',
    a: 'Absolutely. It layers beautifully under or over other styling products and will not interfere with hold or volume.',
  },
  {
    q: 'Where can I purchase this product?',
    a: 'Golden Haira is salon-exclusive. Visit one of our partner salons or order online through Hair Library.',
  },
];

const FAQSection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">FAQ</p>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground">
            Common Questions
          </h2>
        </motion.div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`faq-${idx}`} className="border-border/50">
              <AccordionTrigger className="text-left text-foreground text-sm font-medium tracking-wide hover:no-underline hover:text-primary py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-light leading-relaxed text-sm">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
