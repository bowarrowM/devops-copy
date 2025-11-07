/**
 * Design Tokens - The DNA of DevOps.com.tr Design System
 *
 * These tokens define the visual language of the entire site.
 * Every component should reference these tokens, never hardcode values.
 */

export const colors = {
  // Primary - Trust & Technology
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',  // Main brand color
    600: '#0284c7',  // Hover states
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',  // Deep accents
  },

  // Neutral - Professional Foundation
  neutral: {
    50: '#fafafa',   // Lightest backgrounds
    100: '#f5f5f5',  // Subtle backgrounds
    200: '#e5e5e5',  // Borders
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',  // Body text
    600: '#525252',
    700: '#404040',  // Headings
    800: '#262626',
    900: '#171717',  // Maximum contrast
  },

  // Accent Colors - Strategic Use Only
  success: {
    50: '#f0fdf4',
    500: '#10b981',
    700: '#047857',
  },
  warning: {
    50: '#fffbeb',
    500: '#f59e0b',
    700: '#b45309',
  },
  error: {
    50: '#fef2f2',
    500: '#ef4444',
    700: '#b91c1c',
  },

  // Gradients - Minimal, Purposeful
  gradients: {
    primary: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
    hero: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #312e81 100%)',
    card: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)',
    subtle: 'linear-gradient(180deg, #ffffff 0%, #f9fafb 100%)',
  }
} as const

export const typography = {
  // Font Families
  fontFamily: {
    sans: 'Inter, system-ui, -apple-system, sans-serif',
    mono: 'JetBrains Mono, ui-monospace, monospace',
  },

  // Type Scale (1.25 ratio - Perfect Fourth)
  fontSize: {
    xs: '0.75rem',    // 12px - Small labels, captions
    sm: '0.875rem',   // 14px - Secondary text
    base: '1rem',     // 16px - Body text
    lg: '1.125rem',   // 18px - Large body, small headings
    xl: '1.25rem',    // 20px - Subheadings
    '2xl': '1.5rem',  // 24px - Section titles
    '3xl': '1.875rem',// 30px - Page titles
    '4xl': '2.25rem', // 36px - Hero H2
    '5xl': '3rem',    // 48px - Hero H1 (desktop)
    '6xl': '3.75rem', // 60px - Landing hero (large)
    '7xl': '4.5rem',  // 72px - Maximum impact
  },

  // Font Weights
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },

  // Line Heights
  lineHeight: {
    none: 1,
    tight: 1.2,    // Headlines
    snug: 1.375,   // Subheadings
    normal: 1.5,   // Body text
    relaxed: 1.75, // Long-form content
  },

  // Letter Spacing
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
} as const

export const spacing = {
  // Base 8px system
  0: '0',
  1: '0.25rem',  // 4px
  2: '0.5rem',   // 8px  - Base unit
  3: '0.75rem',  // 12px
  4: '1rem',     // 16px
  5: '1.25rem',  // 20px
  6: '1.5rem',   // 24px
  8: '2rem',     // 32px
  10: '2.5rem',  // 40px
  12: '3rem',    // 48px
  16: '4rem',    // 64px
  20: '5rem',    // 80px
  24: '6rem',    // 96px
  32: '8rem',    // 128px
  40: '10rem',   // 160px
  48: '12rem',   // 192px

  // Semantic spacing
  section: {
    y: '6rem',      // Vertical spacing between sections
    x: '1.5rem',    // Horizontal section padding (mobile)
    xLg: '2rem',    // Horizontal section padding (desktop)
  },
  card: {
    padding: '2rem',      // Internal card spacing
    paddingSm: '1.5rem',  // Small card spacing
  },
  button: {
    y: '0.75rem',   // Button vertical padding
    x: '2rem',      // Button horizontal padding
    ySm: '0.5rem',  // Small button vertical
    xSm: '1rem',    // Small button horizontal
    yLg: '1rem',    // Large button vertical
    xLg: '2.5rem',  // Large button horizontal
  },
} as const

export const shadows = {
  none: 'none',
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',

  // Colored shadows for emphasis
  primary: '0 10px 20px -5px rgba(14, 165, 233, 0.4)',
  success: '0 10px 20px -5px rgba(16, 185, 129, 0.4)',

  // Inner shadows
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
} as const

export const borderRadius = {
  none: '0',
  sm: '0.25rem',   // 4px - Small elements
  base: '0.5rem',  // 8px - Buttons, inputs
  md: '0.625rem',  // 10px - Cards
  lg: '0.75rem',   // 12px - Large cards
  xl: '1rem',      // 16px - Hero cards
  '2xl': '1.5rem', // 24px - Feature sections
  '3xl': '2rem',   // 32px - Maximum curve
  full: '9999px',  // Pills, avatars
} as const

export const animation = {
  // Duration
  duration: {
    instant: '100ms',   // Immediate feedback
    fast: '150ms',      // Micro-interactions
    base: '300ms',      // Standard transitions
    slow: '500ms',      // Complex animations
    slower: '700ms',    // Very complex
  },

  // Easing functions
  easing: {
    default: 'cubic-bezier(0.4, 0, 0.2, 1)',      // Smooth standard
    linear: 'linear',                             // Constant speed
    in: 'cubic-bezier(0.4, 0, 1, 1)',             // Decelerating
    out: 'cubic-bezier(0, 0, 0.2, 1)',            // Accelerating
    inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',        // Smooth in and out
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)', // Playful bounce
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',        // Sharp movement
  },

  // Keyframe presets
  keyframes: {
    fadeIn: {
      from: { opacity: 0 },
      to: { opacity: 1 },
    },
    fadeInUp: {
      from: { opacity: 0, transform: 'translateY(20px)' },
      to: { opacity: 1, transform: 'translateY(0)' },
    },
    fadeInDown: {
      from: { opacity: 0, transform: 'translateY(-20px)' },
      to: { opacity: 1, transform: 'translateY(0)' },
    },
    scaleIn: {
      from: { opacity: 0, transform: 'scale(0.95)' },
      to: { opacity: 1, transform: 'scale(1)' },
    },
  },
} as const

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const

export const zIndex = {
  base: 0,
  dropdown: 1000,
  sticky: 1100,
  fixed: 1200,
  modalBackdrop: 1300,
  modal: 1400,
  popover: 1500,
  toast: 1600,
  tooltip: 1700,
} as const

// Export everything as a single design system object
export const designSystem = {
  colors,
  typography,
  spacing,
  shadows,
  borderRadius,
  animation,
  breakpoints,
  zIndex,
} as const

export default designSystem
