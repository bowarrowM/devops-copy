/**
 * Web Vitals Monitoring
 *
 * Tracks Core Web Vitals and sends to analytics
 * - LCP (Largest Contentful Paint): < 2.5s
 * - FID (First Input Delay): < 100ms
 * - CLS (Cumulative Layout Shift): < 0.1
 * - FCP (First Contentful Paint): < 1.8s
 * - TTFB (Time to First Byte): < 600ms
 */

export interface WebVitalsMetric {
  id: string;
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  navigationType: string;
}

export function reportWebVitals(metric: WebVitalsMetric) {
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Web Vitals] ${metric.name}:`, {
      value: Math.round(metric.value),
      rating: metric.rating,
      id: metric.id,
    });
  }

  // Send to analytics in production
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', metric.name, {
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      non_interaction: true,
    });
  }

  // Send to custom analytics endpoint
  if (process.env.NODE_ENV === 'production') {
    const body = JSON.stringify({
      metric: metric.name,
      value: metric.value,
      rating: metric.rating,
      page: window.location.pathname,
      timestamp: Date.now(),
    });

    // Use sendBeacon for reliability
    if (navigator.sendBeacon) {
      navigator.sendBeacon('/api/analytics/vitals', body);
    } else {
      // Fallback to fetch
      fetch('/api/analytics/vitals', {
        body,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        keepalive: true,
      }).catch((error) => {
        console.error('Failed to send web vitals:', error);
      });
    }
  }
}

// Performance marks and measures
export const performanceMarks = {
  mark: (name: string) => {
    if (typeof window !== 'undefined' && window.performance) {
      window.performance.mark(name);
    }
  },

  measure: (name: string, startMark: string, endMark?: string) => {
    if (typeof window !== 'undefined' && window.performance) {
      try {
        const measure = endMark
          ? window.performance.measure(name, startMark, endMark)
          : window.performance.measure(name, startMark);

        if (measure) {
          console.log(`[Performance] ${name}: ${Math.round(measure.duration)}ms`);
          return measure.duration;
        }
      } catch (error) {
        console.warn(`Failed to measure ${name}:`, error);
      }
    }
    return null;
  },

  clearMarks: () => {
    if (typeof window !== 'undefined' && window.performance) {
      window.performance.clearMarks();
      window.performance.clearMeasures();
    }
  },
};

// Resource timing
export function getResourceTimings() {
  if (typeof window !== 'undefined' && window.performance) {
    const resources = window.performance.getEntriesByType('resource');
    const summary = {
      total: resources.length,
      scripts: resources.filter(r => r.name.includes('.js')).length,
      styles: resources.filter(r => r.name.includes('.css')).length,
      images: resources.filter(r => /\.(jpg|jpeg|png|gif|svg|webp)/.test(r.name)).length,
      fonts: resources.filter(r => /\.(woff|woff2|ttf|eot)/.test(r.name)).length,
      totalSize: resources.reduce((sum, r: any) => sum + (r.transferSize || 0), 0),
      totalDuration: resources.reduce((sum, r) => sum + r.duration, 0),
    };

    return summary;
  }
  return null;
}

// Navigation timing
export function getNavigationTiming() {
  if (typeof window !== 'undefined' && window.performance && window.performance.timing) {
    const timing = window.performance.timing;
    const navigation = {
      dns: timing.domainLookupEnd - timing.domainLookupStart,
      tcp: timing.connectEnd - timing.connectStart,
      ttfb: timing.responseStart - timing.requestStart,
      download: timing.responseEnd - timing.responseStart,
      domProcessing: timing.domComplete - timing.domLoading,
      domContentLoaded: timing.domContentLoadedEventEnd - timing.navigationStart,
      loadComplete: timing.loadEventEnd - timing.navigationStart,
    };

    return navigation;
  }
  return null;
}

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}
