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
 * English Home Page - 2025 Redesign
 * URL Pattern: /en/
 */
export default function EnglishHome() {
  return (
    <LanguageProvider locale="en">
      <StructuredData />
      <main className="min-h-screen">
        {/* Modern Components - Phase 3-9 */}
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
