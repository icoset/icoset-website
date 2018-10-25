const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');
const config = {};

config.entry = path.resolve(__dirname, 'src/index.js');
config.output = {
  filename: 'bundle.js',
  path: path.resolve(__dirname, 'src'),
}

config.mode = 'development';

config.module = {
  rules: [
    {
      test: /\.vue$/,
      loader: 'vue-loader',
    },
    {
      test: /\.js$/,
      loader: 'babel-loader',
    },
    {
      test: /\.scss$/,
      exclude: /node_modules/,
      use: ['vue-style-loader', 'css-loader', {
        loader: 'sass-loader',
        options: {
          data: `@import "~/${path.resolve(__dirname, 'src/styles/variables.scss')}";`,
        },
      }],
    },
  ],
};

config.plugins = [
  new VueLoaderPlugin(),
];

module.exports = config;