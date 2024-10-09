module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('postcss-pxtorem')({
      rootValue: 16,
      propList: ['*']
    })
  ]
}
