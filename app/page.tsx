'use client';

import { LanguageProvider } from '@/lib/context/LanguageContext';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';

export default function Home() {
  return (
    <LanguageProvider>
      <StructuredData />
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <Services />
        <WhyChooseUs />
        <About />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </LanguageProvider>
  );
}
