const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode:'development',
  entry: './src/index.js',
  devServer: {

    static: './dist',

  },
  // plugins: [

  //   new HtmlWebpackPlugin({

  //     title: 'Output Management',

  //   }),

  // ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean:true,
  },
    optimization: {

    runtimeChunk: 'single',

  },
};