import type { Metadata } from 'next'
import './globals.css'
import { generateMetadata } from '@/lib/seo/metadata'
import WebVitals from '@/components/WebVitals'

export const metadata: Metadata = generateMetadata('tr')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <head>
        {/* Google Fonts - Inter */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />

        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#0ea5e9" />

        {/* Additional SEO meta tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        {/* Geo tags */}
        <meta name="geo.region" content="TR-34" />
        <meta name="geo.placename" content="Istanbul" />
        <meta name="geo.position" content="41.008238;28.978359" />
        <meta name="ICBM" content="41.008238, 28.978359" />

        {/* Language alternatives */}
        <link rel="alternate" hrefLang="tr" href="https://devops.com.tr" />
        <link rel="alternate" hrefLang="en" href="https://devops.com.tr/en" />
        <link rel="alternate" hrefLang="de" href="https://devops.com.tr/de" />
        <link rel="alternate" hrefLang="x-default" href="https://devops.com.tr" />
      </head>
      <body style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
        <WebVitals />
        {children}
      </body>
    </html>
  )
}
