var path = require('path');
var webpack = require('webpack');
 
module.exports = {
  entry: './views/helloes6/src/app.js',
  output: { path: __dirname + '/assets/js/helloes6', filename: 'bundle.js' },
  module: {
    loaders: [
      { test: /.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /.html?$/, loader: 'file-loader' }
    ]
  },
};
