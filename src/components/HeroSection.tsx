const productHero = '/images/product-hero.jpeg';

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left — Content */}
      <div className="flex flex-col justify-center px-8 md:px-16 lg:px-20 py-24 lg:py-0 bg-background relative z-10">
        <div className="max-w-lg animate-hero-fade-in">
          {/* Decorative brand mark */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-[1px] bg-primary" />
            <p className="text-xs tracking-[0.3em] uppercase text-primary">
              The Golden Haira™
            </p>
          </div>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground leading-[0.95] mb-6">
            Restore.
            <br />
            Strengthen.
            <br />
            <span className="italic text-primary">Elevate.</span>
          </h1>

          <p className="font-serif text-lg text-primary/80 italic mb-6">
            Argan Bonding Oil
          </p>

          <p className="text-muted-foreground text-sm md:text-base font-light leading-relaxed max-w-md mb-10">
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
              className="inline-flex items-center px-8 py-4 border border-foreground/30 text-foreground text-xs tracking-[0.15em] uppercase font-medium hover:bg-foreground/10 transition-colors"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </div>

      {/* Right — Full-bleed image */}
      <div className="relative min-h-[50vh] lg:min-h-screen overflow-hidden">
        <img
          src={productHero}
          alt="Golden Haira Argan Bonding Oil"
          width={960}
          height={1920}
          className="absolute inset-0 w-full h-full object-cover object-center animate-hero-zoom"
          fetchPriority="high"
          decoding="sync"
        />
      </div>
    </section>
  );
};

export default HeroSection;
