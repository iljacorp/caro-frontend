/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#375bd2',
        secondary: '#2596be',
        'primary-text': '#1a2b6b',
        'secondary-text': '#3d4556',
      },
    },
  },
  plugins: [],
};
