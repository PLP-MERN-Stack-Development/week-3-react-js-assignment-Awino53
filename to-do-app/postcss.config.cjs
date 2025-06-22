const tailwindcss = require('@tailwindcss/postcss')

module.exports = {
  plugins: [
    tailwindcss,
    require('autoprefixer'),
  ],
}
// This is a PostCSS configuration file that uses Tailwind CSS and Autoprefixer.
// It exports an object with a plugins array that includes Tailwind CSS and Autoprefixer.
