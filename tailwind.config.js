module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts}"
  ],
  theme: {
    extend: {
      screens: {
        'sm': { 'max': '425px' },
        'md' : { 'max': '768px' },
        'lg': {'max': '1024px'},
        'xl': {'max': '1279px'},
        '2xl': {'max': '1535px'}
      }
    },
  },
  plugins: [],
}
