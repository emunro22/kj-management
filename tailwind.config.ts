import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#EE7C3B',
          50: '#FDF3EC',
          100: '#FBE3D3',
          200: '#F7C6A7',
          300: '#F4A87B',
          400: '#F1904F',
          500: '#EE7C3B',
          600: '#D96520',
          700: '#B14F17',
          800: '#8A3D12',
          900: '#632B0D',
        },
        ink: {
          DEFAULT: '#111111',
          soft: '#2B2B2B',
          muted: '#5A5A5A',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          grey: '#E8E9E9',
          dark: '#0A0A0A',
        },
      },
      fontFamily: {
        display: ['Arial', 'Helvetica', 'sans-serif'],
        body: ['Arial', 'Helvetica', 'sans-serif'],
        accent: ['var(--font-accent)', 'Arial', 'sans-serif'],
        label: ['var(--font-label)', 'Arial', 'sans-serif'],
      },
      maxWidth: {
        container: '1200px',
      },
      boxShadow: {
        card: '0 2px 14px rgba(0,0,0,0.06)',
        cardHover: '0 18px 40px rgba(0,0,0,0.12)',
      },
      keyframes: {
        pulseRing: {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '70%': { transform: 'scale(1.5)', opacity: '0' },
          '100%': { transform: 'scale(1.5)', opacity: '0' },
        },
      },
      animation: {
        pulseRing: 'pulseRing 2.2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};

export default config;
