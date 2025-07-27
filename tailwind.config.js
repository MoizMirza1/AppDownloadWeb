/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: '#FF5349',
        background: '#F2F2F2'
      },
      fontFamily: {
        sans: [
          '"ITC Avant Garde Gothic Std"', 
          'system-ui', 
          '-apple-system', 
          'sans-serif'
        ],
      },
      fontWeight: {
        extralight: '200',
        book: '400',
        medium: '500',
        demi: '600',
        bold: '700',
      },
    },
  },
  plugins: [],
}