import { Instagram, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-16 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-serif text-xl mb-4">THE GOLDEN HAIRA</h3>
            <p className="text-background/60 text-sm font-light leading-relaxed">
              Premium argan bonding oil, formulated in France. Exclusively available through
              selected salon partners.
            </p>
          </div>
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <a href="#product" className="text-sm text-background/60 hover:text-primary transition-colors">Product</a>
              <a href="#benefits" className="text-sm text-background/60 hover:text-primary transition-colors">Benefits</a>
              <a href="#story" className="text-sm text-background/60 hover:text-primary transition-colors">Our Story</a>
              <a href="#partner" className="text-sm text-background/60 hover:text-primary transition-colors">Partner With Us</a>
            </div>
          </div>
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase mb-4">Connect</h4>
            <p className="text-sm text-background/80 font-medium mb-1">Tengku Sayed Halim</p>
            <p className="text-xs text-background/50 mb-3">Business Development Executive</p>
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/goldenhaira.co/" target="_blank" rel="noopener noreferrer" className="text-background/60 hover:text-primary transition-colors" aria-label="Follow us on Instagram">
                <Instagram size={20} />
              </a>
              <a href="tel:+60176662806" className="text-background/60 hover:text-primary transition-colors" aria-label="Call us">
                <Phone size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-background/10 pt-8 text-center">
          <p className="text-xs text-background/60">
            © {new Date().getFullYear()} The Golden Haira. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
