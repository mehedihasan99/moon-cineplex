/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1.2rem',
      },
      colors: {
        primary: '#7AB2B2',
      },
    },
  },
  plugins: [],
}
