/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'Blue': '#0E58A8',
      'Green': '#2FCE91',
      'White': '#F9F9F9',
    },
    fontWeight: {
      Regular: '400',
      Semibold: '600',
      Bold: '700',
    },
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        montserratAlternate: ['Montserrat Alternates', 'sans-serif'],
        montserratSubrayada: ['Montserrat Subrayada', 'sans-serif']
      },
    },
  },

  plugins: [],
}

