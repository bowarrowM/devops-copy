'use client';

import dynamic from 'next/dynamic';
import { LanguageProvider } from '@/lib/context/LanguageContext';
import NavbarModern from '@/components/NavbarModern';
import HeroModern from '@/components/HeroModern';
import Services from '@/components/Services';
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
 * Home Page - Professional Corporate Website
 *
 * Clean, professional structure:
 * 1. Hero - Value proposition
 * 2. Services - DevOps, LLMOps, GitOps consulting
 * 3. Tech Stack - Technologies and platforms
 * 4. About - Company expertise
 * 5. Contact - Lead capture
 * 6. Footer - Information
 *
 * No marketing hype, no fake metrics, no packages.
 * Professional corporate presentation only.
 */
export default function Home() {
  return (
    <LanguageProvider locale="tr">
      <StructuredData />
      <main className="min-h-screen">
        <NavbarModern />
        <HeroModern />
        <About />
        <Services />
        <TechStack />


        <Contact />
        <Footer />
      </main>
    </LanguageProvider>
  );
}
