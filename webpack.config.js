import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { WebpackManifestPlugin } from 'webpack-manifest-plugin';

const dirname = new URL('.', import.meta.url).pathname;

export default {
  entry: './src/frontend/index.jsx',
  output: {
    path: path.resolve(dirname, 'dist'), // Use import.meta.url to get the module URL
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/, // Add a rule for CSS files
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Your custom title',
      template: path.resolve(dirname, 'public', 'index.html'),
      favicon: path.resolve(dirname, 'public', 'favicon.ico'),
    }),
    new WebpackManifestPlugin({
      basePath: path.resolve(dirname, 'public'),
      filename: 'manifest.json',
    }),
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  experiments: {
    topLevelAwait: true,
  },
  devServer: {
    static: {
      directory: path.resolve(new URL('.', import.meta.url).pathname, 'dist'),
    },
    port: 3000,
  },
};
