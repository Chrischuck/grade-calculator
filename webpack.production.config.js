/* eslint-disable */
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var PurifyCSSPlugin = require('purifycss-webpack-plugin');

module.exports = {

  /////////// Sets up entra and output code ////////
  devtool: 'cheap-module-source-map',
  context: __dirname + '/src', // directory webpack looks //
  entry: {
    app: './index.js', // file webpack looks at //
    vendor: [
      'sweetalert',
      'react',
      'react-dom',
      'redux',
      'classnames',
      'redux-saga',
      'react-router',
      'react-redux'
    ]
  },
  output: {
    path: __dirname+ '/dist',
    filename: 'bundle.js'
  },

  /////////// Sets up loaders ////////
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.css']
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ["babel-loader"] },
      { test: /\.eot/, loader: 'url-loader?mimetype=application/vnd.ms-fontobject' },
      { test: /\.ttf/, loader: 'url-loader?mimetype=application/x-font-ttf' },
      { test: /\.woff/, loader: 'url-loader?mimetype=application/font-woff' },
      { test: /\.woff2/, loader: 'url-loader?mimetype=application/font-woff2' },
      { test: /\.svg$/, loader: "svg-loader?limit=10000&mimetype=image/svg+xml" },
      { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
      { test: /\.png$/, loader: "url-loader?limit=100000" },
      { test: /\.jpg$/, loader: "url-loader" },
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        loader: 'babel-loader',
        options: {
          presets: ["es2015", "react", "stage-0"],
          plugins: [
              ["transform-decorators-legacy"],
              ["transform-runtime"]
            ]
          }
      },


    ]
  },
  ////////// Plug ins! ///////////
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.CommonsChunkPlugin("vendor", 'vendor.js'),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      comments: true,
      beautify: false,
      mangle: false,
      compress: {
        warnings: false,
        drop_console: true

      }
    }),
    new HtmlWebpackPlugin({
      title: 'Bare Minimum',
      filename: 'index.html',
      template: './index.html',
      inject: true
    }),
    new ExtractTextPlugin("styles.css"),
    new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
      }
    }),
  ]

}
