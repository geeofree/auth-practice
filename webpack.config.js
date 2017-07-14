const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

const dir = (src) => path.join(__dirname, src)


module.exports = {
  entry: dir('src'),
  output: {
    path: dir('public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: dir('src'),
        loader: 'babel-loader'
      },
      {
        test: /\.s(a|c)ss$/,
        include: dir('src'),
        use: ExtractTextPlugin.extract(['sass-loader', 'postcss-loader', 'css-loader'])
      }
    ]
  },
  devServer: {

  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    new webpack.HotModuleReplacementPlugin()
  ]
}
