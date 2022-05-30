module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts}"
  ],
  theme: {
    extend: {
      animation:{
        'spin-slow': 'spin 3s linear infinite',
      }
    },
  },
  plugins: [],
}
