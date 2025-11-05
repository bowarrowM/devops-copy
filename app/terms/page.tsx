'use client';

import { LanguageProvider } from '@/lib/context/LanguageContext';
import Navbar from '@/components/Navbar';
import LegalPage from '@/components/LegalPage';
import Footer from '@/components/Footer';

export default function TermsPage() {
  return (
    <LanguageProvider locale="tr">
      <main className="min-h-screen">
        <Navbar />
        <LegalPage type="terms" />
        <Footer />
      </main>
    </LanguageProvider>
  );
}
