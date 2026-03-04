const productHero = '/images/product-hero.jpeg';

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={productHero}
          alt="Golden Haira Argan Bonding Oil"
          width={960}
          height={1920}
          className="absolute inset-0 w-full h-full object-cover object-center animate-hero-zoom"
          fetchPriority="high"
          decoding="sync"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-background/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-24 w-full">
        <div className="max-w-2xl animate-hero-fade-in">
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-6">
            THE GOLDEN HAIRA™
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground leading-[0.95] mb-4">
            Restore.
            <br />
            Strengthen.
            <br />
            Elevate.
          </h1>
          <p className="font-serif text-xl md:text-2xl text-primary/80 italic mb-8">
            Argan Bonding Oil
          </p>
          <p className="text-muted-foreground text-base md:text-lg font-light leading-relaxed max-w-lg mb-10">
            Professional-grade bonding oil formulated in France.
            Designed to restore strength, smoothness and radiant shine
            for chemically treated and damaged hair.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://hairlibrary.co/product/argan-bonding-oil/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground text-xs tracking-[0.15em] uppercase font-medium hover:bg-primary/90 transition-colors"
            >
              Order Now
            </a>
            <a
              href="#partner"
              className="inline-flex items-center px-8 py-4 border border-foreground text-foreground text-xs tracking-[0.15em] uppercase font-medium hover:bg-foreground hover:text-background transition-colors"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
