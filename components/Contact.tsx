'use client';

import { useLanguage } from '@/lib/context/LanguageContext';
import { FaEnvelope, FaCalendarAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const CALENDLY_URL = 'https://calendly.com/devops-info/30min';

export default function Contact() {
  const { t } = useLanguage();

  const contactLabels = t.contact.labels;

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-neutral-50 to-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">{t.contact.title}</h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Calendly CTA Card */}
          <div className="card bg-gradient-to-br from-primary-500 to-primary-600 text-white p-12 mb-12 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <FaCalendarAlt className="w-10 h-10" />
              </div>
            </div>

            <h3 className="text-3xl font-bold mb-4">{contactLabels.freeConsulting}</h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              {contactLabels.consultingDesc}
            </p>

            <ul className="space-y-3 mb-10 text-left max-w-md mx-auto">
              <li className="flex items-center gap-3">
                <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-lg">{contactLabels.benefit1}</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-lg">{contactLabels.benefit2}</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-lg">{contactLabels.benefit3}</span>
              </li>
            </ul>

            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-primary-600 rounded-lg font-bold text-lg hover:bg-neutral-50 transition-all transform hover:scale-105 shadow-2xl"
            >
              <FaCalendarAlt className="w-5 h-5" />
              {t.contact.form.scheduleCall}
            </a>
          </div>

          {/* Contact Info Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white flex-shrink-0">
                  <FaEnvelope className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-neutral-900 mb-1">{contactLabels.email}</h3>
                  <a href={`mailto:${t.contact.info.email}`} className="text-primary-600 hover:text-primary-700 transition-colors">
                    {t.contact.info.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white flex-shrink-0">
                  <FaCalendarAlt className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-neutral-900 mb-1">{contactLabels.social}</h3>
                  <div className="flex gap-3 mt-2">
                    <a
                      href="https://linkedin.com/company/devops-comtr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-neutral-100 hover:bg-primary-500 hover:text-white flex items-center justify-center text-neutral-600 transition-all"
                    >
                      <FaLinkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="https://github.com/devopscomtr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-neutral-100 hover:bg-neutral-900 hover:text-white flex items-center justify-center text-neutral-600 transition-all"
                    >
                      <FaGithub className="w-5 h-5" />
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-neutral-100 hover:bg-blue-400 hover:text-white flex items-center justify-center text-neutral-600 transition-all"
                    >
                      <FaTwitter className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
