/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('/src/assets/background/Burger-Hood-Background.png')",
      },
      colors: {
        'yellow-pastel': '#FFE5A3',
        'yellow-darker': '#ffd466'
      },
      fontFamily: {
        'Lilita-one': ['Lilita One', 'serif']
      }
    },
  },
  plugins: [],
}

