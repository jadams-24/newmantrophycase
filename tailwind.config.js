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
        'newman-red': '#780300',
        'newman-red-secondary': '#7F1518',
        'newman-white': '#FFFFFF',
        'newman-black': '#000000',
        'newman-grey': '#D9D9D9',
      },
      fontFamily: {
        'sans': ['Arial', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'heading': ['Arial', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        'body': '400',
        'heading': '700',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}