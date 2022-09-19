/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      },
    extend: {
      backgroundImage: {
        'renameMe': "url('../images/nnneon.svg')"
      },
      fontFamily: {
        "abril": 'Abril Fatface, cursive',
      },
      colors: {
        // primary
        bkg: '#16161a',
        text: '#fffffe',
        button: '#7f5af0',
      }
    },
  },
  plugins: [],
}
