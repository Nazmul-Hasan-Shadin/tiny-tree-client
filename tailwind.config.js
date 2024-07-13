/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors:{
        primary:{
          green:'#054004'
        },
        transitionDuration: {
          '4000': '4000ms',
          '6000': '6000ms',
        },
       
       }
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["light"], // Add this line to set the light theme
  },
}

