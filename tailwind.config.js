module.exports = {
  /** @type {import('tailwindcss').Config} */
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4da6ff',
          DEFAULT: '#0078ff',
          dark: '#0057b8',
        },
        secondary: {
          light: '#f8f9fa',
          DEFAULT: '#e9ecef',
          dark: '#dee2e6',
        },
        brand: {
          pink: '#e52e6b',
          'pink-dark': '#c4255a',
          purple: '#7f2dbc',
          'purple-light': '#b433ca',
          blue: '#0077cc',
          'header-bg': '#f7f8fa',
          'text-main': '#1a1a1a',
          'text-gray': '#a0a1a3',
          'nav-bg': '#e52e6b',
          'badge-yellow': 'rgba(250, 170, 50, 0.16)',
        },
      },
      fontFamily: {
        tahoma: ['Tahoma', '"Liberation Sans"', 'FreeSans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
