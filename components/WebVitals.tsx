'use client';

import { useEffect } from 'react';
import { useReportWebVitals } from 'next/web-vitals';
import { reportWebVitals, WebVitalsMetric } from '@/lib/performance/web-vitals';

/**
 * Web Vitals Monitoring Component
 *
 * Tracks Core Web Vitals and sends to analytics:
 * - LCP (Largest Contentful Paint)
 * - FID (First Input Delay)
 * - CLS (Cumulative Layout Shift)
 * - FCP (First Contentful Paint)
 * - TTFB (Time to First Byte)
 */
export default function WebVitals() {
  useReportWebVitals((metric) => {
    // Map Next.js metric format to our WebVitalsMetric interface
    const webVitalsMetric: WebVitalsMetric = {
      id: metric.id,
      name: metric.name,
      value: metric.value,
      rating: metric.rating,
      delta: metric.delta,
      navigationType: metric.navigationType,
    };

    // Report to analytics
    reportWebVitals(webVitalsMetric);
  });

  // Log performance info on mount (development only)
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('[Performance] Web Vitals monitoring active');
    }
  }, []);

  return null; // This component doesn't render anything
}
