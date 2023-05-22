/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'foy': "url('/src/assets/newProducts/veganhof foy.png')",
        'redBerry': "url('/src/assets/newProducts/red berries.png')",
        'detox' : "url('/src/assets/newProducts/detox_alps.png')",

        'nordic' : "url('/src/assets/bestProducts/nordic berries.png')",
        'tropical' : "url('/src/assets/bestProducts/tropical punch.png')",
        'protein' : "url('/src/assets/bestProducts/veganhof PROTEIN.png')",
        'immunity' : "url('/src/assets/bestProducts/veganhof immunity.png')",
      }
    },
  },
  plugins: [],
}

