/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container:{
        center:true,
        padding:{
          default:"1 rem",
          sm:"2 rem",
        },
      },
    },
  },
  plugins: [],
}

