/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        bgMain: '#111B21'
      },
      textColor: {
        whatsApp: '#66DB84',
        viber: '#7360F2'
      }
    },
  },
  plugins: [],
}