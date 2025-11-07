/**
 * Lazy Loading Utilities
 *
 * Optimized component loading with Intersection Observer
 */

import { useEffect, useState, useRef, ComponentType } from 'react';

/**
 * Hook to detect when element is in viewport
 */
export function useInView(options?: IntersectionObserverInit) {
  const [isInView, setIsInView] = useState(false);
  const [hasBeenInView, setHasBeenInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (entry.isIntersecting && !hasBeenInView) {
          setHasBeenInView(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
        ...options,
      }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [hasBeenInView, options]);

  return { ref, isInView, hasBeenInView };
}

/**
 * Lazy load component wrapper
 * Only renders children when in viewport
 */
interface LazyLoadProps {
  children: React.ReactNode;
  placeholder?: React.ReactNode;
  rootMargin?: string;
  threshold?: number;
  once?: boolean;
}

export function LazyLoad({
  children,
  placeholder = null,
  rootMargin = '100px',
  threshold = 0.1,
  once = true,
}: LazyLoadProps) {
  const { ref, isInView, hasBeenInView } = useInView({
    rootMargin,
    threshold,
  });

  const shouldRender = once ? hasBeenInView : isInView;

  return (
    <div ref={ref}>
      {shouldRender ? children : placeholder}
    </div>
  );
}

/**
 * Lazy load image with loading state
 */
interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  aspectRatio?: string;
  placeholderColor?: string;
}

export function LazyImage({
  src,
  alt,
  aspectRatio = '16/9',
  placeholderColor = '#f3f4f6',
  className = '',
  ...props
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const { ref, hasBeenInView } = useInView({ rootMargin: '200px' });

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio }}
    >
      {!isLoaded && !isError && (
        <div
          className="absolute inset-0 animate-pulse"
          style={{ backgroundColor: placeholderColor }}
        />
      )}
      {hasBeenInView && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setIsLoaded(true)}
          onError={() => setIsError(true)}
          {...props}
        />
      )}
      {isError && (
        <div className="absolute inset-0 flex items-center justify-center bg-neutral-200 text-neutral-500">
          <span className="text-sm">Failed to load image</span>
        </div>
      )}
    </div>
  );
}

/**
 * Preload critical resources
 */
export function preloadResource(href: string, as: string) {
  if (typeof window !== 'undefined') {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = as;
    document.head.appendChild(link);
  }
}

/**
 * Prefetch route
 */
export function prefetchRoute(href: string) {
  if (typeof window !== 'undefined') {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = href;
    document.head.appendChild(link);
  }
}

/**
 * Defer script loading
 */
export function loadScriptAsync(src: string, onLoad?: () => void) {
  if (typeof window !== 'undefined') {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    if (onLoad) {
      script.onload = onLoad;
    }
    document.body.appendChild(script);
  }
}
