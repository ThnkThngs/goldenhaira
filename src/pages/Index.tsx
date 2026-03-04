import { lazy, Suspense } from 'react';
import Navigation from '@/components/Navigation';
import Marquee from '@/components/Marquee';
import ClickSpark from '@/components/ClickSpark';
import HeroSection from '@/components/HeroSection';

const FloatingOrderButton = lazy(() => import('@/components/FloatingOrderButton'));
const ProductShowcase = lazy(() => import('@/components/ProductShowcase'));
const BenefitsGrid = lazy(() => import('@/components/BenefitsGrid'));
const ImageGrid = lazy(() => import('@/components/ImageGrid'));
const SocialProof = lazy(() => import('@/components/SocialProof'));
const FounderSection = lazy(() => import('@/components/FounderSection'));
const PartnerSection = lazy(() => import('@/components/PartnerSection'));
const FAQSection = lazy(() => import('@/components/FAQSection'));
const CTABanner = lazy(() => import('@/components/CTABanner'));
const Footer = lazy(() => import('@/components/Footer'));

const Index = () => {
  return (
    <>
      <ClickSpark />
      <Navigation />
      <HeroSection />
      <Marquee />
      <div className="below-fold">
        <Suspense fallback={null}>
          <ProductShowcase />
          <BenefitsGrid />
          <ImageGrid />
          <SocialProof />
          <FounderSection />
          <PartnerSection />
          <FAQSection />
          <CTABanner />
          <Footer />
        </Suspense>
      </div>
      <Suspense fallback={null}>
        <FloatingOrderButton />
      </Suspense>
    </>
  );
};

export default Index;
