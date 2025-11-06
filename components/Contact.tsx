'use client';

import { useLanguage } from '@/lib/context/LanguageContext';
import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

export default function Contact() {
  const { t, locale } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!consent) {
      alert(t.contact.form.consentRequired);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          consent,
          locale,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: '',
        });
        setConsent(false);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Service options based on translations
  const serviceOptions = [
    { value: 'assessment', label: t.services.items.assessment.title },
    { value: 'cicd', label: t.services.items.cicd.title },
    { value: 'cloud', label: t.services.items.cloudMigration.title },
    { value: 'kubernetes', label: t.services.items.kubernetes.title },
    { value: 'iac', label: t.services.items.iac.title },
    { value: 'devsecops', label: t.services.items.devsecops.title },
    { value: 'platform', label: t.services.items.platform.title },
    { value: 'aiops', label: t.services.items.aiops.title },
    { value: 'finops', label: t.services.items.finops.title },
    { value: 'managed', label: t.services.items.managed.title },
  ];

  // Use translation system for labels
  const contactLabels = t.contact.labels;

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-secondary-50 to-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">{t.contact.title}</h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-secondary-700 mb-2">
                  {t.contact.form.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-secondary-200 focus:border-primary-500 focus:outline-none transition-colors"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-secondary-700 mb-2">
                    {t.contact.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-secondary-200 focus:border-primary-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-secondary-700 mb-2">
                    {t.contact.form.phone}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-secondary-200 focus:border-primary-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-secondary-700 mb-2">
                  {t.contact.form.company}
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-secondary-200 focus:border-primary-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-secondary-700 mb-2">
                  {t.contact.form.service}
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-secondary-200 focus:border-primary-500 focus:outline-none transition-colors"
                >
                  <option value="">{t.contact.form.selectPlaceholder}</option>
                  {serviceOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-secondary-700 mb-2">
                  {t.contact.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-secondary-200 focus:border-primary-500 focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>

              {/* Consent Checkbox */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="consent"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-1 w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="consent" className="text-sm text-secondary-600">
                  {t.contact.form.consent}
                </label>
              </div>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <FaCheckCircle className="text-green-600 text-xl flex-shrink-0" />
                  <p className="text-green-800 text-sm">{t.contact.form.success}</p>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <FaExclamationCircle className="text-red-600 text-xl flex-shrink-0" />
                  <p className="text-red-800 text-sm">{t.contact.form.error}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? t.contact.form.submitting : t.contact.form.submit}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Info Cards */}
            <div className="card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white flex-shrink-0">
                  <FaMapMarkerAlt className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-secondary-900 mb-1">{contactLabels.address}</h3>
                  <p className="text-secondary-600">{t.contact.info.address}</p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white flex-shrink-0">
                  <FaEnvelope className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-secondary-900 mb-1">{contactLabels.email}</h3>
                  <a href={`mailto:${t.contact.info.email}`} className="text-primary-600 hover:text-primary-700 transition-colors">
                    {t.contact.info.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white flex-shrink-0">
                  <FaPhone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-secondary-900 mb-1">{contactLabels.phone}</h3>
                  <a href={`tel:${t.contact.info.phone}`} className="text-primary-600 hover:text-primary-700 transition-colors">
                    {t.contact.info.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="card bg-gradient-to-br from-secondary-900 to-secondary-800">
              <h3 className="font-bold text-white mb-4">{contactLabels.social}</h3>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all transform hover:-translate-y-1"
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all transform hover:-translate-y-1"
                >
                  <FaGithub className="w-6 h-6" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all transform hover:-translate-y-1"
                >
                  <FaTwitter className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Call to Action */}
            <div className="card bg-gradient-to-r from-primary-500 to-primary-600 text-white">
              <h3 className="text-2xl font-bold mb-3">{contactLabels.freeConsulting}</h3>
              <p className="text-white/90 mb-4">
                {contactLabels.consultingDesc}
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>{contactLabels.benefit1}</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>{contactLabels.benefit2}</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>{contactLabels.benefit3}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
