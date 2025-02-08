/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // Fuente predeterminada
        slab: ['Roboto Slab', 'serif'], // Fuente personalizada
      },
    },
  },
  plugins: [],
};
