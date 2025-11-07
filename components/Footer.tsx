'use client';

import { useLanguage } from '@/lib/context/LanguageContext';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container-custom px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-12 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              DevOps
            </h3>
            <p className="text-neutral-400 mb-4">
              {t.footer.tagline}
            </p>
            <div className="space-y-3 mt-6">
              <div className="flex items-center gap-3 text-neutral-400">
                <FaEnvelope className="w-4 h-4" />
                <a href="mailto:info@devops.com.tr" className="hover:text-primary-400 transition-colors">
                  info@devops.com.tr
                </a>
              </div>
              <div className="flex gap-3 mt-4">
                <a
                  href="https://linkedin.com/company/devops-comtr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-primary-500 flex items-center justify-center transition-all transform hover:-translate-y-1"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/devopscomtr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-primary-500 flex items-center justify-center transition-all transform hover:-translate-y-1"
                  aria-label="GitHub"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-lg mb-4">{t.footer.legal}</h4>
            <ul className="space-y-2 text-neutral-400">
              <li><a href="/privacy" className="hover:text-primary-400 transition-colors">{t.footer.privacyPolicy}</a></li>
              <li><a href="/terms" className="hover:text-primary-400 transition-colors">{t.footer.termsOfService}</a></li>
              <li><a href="/kvkk" className="hover:text-primary-400 transition-colors">{t.footer.kvkkPolicy}</a></li>
              <li><a href="/cookies" className="hover:text-primary-400 transition-colors">{t.footer.cookiePolicy}</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 pt-8 mt-8">
          <div className="text-center">
            <p className="text-neutral-400 text-sm">
              © {new Date().getFullYear()} DevOps
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
