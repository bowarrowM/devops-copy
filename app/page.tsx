'use client';

import { LanguageProvider } from '@/lib/context/LanguageContext';
import NavbarModern from '@/components/NavbarModern';
import HeroModern from '@/components/HeroModern';
import SocialProof from '@/components/SocialProof';
import Services from '@/components/Services';
import WhyChooseUsModern from '@/components/WhyChooseUsModern';
import TechStack from '@/components/TechStack';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';

/**
 * Home Page - 2025 Redesign
 *
 * New structure:
 * 1. Modern Hero - Simplified, conversion-focused
 * 2. Social Proof - Stats, testimonial, trust badges
 * 3. Services - Existing component (will be updated in Phase 4)
 * 4. Why Choose Us - Before/After framework
 * 5. Tech Stack - Existing component
 * 6. About - Existing component
 * 7. Testimonials - Existing component (will be enhanced in Phase 7)
 * 8. Contact - Existing component (will be enhanced in Phase 8)
 * 9. Footer - Existing component
 *
 * Note: We're mixing modern and existing components for a gradual transition.
 * Old components (InteractiveDevOpsFlow, AIFlowPipeline) removed for now - too heavy.
 */
export default function Home() {
  return (
    <LanguageProvider locale="tr">
      <StructuredData />
      <main className="min-h-screen">
        {/* Modern Components */}
        <NavbarModern />
        <HeroModern />
        <SocialProof />

        {/* Existing Components (to be updated in future phases) */}
        <Services />
        <WhyChooseUsModern />
        <TechStack />
        <About />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </LanguageProvider>
  );
}
