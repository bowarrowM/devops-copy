'use client';

import { useLanguage } from '@/lib/context/LanguageContext';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

interface LegalPageProps {
  type: 'privacy' | 'terms' | 'kvkk' | 'cookies';
}

export default function LegalPage({ type }: LegalPageProps) {
  const { t, locale } = useLanguage();
  const content = t.legal[type];
  const currentDate = new Date().toLocaleDateString(locale === 'tr' ? 'tr-TR' : locale === 'de' ? 'de-DE' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const getBackPath = () => {
    if (locale === 'tr') return '/';
    return `/${locale}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary-50 to-white">
      <div className="container-custom py-12 md:py-20">
        {/* Back Button */}
        <Link
          href={getBackPath()}
          className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium mb-8 transition-colors"
        >
          <FaArrowLeft />
          <span>{locale === 'tr' ? 'Ana Sayfaya Dön' : locale === 'de' ? 'Zurück zur Startseite' : 'Back to Home'}</span>
        </Link>

        {/* Page Header */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
            {content.title}
          </h1>
          <p className="text-secondary-600 mb-8">
            {content.lastUpdated}: {currentDate}
          </p>

          {/* Content Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-secondary-700 leading-relaxed mb-8">
                {content.introduction}
              </p>

              {/* Type-specific content */}
              {type === 'privacy' && <PrivacyContent locale={locale} />}
              {type === 'terms' && <TermsContent locale={locale} />}
              {type === 'kvkk' && <KVKKContent locale={locale} />}
              {type === 'cookies' && <CookiesContent locale={locale} />}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="mt-12 p-6 bg-primary-50 rounded-xl border border-primary-200">
            <p className="text-secondary-700">
              {locale === 'tr' ? (
                <>Sorularınız mı var? <a href="mailto:info@devops.com.tr" className="text-primary-600 hover:text-primary-700 font-semibold">info@devops.com.tr</a> adresinden bize ulaşın.</>
              ) : locale === 'de' ? (
                <>Haben Sie Fragen? Kontaktieren Sie uns unter <a href="mailto:info@devops.com.tr" className="text-primary-600 hover:text-primary-700 font-semibold">info@devops.com.tr</a></>
              ) : (
                <>Have questions? Contact us at <a href="mailto:info@devops.com.tr" className="text-primary-600 hover:text-primary-700 font-semibold">info@devops.com.tr</a></>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Privacy Policy Content
function PrivacyContent({ locale }: { locale: string }) {
  if (locale === 'tr') {
    return (
      <>
        <h2>1. Toplanan Bilgiler</h2>
        <p>Web sitemizi ziyaret ettiğinizde aşağıdaki bilgileri toplayabiliriz:</p>
        <ul>
          <li>İsim, e-posta adresi ve telefon numarası gibi iletişim bilgileri</li>
          <li>Şirket bilgileri</li>
          <li>IP adresi ve tarayıcı bilgileri</li>
          <li>Çerez verileri</li>
        </ul>

        <h2>2. Bilgilerin Kullanımı</h2>
        <p>Toplanan bilgiler şu amaçlarla kullanılır:</p>
        <ul>
          <li>Hizmet taleplerinize yanıt vermek</li>
          <li>Teknik destek sağlamak</li>
          <li>Hizmetlerimizi geliştirmek</li>
          <li>Yasal yükümlülükleri yerine getirmek</li>
        </ul>

        <h2>3. Veri Güvenliği</h2>
        <p>Kişisel verilerinizin güvenliğini sağlamak için endüstri standardı güvenlik önlemleri alıyoruz.</p>

        <h2>4. Üçüncü Taraf Paylaşımı</h2>
        <p>Kişisel bilgilerinizi açık rızanız olmadan üçüncü taraflarla paylaşmıyoruz.</p>

        <h2>5. Haklarınız</h2>
        <p>KVKK kapsamında verilerinize erişim, düzeltme ve silme haklarınız bulunmaktadır.</p>
      </>
    );
  } else if (locale === 'de') {
    return (
      <>
        <h2>1. Gesammelte Informationen</h2>
        <p>Wenn Sie unsere Website besuchen, können wir folgende Informationen sammeln:</p>
        <ul>
          <li>Kontaktinformationen wie Name, E-Mail-Adresse und Telefonnummer</li>
          <li>Unternehmensinformationen</li>
          <li>IP-Adresse und Browserinformationen</li>
          <li>Cookie-Daten</li>
        </ul>

        <h2>2. Verwendung der Informationen</h2>
        <p>Die gesammelten Informationen werden für folgende Zwecke verwendet:</p>
        <ul>
          <li>Beantwortung Ihrer Serviceanfragen</li>
          <li>Bereitstellung technischer Unterstützung</li>
          <li>Verbesserung unserer Dienste</li>
          <li>Erfüllung rechtlicher Verpflichtungen</li>
        </ul>

        <h2>3. Datensicherheit</h2>
        <p>Wir ergreifen branchenübliche Sicherheitsmaßnahmen, um die Sicherheit Ihrer persönlichen Daten zu gewährleisten.</p>

        <h2>4. Weitergabe an Dritte</h2>
        <p>Wir geben Ihre persönlichen Daten nicht ohne Ihre ausdrückliche Zustimmung an Dritte weiter.</p>

        <h2>5. Ihre Rechte</h2>
        <p>Im Rahmen der DSGVO haben Sie das Recht auf Zugang, Berichtigung und Löschung Ihrer Daten.</p>
      </>
    );
  } else {
    return (
      <>
        <h2>1. Information Collected</h2>
        <p>When you visit our website, we may collect the following information:</p>
        <ul>
          <li>Contact information such as name, email address, and phone number</li>
          <li>Company information</li>
          <li>IP address and browser information</li>
          <li>Cookie data</li>
        </ul>

        <h2>2. Use of Information</h2>
        <p>The collected information is used for the following purposes:</p>
        <ul>
          <li>Responding to your service requests</li>
          <li>Providing technical support</li>
          <li>Improving our services</li>
          <li>Fulfilling legal obligations</li>
        </ul>

        <h2>3. Data Security</h2>
        <p>We implement industry-standard security measures to ensure the security of your personal data.</p>

        <h2>4. Third-Party Sharing</h2>
        <p>We do not share your personal information with third parties without your explicit consent.</p>

        <h2>5. Your Rights</h2>
        <p>Under GDPR, you have the right to access, correct, and delete your data.</p>
      </>
    );
  }
}

// Terms of Service Content
function TermsContent({ locale }: { locale: string }) {
  if (locale === 'tr') {
    return (
      <>
        <h2>1. Hizmet Kullanımı</h2>
        <p>DevOps.com.tr web sitesini yasal amaçlar için kullanmayı kabul edersiniz.</p>

        <h2>2. Fikri Mülkiyet</h2>
        <p>Web sitesindeki tüm içerik DevOps Ltd. Şti.'nin mülkiyetindedir ve telif hakkı yasaları ile korunmaktadır.</p>

        <h2>3. Sorumluluk Sınırlaması</h2>
        <p>Hizmetlerimizi olduğu gibi sunuyoruz ve herhangi bir garanti vermiyoruz.</p>

        <h2>4. Değişiklikler</h2>
        <p>Bu koşulları önceden haber vermeksizin değiştirme hakkını saklı tutarız.</p>
      </>
    );
  } else if (locale === 'de') {
    return (
      <>
        <h2>1. Nutzung des Dienstes</h2>
        <p>Sie stimmen zu, die Website DevOps.com.tr für rechtmäßige Zwecke zu nutzen.</p>

        <h2>2. Geistiges Eigentum</h2>
        <p>Alle Inhalte auf der Website sind Eigentum von DevOps Ltd. Şti. und durch Urheberrechtsgesetze geschützt.</p>

        <h2>3. Haftungsbeschränkung</h2>
        <p>Wir bieten unsere Dienste wie besehen an und geben keine Garantien.</p>

        <h2>4. Änderungen</h2>
        <p>Wir behalten uns das Recht vor, diese Bedingungen ohne vorherige Ankündigung zu ändern.</p>
      </>
    );
  } else {
    return (
      <>
        <h2>1. Service Usage</h2>
        <p>You agree to use the DevOps.com.tr website for lawful purposes.</p>

        <h2>2. Intellectual Property</h2>
        <p>All content on the website is the property of DevOps Ltd. Şti. and is protected by copyright laws.</p>

        <h2>3. Limitation of Liability</h2>
        <p>We provide our services as is and make no warranties.</p>

        <h2>4. Changes</h2>
        <p>We reserve the right to modify these terms without prior notice.</p>
      </>
    );
  }
}

// KVKK Content
function KVKKContent({ locale }: { locale: string }) {
  if (locale === 'tr') {
    return (
      <>
        <h2>1. Veri Sorumlusu</h2>
        <p>DevOps Ltd. Şti., İstanbul, Türkiye</p>

        <h2>2. İşlenen Kişisel Veriler</h2>
        <ul>
          <li>Kimlik bilgileri (ad, soyad)</li>
          <li>İletişim bilgileri (e-posta, telefon)</li>
          <li>Müşteri işlem bilgileri</li>
          <li>İşlem güvenliği bilgileri</li>
        </ul>

        <h2>3. Kişisel Verilerin İşlenme Amaçları</h2>
        <p>Kişisel verileriniz hizmet sunumu, müşteri ilişkileri yönetimi ve yasal yükümlülüklerin yerine getirilmesi amaçlarıyla işlenmektedir.</p>

        <h2>4. Kişisel Verilerin Aktarılması</h2>
        <p>Verileriniz yalnızca yasal zorunluluklar ve hizmet gereklilikleri doğrultusunda üçüncü taraflara aktarılabilir.</p>

        <h2>5. Kişisel Veri Sahibinin Hakları</h2>
        <ul>
          <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
          <li>İşlenmişse buna ilişkin bilgi talep etme</li>
          <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
          <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme</li>
          <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme</li>
          <li>Verilerin silinmesini veya yok edilmesini isteme</li>
        </ul>

        <h2>6. Başvuru Yöntemi</h2>
        <p>Haklarınızı kullanmak için info@devops.com.tr adresine e-posta gönderebilirsiniz.</p>
      </>
    );
  } else if (locale === 'de') {
    return (
      <>
        <h2>1. Datenverantwortlicher</h2>
        <p>DevOps Ltd. Şti., Istanbul, Türkei</p>

        <h2>2. Verarbeitete personenbezogene Daten</h2>
        <ul>
          <li>Identitätsinformationen (Vorname, Nachname)</li>
          <li>Kontaktinformationen (E-Mail, Telefon)</li>
          <li>Kundentransaktionsinformationen</li>
          <li>Transaktionssicherheitsinformationen</li>
        </ul>

        <h2>3. Zwecke der Verarbeitung personenbezogener Daten</h2>
        <p>Ihre personenbezogenen Daten werden für die Erbringung von Dienstleistungen, die Verwaltung von Kundenbeziehungen und die Erfüllung rechtlicher Verpflichtungen verarbeitet.</p>

        <h2>4. Weitergabe personenbezogener Daten</h2>
        <p>Ihre Daten können nur aufgrund gesetzlicher Verpflichtungen und Serviceanforderungen an Dritte weitergegeben werden.</p>

        <h2>5. Rechte der betroffenen Person</h2>
        <ul>
          <li>Informationen darüber, ob Ihre persönlichen Daten verarbeitet werden</li>
          <li>Informationen darüber anfordern, falls verarbeitet</li>
          <li>Den Zweck der Verarbeitung erfahren und ob sie zweckgemäß verwendet wird</li>
          <li>Die Dritten im In- oder Ausland kennen, an die sie übertragen wird</li>
          <li>Berichtigung verlangen, falls unvollständig oder falsch verarbeitet</li>
          <li>Löschung oder Vernichtung der Daten verlangen</li>
        </ul>

        <h2>6. Bewerbungsmethode</h2>
        <p>Um Ihre Rechte auszuüben, können Sie eine E-Mail an info@devops.com.tr senden.</p>
      </>
    );
  } else {
    return (
      <>
        <h2>1. Data Controller</h2>
        <p>DevOps Ltd. Şti., Istanbul, Turkey</p>

        <h2>2. Personal Data Processed</h2>
        <ul>
          <li>Identity information (name, surname)</li>
          <li>Contact information (email, phone)</li>
          <li>Customer transaction information</li>
          <li>Transaction security information</li>
        </ul>

        <h2>3. Purposes of Processing Personal Data</h2>
        <p>Your personal data is processed for service delivery, customer relationship management, and fulfillment of legal obligations.</p>

        <h2>4. Transfer of Personal Data</h2>
        <p>Your data may only be transferred to third parties in accordance with legal obligations and service requirements.</p>

        <h2>5. Rights of the Data Subject</h2>
        <ul>
          <li>Learn whether your personal data is being processed</li>
          <li>Request information if processed</li>
          <li>Learn the purpose of processing and whether it is used in accordance with its purpose</li>
          <li>Know the third parties to whom it is transferred domestically or abroad</li>
          <li>Request correction if processed incompletely or incorrectly</li>
          <li>Request deletion or destruction of data</li>
        </ul>

        <h2>6. Application Method</h2>
        <p>To exercise your rights, you can send an email to info@devops.com.tr.</p>
      </>
    );
  }
}

// Cookies Policy Content
function CookiesContent({ locale }: { locale: string }) {
  if (locale === 'tr') {
    return (
      <>
        <h2>1. Çerez Nedir?</h2>
        <p>Çerezler, web sitelerinin daha iyi çalışması için cihazınızda saklanan küçük metin dosyalarıdır.</p>

        <h2>2. Kullandığımız Çerez Türleri</h2>
        <ul>
          <li><strong>Zorunlu Çerezler:</strong> Web sitesinin temel işlevleri için gereklidir</li>
          <li><strong>Analitik Çerezler:</strong> Web sitesi kullanımını anlamamıza yardımcı olur</li>
          <li><strong>İşlevsel Çerezler:</strong> Tercihlerinizi hatırlar</li>
        </ul>

        <h2>3. Çerezleri Kontrol Etme</h2>
        <p>Tarayıcı ayarlarınızdan çerezleri yönetebilir veya silebilirsiniz.</p>

        <h2>4. Üçüncü Taraf Çerezler</h2>
        <p>Analitik ve performans ölçümü için Google Analytics gibi üçüncü taraf hizmetler kullanabiliriz.</p>
      </>
    );
  } else if (locale === 'de') {
    return (
      <>
        <h2>1. Was sind Cookies?</h2>
        <p>Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden, damit Websites besser funktionieren.</p>

        <h2>2. Arten von Cookies, die wir verwenden</h2>
        <ul>
          <li><strong>Notwendige Cookies:</strong> Erforderlich für grundlegende Funktionen der Website</li>
          <li><strong>Analytische Cookies:</strong> Helfen uns, die Nutzung der Website zu verstehen</li>
          <li><strong>Funktionale Cookies:</strong> Merken sich Ihre Präferenzen</li>
        </ul>

        <h2>3. Cookies kontrollieren</h2>
        <p>Sie können Cookies über Ihre Browsereinstellungen verwalten oder löschen.</p>

        <h2>4. Drittanbieter-Cookies</h2>
        <p>Wir können Dienste von Drittanbietern wie Google Analytics für Analysen und Leistungsmessungen verwenden.</p>
      </>
    );
  } else {
    return (
      <>
        <h2>1. What are Cookies?</h2>
        <p>Cookies are small text files stored on your device to help websites function better.</p>

        <h2>2. Types of Cookies We Use</h2>
        <ul>
          <li><strong>Essential Cookies:</strong> Required for basic website functions</li>
          <li><strong>Analytics Cookies:</strong> Help us understand website usage</li>
          <li><strong>Functional Cookies:</strong> Remember your preferences</li>
        </ul>

        <h2>3. Controlling Cookies</h2>
        <p>You can manage or delete cookies through your browser settings.</p>

        <h2>4. Third-Party Cookies</h2>
        <p>We may use third-party services like Google Analytics for analytics and performance measurement.</p>
      </>
    );
  }
}
