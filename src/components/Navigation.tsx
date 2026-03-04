import { useState, useRef, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#product', label: 'Product' },
  { href: '#benefits', label: 'Ingredients' },
  { href: '#story', label: 'Our Story' },
  { href: '#partner', label: 'Partner' },
  { href: 'https://hairlibrary.co/product/argan-bonding-oil/', label: 'Order', external: true },
];

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [menuHeight, setMenuHeight] = useState(0);

  useEffect(() => {
    if (isMenuOpen && menuRef.current) {
      setMenuHeight(menuRef.current.scrollHeight);
    } else {
      setMenuHeight(0);
    }
  }, [isMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="font-serif text-lg tracking-[0.15em] text-foreground">
            THE GOLDEN HAIRA
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="text-xs tracking-[0.2em] uppercase text-foreground/60 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        ref={menuRef}
        className="md:hidden overflow-hidden bg-background border-b border-border/30 transition-all duration-300 ease-in-out"
        style={{
          maxHeight: menuHeight,
          opacity: isMenuOpen ? 1 : 0,
        }}
      >
        <div className="flex flex-col px-6 py-4 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              onClick={() => setIsMenuOpen(false)}
              className="text-xs tracking-[0.2em] uppercase text-foreground/60 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
