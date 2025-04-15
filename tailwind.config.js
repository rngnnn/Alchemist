const colors = require('tailwindcss/colors')
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'], // Eski 'purge' yerine 'content' kullanılıyor
  theme: {
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"]
    },
    extend: {
      colors: {
        neutral: require('tailwindcss/colors').neutral,
        gray: require('tailwindcss/colors').gray,
        slate: require('tailwindcss/colors').slate,
        stone: require('tailwindcss/colors').stone,
      }
    },
  },
  plugins: [],
}