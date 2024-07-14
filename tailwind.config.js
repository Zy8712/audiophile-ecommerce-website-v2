/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme-dark-orange': '#D87D4A',
        'theme-slightly-lighter-black': '#101010',
        'theme-light-grey': '#F1F1F1',
        'theme-grayish-white': '#FAFAFA',
        'theme-light-orange': '#FBAF85',

        'theme-grayish-black': '#4C4C4C',
        'theme-super-light-grey': 'rgba(0,0,0,0.1)',
        'theme-light-translucent-grey': 'rgba(0,0,0,0.6)',
        'theme-checkout-grey': '#CFCFCF',
      },
      fontFamily: {
        'theme-manrope': ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
