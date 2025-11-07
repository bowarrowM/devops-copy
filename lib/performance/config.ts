/**
 * Performance Configuration
 *
 * Central configuration for performance optimizations
 */

export const PERFORMANCE_CONFIG = {
  // Image optimization
  images: {
    quality: 85,
    formats: ['webp', 'jpg'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    lazyLoadThreshold: 0.1,
    lazyLoadRootMargin: '200px',
  },

  // Code splitting
  codeSplitting: {
    // Minimum chunk size for splitting (bytes)
    minChunkSize: 20000,
    // Maximum async requests
    maxAsyncRequests: 30,
    // Maximum initial requests
    maxInitialRequests: 30,
  },

  // Resource hints
  preload: {
    // Critical fonts to preload
    fonts: [
      '/fonts/inter-var.woff2',
    ],
    // Critical CSS
    styles: [],
    // Critical scripts
    scripts: [],
  },

  // Prefetch routes on hover/visible
  prefetch: {
    enabled: true,
    routes: [
      '/services',
      '/tools',
      '/case-studies',
      '/tools/roi-calculator',
      '/tools/assessment',
    ],
  },

  // Cache configuration
  cache: {
    // Static assets cache duration (seconds)
    staticAssets: 31536000, // 1 year
    // API cache duration
    api: 300, // 5 minutes
    // Page cache duration
    pages: 3600, // 1 hour
  },

  // Web Vitals thresholds
  vitals: {
    // Largest Contentful Paint (ms)
    lcp: {
      good: 2500,
      needsImprovement: 4000,
    },
    // First Input Delay (ms)
    fid: {
      good: 100,
      needsImprovement: 300,
    },
    // Cumulative Layout Shift
    cls: {
      good: 0.1,
      needsImprovement: 0.25,
    },
    // First Contentful Paint (ms)
    fcp: {
      good: 1800,
      needsImprovement: 3000,
    },
    // Time to First Byte (ms)
    ttfb: {
      good: 600,
      needsImprovement: 1200,
    },
  },

  // Bundle size limits (KB)
  bundleSize: {
    // Maximum JS bundle size
    maxJS: 500,
    // Maximum CSS bundle size
    maxCSS: 100,
    // Maximum page size (First Load JS)
    maxFirstLoad: 200,
  },

  // Feature flags
  features: {
    // Enable service worker
    serviceWorker: false,
    // Enable route prefetching
    routePrefetch: true,
    // Enable image lazy loading
    imageLazyLoad: true,
    // Enable component lazy loading
    componentLazyLoad: true,
    // Enable web vitals reporting
    webVitals: true,
  },
};

/**
 * Get performance rating based on value and thresholds
 */
export function getPerformanceRating(
  metric: keyof typeof PERFORMANCE_CONFIG.vitals,
  value: number
): 'good' | 'needs-improvement' | 'poor' {
  const thresholds = PERFORMANCE_CONFIG.vitals[metric];

  if (value <= thresholds.good) {
    return 'good';
  } else if (value <= thresholds.needsImprovement) {
    return 'needs-improvement';
  } else {
    return 'poor';
  }
}

/**
 * Format bytes to human readable
 */
export function formatBytes(bytes: number, decimals = 2): string {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

/**
 * Format milliseconds to seconds
 */
export function formatMs(ms: number): string {
  if (ms < 1000) {
    return `${Math.round(ms)}ms`;
  }
  return `${(ms / 1000).toFixed(2)}s`;
}

/**
 * Check if device is mobile
 */
export function isMobileDevice(): boolean {
  if (typeof window === 'undefined') return false;

  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

/**
 * Check if connection is slow
 */
export function isSlowConnection(): boolean {
  if (typeof navigator === 'undefined' || !('connection' in navigator)) {
    return false;
  }

  const connection = (navigator as any).connection;

  // Check effective type
  if (connection.effectiveType) {
    return ['slow-2g', '2g'].includes(connection.effectiveType);
  }

  // Check if save data is enabled
  if (connection.saveData) {
    return true;
  }

  return false;
}

/**
 * Get device memory (GB)
 */
export function getDeviceMemory(): number | null {
  if (typeof navigator === 'undefined' || !('deviceMemory' in navigator)) {
    return null;
  }

  return (navigator as any).deviceMemory;
}

/**
 * Check if device has low memory
 */
export function hasLowMemory(): boolean {
  const memory = getDeviceMemory();
  return memory !== null && memory < 4;
}

/**
 * Should reduce motion (accessibility)
 */
export function shouldReduceMotion(): boolean {
  if (typeof window === 'undefined') return false;

  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
