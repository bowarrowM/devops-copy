'use client';

import { LanguageProvider } from '@/lib/context/LanguageContext';
import NavbarModern from '@/components/NavbarModern';
import HeroModern from '@/components/HeroModern';
import SocialProof from '@/components/SocialProof';
import ClientLogos from '@/components/ClientLogos';
import Services from '@/components/Services';
import WhyChooseUsModern from '@/components/WhyChooseUsModern';
import FeaturedCaseStudy from '@/components/FeaturedCaseStudy';
import Statistics from '@/components/Statistics';
import TechStack from '@/components/TechStack';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';

/**
 * Home Page - 2025 Redesign
 *
 * Complete structure (Phases 3-7):
 * 1. Modern Hero - Simplified, conversion-focused
 * 2. Social Proof - Quick stats, testimonial, trust badges
 * 3. Client Logos - Companies + certifications (Phase 7)
 * 4. Services - Complete service portfolio
 * 5. Why Choose Us - Before/After framework
 * 6. Featured Case Study - Real success story with metrics (Phase 6)
 * 7. Statistics - Animated counters with impressive metrics (Phase 7)
 * 8. Tech Stack - Technologies showcase
 * 9. About - Company advantages
 * 10. Testimonials - Client reviews
 * 11. Contact - Lead capture form with email integration (Phase 8)
 * 12. Footer - Links and information
 *
 * All components optimized for conversion and credibility.
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
