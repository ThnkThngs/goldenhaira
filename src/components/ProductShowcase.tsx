import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Droplet, Shield, Sparkles } from 'lucide-react';
import productHero from '@/assets/product-hero.jpeg';
import product1 from '@/assets/product-1.jpeg';
import product2 from '@/assets/product-2.jpeg';
import productHand from '@/assets/product-hand.jpeg';
import productFront from '@/assets/product-front.jpeg';
import productBack from '@/assets/product-back.jpeg';
import productPair from '@/assets/product-pair.jpeg';

type MediaItem = { type: 'image'; src: string; thumb: string; alt: string } | { type: 'video'; src: string; alt: string };

const galleryMedia: MediaItem[] = [
  { type: 'video', src: '/videos/product-video-1.mp4', alt: 'Product video 1' },
  { type: 'image', src: productHero, thumb: '/thumbs/hero-sm.webp', alt: 'Product hero shot' },
  { type: 'video', src: '/videos/product-video-2.mp4', alt: 'Product video 2' },
  { type: 'image', src: product1, thumb: '/thumbs/1-sm.webp', alt: 'Product with packaging' },
  { type: 'image', src: product2, thumb: '/thumbs/2-sm.webp', alt: 'Product alternate angle' },
  { type: 'image', src: productHand, thumb: '/thumbs/hand-sm.webp', alt: 'Product in hand' },
  { type: 'image', src: productFront, thumb: '/thumbs/front-sm.webp', alt: 'Product front view' },
  { type: 'image', src: productBack, thumb: '/thumbs/back-sm.webp', alt: 'Product back label' },
  { type: 'image', src: productPair, thumb: '/thumbs/pair-sm.webp', alt: 'Bottle and tube together' },
];

const benefitIcons = [
  { icon: Droplet, label: 'Deep Nourish' },
  { icon: Shield, label: 'Heat Shield' },
  { icon: Sparkles, label: 'Instant Shine' },
];

const ProductShowcase = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [isNearViewport, setIsNearViewport] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const current = galleryMedia[activeImage];

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsNearViewport(true);
          observer.disconnect();
        }
      },
      { rootMargin: '300px 0px' }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="product" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <div className="relative aspect-[3/4] bg-background mb-4 overflow-hidden">
              {current.type === 'video' ? (
                <video
                  src={isNearViewport ? current.src : undefined}
                  autoPlay={isNearViewport}
                  loop
                  muted
                  playsInline
                  preload="none"
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={current.src}
                  alt={current.alt}
                  width={720}
                  height={960}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            {/* Thumbnails */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {galleryMedia.map((media, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  aria-label={`View product image ${idx + 1}`}
                  className={`relative w-16 h-20 flex-shrink-0 overflow-hidden transition-all duration-300 ${
                    activeImage === idx
                      ? 'border-2 border-primary opacity-100'
                      : 'border border-border/50 opacity-60 hover:opacity-100'
                  }`}
                >
                  {media.type === 'video' ? (
                    <div className="w-full h-full bg-muted flex items-center justify-center">
                      <span className="text-primary text-lg">▶</span>
                    </div>
                  ) : (
                    <img src={media.thumb} alt={media.alt} className="w-full h-full object-cover" loading="lazy" sizes="64px" width={64} height={80} />
                  )}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.15 }}
            className="flex flex-col justify-center"
          >
            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-2">The Golden Haira™</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">Argan Bonding Oil</h2>

            {/* Benefit icons row */}
            <div className="flex gap-6 mb-6">
              {benefitIcons.map((b) => (
                <div key={b.label} className="flex items-center gap-2 text-muted-foreground">
                  <b.icon size={16} className="text-primary" />
                  <span className="text-xs tracking-wider uppercase">{b.label}</span>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground font-light leading-relaxed mb-4">
              A professional finishing oil designed to repair internal hair bonds, restore softness,
              and deliver long-lasting shine — without weight or grease.
            </p>

            <ul className="space-y-2 mb-6 text-sm text-muted-foreground font-light">
              <li className="flex items-start gap-2"><span className="text-primary mt-0.5">✦</span> Repairs internal bonds damaged by chemicals & heat</li>
              <li className="flex items-start gap-2"><span className="text-primary mt-0.5">✦</span> Lightweight, non-greasy salon-approved formula</li>
              <li className="flex items-start gap-2"><span className="text-primary mt-0.5">✦</span> Fortified with amino acids & pure argan oil</li>
              <li className="flex items-start gap-2"><span className="text-primary mt-0.5">✦</span> Heat protection up to 230°C</li>
            </ul>

            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {['Dry Hair', 'Chemically Treated', 'Color-Treated', 'Heat-Damaged'].map((item) => (
                  <span key={item} className="px-3 py-1 border border-primary/30 text-xs tracking-wider text-primary">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Pricing */}
            <div className="mb-8">
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
                Pricing (50ml)
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: 'WM', price: 'RM 125' },
                  { label: 'EM', price: 'RM 135' },
                  { label: 'SGD', price: '$38' },
                ].map((item) => (
                  <div key={item.label} className="text-center p-4 border border-border/50 bg-background">
                    <p className="text-xs tracking-[0.2em] text-muted-foreground mb-1">{item.label}</p>
                    <p className="font-serif text-xl text-foreground">{item.price}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://hairlibrary.co/product/argan-bonding-oil/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-xs tracking-[0.15em] uppercase font-medium hover:bg-primary/90 transition-colors"
              >
                Order Now <ArrowRight size={14} />
              </a>
              <a
                href="#partner"
                className="inline-flex items-center gap-2 px-6 py-3 border border-foreground/30 text-foreground text-xs tracking-[0.15em] uppercase font-medium hover:bg-foreground/10 transition-colors"
              >
                Find a Salon <ArrowRight size={14} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
