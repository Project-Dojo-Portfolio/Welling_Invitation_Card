/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'asistir':"url('../img/asistir.jpeg')",
        'collage1':"url('../img/collage1.jpeg')",
        'collage2':"url('../img/collage2.jpeg')",
        'collage3':"url('../img/collage3.jpeg')",
        'collage4':"url('../img/collage4.jpeg')",
        'collage5':"url('../img/collage5.jpeg')",
        'collage6':"url('../img/collage6.jpeg')",
        'collage7':"url('../img/collage7.jpeg')",
        'collage8':"url('../img/collage8.jpeg')",
        'our_story':"url('../img/our_story.png')",
        'portada':"url('../img/portada.jpeg')",
        'collage9':"url('../img/collage9.jpeg')"
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#FEFEFE',
        'secundary': '#F3F0ED',
        'terciary': '#FFFBF4',
        'extra':'#945600'
      }),
      textColor: theme => ({
        ...theme('colors'),
        'primary': '#FEFEFE',
        'secundary': '#F3F0ED',
        'terciary': '#FFFBF4',
        'extra':'#945600'
      }),
      fontFamily:{
        Caprasimo:['Caprasimo','sans-serif']
      }
    },
  },
  plugins: [],
}

