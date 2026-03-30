const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new CopyPlugin({
      patterns: [
        { from: 'public/img', to: 'img' },
        { from: 'public/fonts', to: 'fonts' },
        { from: 'public/css', to: 'css' },
        { from: 'public/js/vendor', to: 'js/vendor', noErrorOnMissing: true },
        { from: 'public/icon.svg', to: 'icon.svg', noErrorOnMissing: true },
        { from: 'public/favicon.ico', to: 'favicon.ico', noErrorOnMissing: true },
        { from: 'public/robots.txt', to: 'robots.txt', noErrorOnMissing: true },
        { from: 'public/icon.png', to: 'icon.png', noErrorOnMissing: true },
        { from: 'public/404.html', to: '404.html', noErrorOnMissing: true },
        { from: 'public/site.webmanifest', to: 'site.webmanifest', noErrorOnMissing: true },
      ],
    }),
  ],
});
