/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#24558A',
          secondary: '#58A5FB',
          accent: '#F87171',
          neutral: '#9ca3af',
          'base-100': '#FFFFFF',
          info: '#14b8a6',
          success: '#00A357',
          warning: '#f59e0b',
          error: '#CF142B',
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  // eslint-disable-next-line global-require
  plugins: [require('daisyui'), require('@tailwindcss/typography')],
};
