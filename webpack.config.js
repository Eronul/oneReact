const path = require('path');    // 意思是实际在node环境中运行
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './src/index.js',   //入口文件模块路径
  module: {
    rules: [
      {
      test: /\.(js|jsx)$/, 
      exclude: /node_modules/,
      use: ['babel-loader']
      }
    ]
  },
  plugins: [ new HtmlWebpackPlugin() ],
  output: {
    filename: '[name].[hash:5].bundle.js',   //打包后的文件名
    path: path.resolve(__dirname, 'dist')  //__dirname node内置变量
  },
  devtool: 'inline-source-map',
  devServer: { contentBase: './dist' }
}