// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",        // include app folder
    "./pages/**/*.{js,ts,jsx,tsx}",      // optional if using pages folder
    "./components/**/*.{js,ts,jsx,tsx}", // include components
  ],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(5deg)' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-delay': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'stagger-fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'fade-in': 'fade-in 0.6s ease-out',
        'fade-in-up': 'fade-in-up 0.8s ease-out',
        'fade-in-delay': 'fade-in-delay 0.8s ease-out 0.3s both',
        'fade-in-down': 'fade-in 0.8s ease-out 0.2s both',
        'stagger-fade-in': 'stagger-fade-in 0.6s ease-out both',
      },
    },
  },
  plugins: [],
};
