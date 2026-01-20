/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FFFCF8',
        sage: {
          50: '#f4f7f4',
          100: '#e6ebe5',
          200: '#cdd8cc',
          300: '#a8b5a6',
          400: '#7d9a78',
          500: '#5f7d5a',
          600: '#4a6346',
          700: '#3d4f3a',
          800: '#334131',
          900: '#2c352c',
        },
        terracotta: {
          50: '#fdf6f3',
          100: '#fbeae3',
          200: '#f7d5c7',
          300: '#f0b8a0',
          400: '#e89070',
          500: '#e07a4b',
          600: '#cc5a30',
          700: '#aa4726',
          800: '#8b3c24',
          900: '#723522',
        },
        amber: {
          400: '#d4935d',
        }
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'gradient': 'gradient 8s ease infinite',
        'marquee': 'marquee 30s linear infinite',
        'slide-up': 'slideUp 0.8s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(1deg)' },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(25px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
