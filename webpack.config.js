const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // Add mode ('development' or 'production')
  entry: './src/index.js', // Entry point for the bundle
  output: {
    path: path.resolve(__dirname, 'dist'), // Output folder
    filename: 'bundle.js', // Output JS file
    clean: true, // Clean the dist folder before each build
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply babel-loader to all .js and .jsx files
        exclude: /node_modules/, 
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Enable React and modern JS
          },
        },
      },
      {
        test: /\.css$/, // For CSS files
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/, // For image files
        type: 'asset/resource', // Modern Webpack handling for assets
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // The HTML file to use
      filename: 'index.html',
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'), // Serve content from 'public' folder
    },
    compress: true,
    port: 8080, // Dev server port
    open: true, // Automatically open the browser
    hot: true, // Enable hot module replacement
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Automatically resolve .js and .jsx extensions
  },
};
