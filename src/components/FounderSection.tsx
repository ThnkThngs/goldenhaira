import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import founderImg from '@/assets/founder.png';

const FounderSection = () => {
  return (
    <section id="story" className="py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Photo */}
          <div className="relative">
            <div className="aspect-[3/4] bg-muted overflow-hidden">
              <img
                alt="Bambang Soteto — Founder"
                className="w-full h-full object-cover object-top"

                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 576px" src="/lovable-uploads/674b2c2e-9654-4807-bfce-3f3ec1ab64c8.png" />

            </div>
          </div>

          {/* Info */}
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-2">Founder & Creator</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">Bambang Soteto</h2>
            <p className="text-muted-foreground font-light leading-relaxed mb-8">
              Crafted by Master Hair Stylist Bambang Soteto, leveraging over 20 years of professional
              experience in the hair industry, combined with his background in Chemical Engineering.
            </p>
            <blockquote className="border-l-2 border-primary pl-6 mb-8">
              <p className="font-serif text-lg italic text-foreground leading-relaxed">
                "Luxury is in the details — especially in your hair."
              </p>
            </blockquote>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle size={16} className="text-primary" />
              Designed for professional performance
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

};

export default FounderSection;