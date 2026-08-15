/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#050822',
        primary: {
          DEFAULT: '#0108B0',
          50: '#EDEEFF',
          100: '#D5D6FF',
          200: '#ABADFB',
          300: '#7A7DF0',
          400: '#4A4DE0',
          500: '#0108B0',
          600: '#01068F',
          700: '#02056E',
          800: '#02044F',
          900: '#040736',
          950: '#020318',
        },
        accent: {
          DEFAULT: '#FF6E01',
          50: '#FFF1E6',
          100: '#FFDDBF',
          200: '#FFBB80',
          300: '#FF9847',
          400: '#FF6E01',
          500: '#E85F00',
          600: '#C24F00',
          700: '#8F3A00',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grid-glow':
          'radial-gradient(60% 50% at 50% 0%, rgba(255,110,1,0.18) 0%, rgba(1,8,176,0) 70%)',
      },
      boxShadow: {
        glow: '0 0 60px -12px rgba(255,110,1,0.45)',
        'glow-blue': '0 0 80px -20px rgba(24,32,255,0.55)',
        card: '0 8px 30px -12px rgba(1,8,176,0.45)',
      },
      keyframes: {
        floatY: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradientMove: {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        pulseGlow: {
          '0%,100%': { opacity: 1 },
          '50%': { opacity: 0.55 },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        floatY: 'floatY 6s ease-in-out infinite',
        gradientMove: 'gradientMove 8s ease infinite',
        pulseGlow: 'pulseGlow 2.4s ease-in-out infinite',
        marquee: 'marquee 22s linear infinite',
      },
    },
  },
  plugins: [],
}
