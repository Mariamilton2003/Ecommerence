/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        "card-lg":"rgb(0,0,0,0.25) 0px 54px 55px,rgb(0,0,0,0.12) 0px -12px 30px,rgb(0,0,0,0.12) 0px 4px 6px,rgb(0,0,0,0.17) 0px 12px 13px,rgb(0,0,0,0.09) 0px -3px 5px",
        "card-sm":"rgb(0,0,0,0.35) 0px 0px 35px"
      }
    },
  },
  plugins: [],
}