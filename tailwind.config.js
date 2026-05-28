/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        gold: {
          300: '#E8C96A',
          400: '#D4AF37',
          500: '#C9A84C',
          600: '#A8872A',
        },
        hawk: {
          black: '#08080A',
          dark: '#0F0F12',
          surface: '#161619',
          elevated: '#222228',
          cream: '#F5EDE4',
          muted: '#7A6E62',
          cyan: '#06B6D4',
        },
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
      },
      transitionDuration: {
        400: '400ms',
      },
      scale: {
        108: '1.08',
      },
    },
  },
  plugins: [],
}
