/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        "purple-100": "#817CA5",
        "purple-200": "#413C5F",
        "purple-300": "#CECAEB",
        "error": "#be123c"
      },
      height: {
        '15': '3.75rem'
      },
      maxWidth: {
        'sm/1': '25rem',
        '8xl': '90rem',
      },
    }
  },
  plugins: []
};
