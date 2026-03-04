import { motion } from 'framer-motion';

const CTABanner = () => {
  return (
    <section className="py-24 bg-dark-deep text-accent-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}>
          
          <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">
            Experience the Gold Standard in Hair Care
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-sm leading-relaxed mb-10">
            Join the salons already offering Golden Haira™ Argan Bonding Oil to their clients.
            Premium results. Protected margins. Effortless retail.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://hairlibrary.co/product/argan-bonding-oil/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground text-xs tracking-[0.15em] uppercase font-medium hover:bg-primary/90 transition-colors">
              
              Order Now
            </a>
            <a
              href="#partner"
              className="inline-flex items-center px-8 py-4 border border-foreground/30 text-foreground text-xs tracking-[0.15em] uppercase font-medium hover:bg-foreground/10 transition-colors">
              
              Partner With Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>);

};

export default CTABanner;