const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
entry: './src/main.js',
output: {
  filename: 'bundle.js',
  path: path.resolve(__dirname, 'dist')
},
devtool: 'bundle.js',
devServer: {
  contentBase: './dist'
},
plugins: [
  new CleanWebpackPlugin(['dist']),
  new HtmlWebpackPlugin({
    title: 'Triangle Finder',
    template: './src/index.html',
    inject: 'body'
  })
],
module: {
  rules: [
    {
      test: /\.js$/,
      exclude:[
        /node_modules/,
        /spec/
      ],
      loader: "eslint-loader"
    },
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }
  ]
}
};
