import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    salon: 'Hairkunst Salon',
    location: 'Kuala Lumpur',
    quote: 'Clients immediately feel the softness after blow-dry. It\'s become our go-to finishing oil.',
  },
  {
    salon: 'Dashing Diva',
    location: 'Petaling Jaya',
    quote: 'Perfect retail product — lightweight but powerful. Clients keep coming back for it.',
  },
  {
    salon: 'Hairlibrary',
    location: 'Damansara',
    quote: 'Best finishing oil for chemically treated hair. Noticeably stronger, shinier results.',
  },
];

const SocialProof = () => {
  return (
    <section id="testimonials" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Trusted By Salons</p>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground">
            What Stylists Are Saying
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.salon}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.12 }}
              className="border border-border/50 bg-background p-8 flex flex-col gap-4"
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-foreground leading-relaxed italic">"{t.quote}"</p>
              <div className="mt-auto pt-4 border-t border-border/50">
                <p className="text-sm font-medium text-foreground">{t.salon}</p>
                <p className="text-xs text-muted-foreground">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
