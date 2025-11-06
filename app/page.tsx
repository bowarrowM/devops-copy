'use client';

import dynamic from 'next/dynamic';
import { LanguageProvider } from '@/lib/context/LanguageContext';
import NavbarModern from '@/components/NavbarModern';
import HeroModern from '@/components/HeroModern';
import SocialProof from '@/components/SocialProof';
import ClientLogos from '@/components/ClientLogos';
import Services from '@/components/Services';
import WhyChooseUsModern from '@/components/WhyChooseUsModern';
import FeaturedCaseStudy from '@/components/FeaturedCaseStudy';
import Statistics from '@/components/Statistics';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';

// Lazy load below-the-fold components for better performance
const TechStack = dynamic(() => import('@/components/TechStack'), {
  loading: () => <div className="h-96 bg-slate-50 animate-pulse" />,
});

const About = dynamic(() => import('@/components/About'), {
  loading: () => <div className="h-96 bg-white animate-pulse" />,
});

const Testimonials = dynamic(() => import('@/components/Testimonials'), {
  loading: () => <div className="h-96 bg-slate-50 animate-pulse" />,
});

/**
 * Home Page - 2025 Redesign
 *
 * Complete structure (Phases 3-9):
 * 1. Modern Hero - Simplified, conversion-focused
 * 2. Social Proof - Quick stats, testimonial, trust badges
 * 3. Client Logos - Companies + certifications (Phase 7)
 * 4. Services - Complete service portfolio
 * 5. Why Choose Us - Before/After framework
 * 6. Featured Case Study - Real success story with metrics (Phase 6)
 * 7. Statistics - Animated counters with impressive metrics (Phase 7)
 * 8. Tech Stack - Technologies showcase (lazy loaded - Phase 9)
 * 9. About - Company advantages (lazy loaded - Phase 9)
 * 10. Testimonials - Client reviews (lazy loaded - Phase 9)
 * 11. Contact - Lead capture form with email integration (Phase 8)
 * 12. Footer - Links and information
 *
 * Performance optimizations:
 * - Web Vitals monitoring active
 * - Below-the-fold components lazy loaded
 * - Code splitting for optimal bundle sizes
 */
export default function Home() {
  return (
    <LanguageProvider locale="tr">
      <StructuredData />
      <main className="min-h-screen">
        {/* Modern Components - Phase 3-7 */}
        <NavbarModern />
        <HeroModern />
        <SocialProof />
        <ClientLogos />

        {/* Service & Value Proposition */}
        <Services />
        <WhyChooseUsModern />
        <FeaturedCaseStudy />
        <Statistics />

        {/* Supporting Information */}
        <TechStack />
        <About />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </LanguageProvider>
  );
}
