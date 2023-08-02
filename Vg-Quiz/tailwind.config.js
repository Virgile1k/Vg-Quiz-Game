/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'body-bg': "url('../Vg-Quiz/src/assets/background.jpg')",
      },
    },
  },
  plugins: [],
};
