module.exports = {
  content: ["src/**/*.{html,js, css}", "public/**/*.{html,js, css}"],
  theme: {
    extend: {
      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883'
        }
      },
      fontSize: {
        mammoth: '8rem'
      },
      fontFamily: {
        body: ['Nunito']
      }
    },
  },
  plugins: [],
}
