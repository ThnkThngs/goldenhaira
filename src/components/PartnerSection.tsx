import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';

const partnerCards = [
  { title: 'Salon-Exclusive', desc: 'This product is strictly a salon-exclusive retail product, elevating your brand positioning.' },
  { title: 'Protected Margins', desc: 'Exclusivity protects you from price wars and prevents online price bullying.' },
  { title: 'Easy Retail Add-On', desc: 'Lightweight finishing oil is an effortless add-on during blow-dry that clients love.' },
  { title: 'Strong Repeat Rate', desc: 'Clients come back for the results — building trust and driving consistent retail revenue.' },
];

const PartnerSection = () => {
  return (
    <section id="partner" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">For Salons</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Partner With Us</h2>
          <p className="text-muted-foreground font-light max-w-xl mx-auto">
            We invite selected salons to carry The Golden Haira™ Argan Bonding Oil.
            Premium results for your clients. Sustainable profitability for your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {partnerCards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 border border-border/50 bg-background hover:border-primary/40 transition-all"
            >
              <h3 className="font-serif text-lg text-foreground mb-2">{card.title}</h3>
              <p className="text-sm text-muted-foreground font-light">{card.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Pricing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 border border-primary/20 bg-background mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Why Salons Love Golden Haira™</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3 text-sm text-muted-foreground font-light">
              <p>✦ Strong retail repeat rate</p>
              <p>✦ Easy add-on during blow-dry</p>
              <p>✦ Healthy, protected margins</p>
              <p>✦ No online price competition</p>
            </div>
            <div className="flex items-center">
              <p className="text-muted-foreground font-light text-sm leading-relaxed">
                At an MSRP of RM125.00 per bottle, The Golden Haira™ offers salon-exclusive
                distribution with stable, protected margins — no online price wars.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 border border-primary/20 bg-background text-center"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Get In Touch</p>
          <h3 className="font-serif text-2xl text-foreground mb-2">Tengku Sayed Halim</h3>
          <p className="text-sm text-muted-foreground font-light mb-6">Business Development Executive</p>
          <div className="flex items-center justify-center gap-6">
            <a
              className="inline-flex items-center gap-2 border border-border/50 text-sm text-foreground hover:border-primary/40 transition-colors py-3 px-4"
              href="tel:+60176662806"
            >
              <Phone size={16} /> +60176662806
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 py-3 px-4 bg-primary text-primary-foreground text-sm hover:bg-primary/90 transition-colors"
              href="https://wa.me/60176662806"
            >
              <MessageCircle size={16} /> WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnerSection;
