import { lazy, Suspense } from 'react';
import Navigation from '@/components/Navigation';
import Marquee from '@/components/Marquee';
import ClickSpark from '@/components/ClickSpark';
import HeroSection from '@/components/HeroSection';

const FloatingOrderButton = lazy(() => import('@/components/FloatingOrderButton'));

const ProductShowcase = lazy(() => import('@/components/ProductShowcase'));
const BenefitsGrid = lazy(() => import('@/components/BenefitsGrid'));
const SocialProof = lazy(() => import('@/components/SocialProof'));
const FounderSection = lazy(() => import('@/components/FounderSection'));
const PartnerSection = lazy(() => import('@/components/PartnerSection'));
const CTABanner = lazy(() => import('@/components/CTABanner'));
const Footer = lazy(() => import('@/components/Footer'));

const Index = () => {
  return (
    <>
      <ClickSpark />
      <Navigation />
      <Marquee />
      <HeroSection />
      <div className="below-fold">
        <Suspense fallback={null}>
          <ProductShowcase />
          <BenefitsGrid />
          <SocialProof />
          <FounderSection />
          <PartnerSection />
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
