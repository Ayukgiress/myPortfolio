export const NAVIGATION_STYLES = {
  header: {
    base: 'fixed top-0 left-1/2 -translate-x-1/2 z-50',
    responsive: 'lg:w-[95.67%]',
    spacing: 'px-5 pt-5'
  },
  container: {
    background: 'bg-black/90',
    text: 'text-white',
    border: 'border border-[#1f1f1f]',
    shadow: 'shadow-[0_8px_20px_rgba(0,0,0,0.8)]',
    shape: 'rounded-full',
    backdrop: 'backdrop-blur-sm'
  },
  brand: {
    size: 'text-2xl',
    weight: 'font-bold',
    color: 'text-green-600',
    animation: 'animate-fade-in'
  },
  navigation: {
    layout: 'flex gap-8',
    size: 'text-lg',
    alignment: 'items-center'
  },
  link: {
    hover: 'hover:text-green-500',
    transition: 'transition-colors duration-300'
  }
} as const;
