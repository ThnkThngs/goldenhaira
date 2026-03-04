import { motion } from 'framer-motion';
import { Droplet, Award, Sparkles, Shield } from 'lucide-react';

const benefits = [
  {
    icon: Droplet,
    title: 'Pure Argan Oil',
    desc: 'Rich in antioxidants and essential fatty acids to deeply nourish, restore elasticity and enhance natural shine.',
  },
  {
    icon: Award,
    title: 'Fortified Amino Acids',
    desc: 'Help reinforce weakened internal bonds and improve hair strength after chemical treatments.',
  },
  {
    icon: Sparkles,
    title: 'Cyclopentasiloxane',
    desc: 'Delivers instant smoothness, reduces frizz and creates a silky, lightweight finish.',
  },
  {
    icon: Shield,
    title: 'Heat Protection',
    desc: 'Protects hair from styling tools while maintaining softness and movement.',
  },
];

const BenefitsGrid = () => {
  return (
    <section id="benefits" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            Premium Ingredients,{' '}
            <span className="italic text-primary">Visible Results.</span>
          </h2>
          <p className="text-muted-foreground font-light max-w-xl mx-auto">
            Formulated with fortified amino acids to reconstruct from within, delivering a lightweight,
            non-greasy, salon-approved finish.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-8 border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-lg"
            >
              <div className="w-12 h-12 flex items-center justify-center border border-primary/30 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                <benefit.icon size={20} />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsGrid;
