/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      "purple-100": "#817CA5",
      "purple-200": "#413C5F"
    },
    extend: {
      maxWidth: {
        '8xl': '90rem',
      }
    }
  },
  plugins: []
};
