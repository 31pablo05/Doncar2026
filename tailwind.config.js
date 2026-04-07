/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#070710',
          orange: '#FF4D00',
          gold: '#FFB800',
          dark: '#0f0f1a',
          card: '#0f0f1a',
        },
        'neon-cyan':   '#00E5FF',
        'neon-violet': '#B44FFF',
        'neon-pink':   '#E040FB',
        'surface':     '#0f0f1a',
        'surface-2':   '#161625',
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        pulse2: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        }
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        'fade-in-up': 'fadeInUp 0.7s ease forwards',
        'slide-in-right': 'slideInRight 0.7s ease forwards',
        'pulse2': 'pulse2 2s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};
