const webpack = require('webpack')
const path = require('path')
const cors = require('cors')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CheckerPlugin} = require('awesome-typescript-loader');

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: {
    app: './src/index.tsx'
  },
  output: {
    path: path.resolve(__dirname,'../build'),
    filename: '[name].[hash].js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  },
  plugins: [new CheckerPlugin(), new HtmlWebpackPlugin()],
  devServer: {
    host: '192.168.178.35',
    port: 8080,
    before: (app) => {
      app.use(cors())
    }
  }
}