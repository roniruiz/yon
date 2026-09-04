/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0fdfd',
          100: '#ccfbfb',
          200: '#99f6f6',
          300: '#5fe7e7',
          400: '#2dd4d4',
          500: '#0EA5A5',
          600: '#0c8a8a',
          700: '#0a6e6e',
          800: '#0B3D45',
          900: '#082f36',
        },
        coral: {
          50: '#fff5f2',
          100: '#ffe8e1',
          200: '#ffd0c3',
          300: '#ffb09a',
          400: '#ff9174',
          500: '#FF7A59',
          600: '#e85f3e',
          700: '#c44a2e',
          800: '#9a3a24',
          900: '#7a2e1c',
        },
        sand: {
          50: '#fdfbf7',
          100: '#faf5ea',
          200: '#f5ebd5',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', maxHeight: '0' },
          '100%': { opacity: '1', maxHeight: '500px' },
        },
        pulseRing: {
          '0%': { boxShadow: '0 0 0 0 rgba(37,211,102,0.5)' },
          '70%': { boxShadow: '0 0 0 14px rgba(37,211,102,0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(37,211,102,0)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.6s ease-out forwards',
        slideDown: 'slideDown 0.3s ease-out forwards',
        pulseRing: 'pulseRing 2s infinite',
      },
    },
  },
  plugins: [],
};
