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
        primary: '#00D991',
      },
    },
  },
  plugins: [],
}
