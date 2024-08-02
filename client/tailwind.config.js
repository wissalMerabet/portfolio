/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        BgPurple: '#2C0042',
        bgYellow:'#FFEF00',
        BgPurpleF:'#200030',
        BgPurpleC:'#3D284A',
      },
      boxShadow: {
        'custom-yellow': '0 0 5px rgba(255, 239, 0, 1)',
      },
    },
  },
  plugins: [],
}


