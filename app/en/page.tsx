'use client';

import dynamic from 'next/dynamic';
import { LanguageProvider } from '@/lib/context/LanguageContext';
import NavbarModern from '@/components/NavbarModern';
import HeroModern from '@/components/HeroModern';
import SocialProof from '@/components/SocialProof';

import Services from '@/components/Services';
import WhyChooseUsModern from '@/components/WhyChooseUsModern';


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
        

        {/* Service & Value Proposition */}
        <Services />
        <WhyChooseUsModern />
        
        

        {/* Supporting Information */}
        <TechStack />
        <About />
        
        <Contact />
        <Footer />
      </main>
    </LanguageProvider>
  );
}
