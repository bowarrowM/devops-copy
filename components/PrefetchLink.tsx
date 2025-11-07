'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ComponentProps, MouseEvent } from 'react';

/**
 * Enhanced Link Component with Hover Prefetching
 *
 * Extends Next.js Link with aggressive prefetching on hover
 * for even better perceived performance.
 *
 * Features:
 * - Prefetches on hover (not just viewport)
 * - Maintains all Next.js Link functionality
 * - Zero configuration needed
 */

interface PrefetchLinkProps extends ComponentProps<typeof Link> {
  prefetchOnHover?: boolean;
}

export default function PrefetchLink({
  href,
  prefetchOnHover = true,
  onMouseEnter,
  ...props
}: PrefetchLinkProps) {
  const router = useRouter();

  const handleMouseEnter = (e: MouseEvent<HTMLAnchorElement>) => {
    // Call original onMouseEnter if provided
    if (onMouseEnter) {
      onMouseEnter(e);
    }

    // Prefetch on hover for instant navigation
    if (prefetchOnHover && typeof href === 'string') {
      router.prefetch(href);
    }
  };

  return (
    <Link
      href={href}
      onMouseEnter={handleMouseEnter}
      prefetch={true} // Enable default Next.js prefetching
      {...props}
    />
  );
}
