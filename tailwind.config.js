/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(92.18deg, #5E3928 20.13%, #E4A16F 92.93%)',
        'home-Copper': "/scr/assets/homeCopper/bg.png"
      },
      boxShadow: {
        'custom-shadow': '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
      },
    },
  },
  plugins: [],
}

