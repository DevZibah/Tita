const path = require('path')
// const dotenv = require('dotenv').config({ path: __dirname + '/.env' })
// const isDevelopment = process.env.NODE_ENV !== 'production'
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'build'),
  },
  node: {
    net: 'empty',
  },
  // plugins: [
  //   new webpack.DefinePlugin({
  //     'process.env': JSON.stringify(dotenv.parsed),
  //     'process.env.NODE_ENV': JSON.stringify(
  //       isDevelopment ? 'development' : 'production'
  //     ),
  //   }),
  // ].filter(Boolean),
}
