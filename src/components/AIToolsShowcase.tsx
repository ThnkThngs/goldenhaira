import { motion } from 'framer-motion';
import { FlaskConical, MessageCircle, Blend, BarChart3, PenLine } from 'lucide-react';

const tools = [
  {
    icon: FlaskConical,
    title: 'AI Mixologist',
    description: 'Build personalised product routines based on hair type and goals.',
    href: '#routine',
  },
  {
    icon: MessageCircle,
    title: 'AI Expert',
    description: 'Get instant, science-backed answers to any hair care question.',
    href: '#expert',
  },
  {
    icon: Blend,
    title: 'AI Cocktailing Guide',
    description: 'Discover powerful product combinations for every client need.',
    href: '#cocktailing',
  },
  {
    icon: BarChart3,
    title: 'AI Salon Strategist',
    description: 'Unlock growth tactics and business insights for your salon.',
    href: '#partner',
  },
  {
    icon: PenLine,
    title: 'AI Marketing Suite',
    description: 'Generate ready-to-post social content that drives bookings.',
    href: '#partner',
  },
];

const AIToolsShowcase = () => {
  return (
    <section id="ai-tools" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">AI-Powered Suite</p>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-4">
            Your Salon's Secret Weapon
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-sm leading-relaxed">
            Five intelligent tools designed to help you sell smarter, style better, and grow faster.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, i) => (
            <motion.a
              key={tool.title}
              href={tool.href}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group border border-border hover:border-primary/50 bg-card p-8 flex flex-col gap-4 transition-colors"
            >
              <tool.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
              <h3 className="font-serif text-lg text-foreground group-hover:text-primary transition-colors">
                {tool.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{tool.description}</p>
              <span className="mt-auto text-xs tracking-[0.15em] uppercase text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Try It →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIToolsShowcase;
