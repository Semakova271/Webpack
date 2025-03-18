const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js', // Точка входа
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js', // Имя бандла
  },
  module: {
    rules: [
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader'] }, // Обработка CSS
      { test: /\.js$/, use: 'babel-loader' }, // Обработка JS (если используете современный JS)
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }), // Генерация HTML
    new MiniCssExtractPlugin({ filename: 'style.css' }), // Вынос CSS в отдельный файл
  ],
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 3000,
  },
};