const webpack = require('webpack');
const path = require('path');

// look into absolute paths
module.exports = {
  context: __dirname + '/client',
  entry: './relatedContentBar.jsx',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/public',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'env']
        },
      },
    ],
  }
};