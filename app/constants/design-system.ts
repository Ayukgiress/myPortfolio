export const DESIGN_TOKENS = {
  // Colors
  colors: {
    primary: {
      50: '#f0fdf4',
      500: '#22c55e',
      600: '#16a34a',
      900: '#14532d'
    },
    neutral: {
      50: '#fafafa',
      100: '#f5f5f5',
      800: '#262626',
      900: '#171717',
      950: '#0a0a0a'
    },
    accent: {
      green: '#22c55e',
      darkGreen: '#16a34a'
    }
  },
  
  typography: {
    fontFamily: {
      sans: 'var(--font-geist-sans)',
      mono: 'var(--font-geist-mono)'
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem'
    }
  },
  
  spacing: {
    section: {
      sm: '4rem',
      md: '6rem',
      lg: '8rem'
    },
    container: {
      padding: '1rem',
      maxWidth: '1200px'
    }
  },
  
  // Animations
  animations: {
    duration: {
      fast: '200ms',
      normal: '300ms',
      slow: '500ms'
    },
    easing: {
      default: 'cubic-bezier(0.4, 0, 0.2, 1)',
      bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
    }
  }
} as const;

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
} as const;
