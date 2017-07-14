const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

const dir = (src) => path.join(__dirname, src)


module.exports = {
  entry: dir('src/app.main.js'),
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
        use: ExtractTextPlugin.extract(['css-loader', 'postcss-loader', 'sass-loader'])
      }
    ]
  },
  devServer: {
    contentBase: dir('public'),
    compress: true,
    port: 3000,
    hot: true
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    new webpack.HotModuleReplacementPlugin()
  ]
}
