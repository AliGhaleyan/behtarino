const path = require("path");

const nextConfig = {
  reactStrictMode: true,

  sassOptions: {
    // files in the following locations are accessable from each scss file
    includePaths: [
      path.join(__dirname, "styles"),
      path.join(__dirname, "node_modules")
    ],
    loaders: ['style', 'css', 'sass'],
  },

  env: {
    APP_TITLE: process.env.APP_TITLE,
    API_URL: process.env.API_URL
  }
}

module.exports = nextConfig
