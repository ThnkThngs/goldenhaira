import { motion } from 'framer-motion';
import { MousePointerClick, Sparkles, TrendingUp, ChevronRight, ChevronDown } from 'lucide-react';

const steps = [
  {
    icon: MousePointerClick,
    title: 'Choose Your AI Tool',
    description: 'Pick from our suite of AI-powered salon tools tailored to your needs.',
  },
  {
    icon: Sparkles,
    title: 'Get Personalized Insights',
    description: 'Receive data-driven recommendations for products, routines, and strategy.',
  },
  {
    icon: TrendingUp,
    title: 'Grow Your Salon',
    description: 'Turn insights into action — boost revenue, retention, and client satisfaction.',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">How It Works</p>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground">
            Three Steps to Smarter Styling
          </h2>
        </motion.div>

        {/* Desktop layout */}
        <div className="hidden md:block">
          <div className="relative grid grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={step.title} className="relative flex flex-col items-center text-center">
                {/* Step circle */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  whileHover={{ scale: 1.08 }}
                  className="relative z-10 mb-6"
                >
                  <div className="w-32 h-32 rounded-full border border-border bg-card flex items-center justify-center transition-all duration-300 hover:border-primary hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.3)]">
                    <step.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                  </div>
                  {/* Numbered badge */}
                  <span className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-semibold flex items-center justify-center shadow-md">
                    {i + 1}
                  </span>
                </motion.div>

                {/* Connector + arrow (between steps only) */}
                {i < steps.length - 1 && (
                  <div className="absolute top-16 left-[60%] right-[-40%] flex items-center z-0">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 + i * 0.2 }}
                      className="flex-1 origin-left border-t-2 border-dashed border-primary/40"
                    />
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.8 + i * 0.2 }}
                    >
                      <ChevronRight className="w-5 h-5 text-primary/60 -ml-1" />
                    </motion.div>
                  </div>
                )}

                {/* Text */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.2 }}
                >
                  <h3 className="font-serif text-xl text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile layout with vertical connectors */}
        <div className="md:hidden flex flex-col items-center gap-0">
          {steps.map((step, i) => (
            <div key={step.title} className="flex flex-col items-center text-center">
              {/* Step circle */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative mb-4"
              >
                <div className="w-28 h-28 rounded-full border border-border bg-card flex items-center justify-center transition-all duration-300 hover:border-primary hover:shadow-[0_0_24px_-5px_hsl(var(--primary)/0.3)]">
                  <step.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                </div>
                <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-semibold flex items-center justify-center shadow-md">
                  {i + 1}
                </span>
              </motion.div>

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.15 }}
                className="mb-2"
              >
                <h3 className="font-serif text-lg text-foreground mb-1">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </motion.div>

              {/* Vertical connector */}
              {i < steps.length - 1 && (
                <div className="flex flex-col items-center my-3">
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.15 }}
                    className="w-px h-10 border-l-2 border-dashed border-primary/40 origin-top"
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.5 + i * 0.15 }}
                  >
                    <ChevronDown className="w-4 h-4 text-primary/60 -mt-1" />
                  </motion.div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
