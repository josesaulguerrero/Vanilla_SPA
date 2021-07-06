const path = require('path');
const htmlPlugin = require('html-webpack-plugin');
const miniCSS = require('mini-css-extract-plugin');

module.exports = {
   entry: './src/index.js',
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'main[contenthash].js',
      clean: true,
   },
   resolve: {
      extensions: ['.js'],
      alias: {
         '@styles': path.resolve(__dirname, 'src/styles'),
         '@pages': path.resolve(__dirname, 'src/pages'),
         '@routes': path.resolve(__dirname, 'src/routes'),
         '@utils': path.resolve(__dirname, 'src/utils'),
         '@templates': path.resolve(__dirname, 'src/templates'),
      }
   },
   module: {
      rules: [
         {
            test: /\.m?js$/,
            use: {
               loader: 'babel-loader'
            },
            exclude: /node_modules/,
         },
         {
            test: /\.css$/,
            use: [
               miniCSS.loader,
               'css-loader',
            ]
         },
         {
            test: /\.(woff|woff2)$/,
            type: 'asset/resource',
            generator: {
               filename: './assets/fonts/[name][contenthash][ext]',
            },
         },
      ]
   },
   plugins: [
      new htmlPlugin({
         inject: true,
         template: './public/index.html',
         filename: 'index.html',
      }),
      new miniCSS({
         filename: './assets/styles/main[contenthash].css',
      }),
   ],
   devServer: {
      contentBase: path.join(__dirname, 'dist'),
      historyApiFallback: true,
      port: 3006,
      open: true,
      compress: true,
   }
}