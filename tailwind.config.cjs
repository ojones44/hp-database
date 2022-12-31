/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  daisyui: {
    themes: ['emerald'],
  },
  theme: {
    extend: {},
  },
  // eslint-disable-next-line global-require
  plugins: [require('daisyui')],
};
