/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      'sans': ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
      colors: {
        "purple-100": "#817CA5",
        "purple-200": "#413C5F",
        "purple-300": "#CECAEB",
        "purple-400": "#5845DD",
        "purple-500": "#C9C5E8",
        "error": "#DA2121"
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
