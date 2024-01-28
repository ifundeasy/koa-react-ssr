/* eslint-disable import/no-extraneous-dependencies */

require('dotenv').config()

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const Dotenv = require('dotenv-webpack')

const env = process.env.NODE_ENV
const port = process.env.PORT
const useProd = (env !== 'development')
const mode = useProd ? 'production' : 'development'
const modulePaths = []
const moduleDirs = __dirname.split('/')
const context = path.join(__dirname, 'src', 'http', 'react')

// eslint-disable-next-line no-plusplus
for (let i = 0; i < 2; i++) {
  modulePaths.push(path.join(moduleDirs.slice(0, moduleDirs.length - i).join('/'), 'node_modules'))
}

const webpackOpts = {
  context,
  mode,
  entry: path.join(context, 'index.jsx'),
  output: {
    path: path.join(__dirname, 'dist'),
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
    new Dotenv({ silent: true }),
    new HtmlWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'lib/*',
          noErrorOnMissing: true,
          filter: async (file) => {
            const exludes = ['.gitkeep']
            if (exludes.indexOf(file.replace(/^.*[\\/]/, '')) === -1) return true

            return false
          },
          to: path.resolve(__dirname, 'dist'),
        },
        {
          from: 'asset/**/*',
          noErrorOnMissing: true,
          // filter: async (file) => {
          //   const exludes = ['site.webmanifest']
          //   if (exludes.indexOf(file.replace(/^.*[\\/]/, '')) === -1) return true
          //   return false
          // },
          to: path.resolve(__dirname, 'dist'),
        },
        ...modulePaths.map((dir) => ({
          from: `${dir}/bootstrap/dist`,
          noErrorOnMissing: true,
          to: path.resolve(__dirname, 'dist/lib/bootstrap'),
        })),
      ],
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
      directory: path.resolve(__dirname, 'dist'),
    },
    port,
  },
};

if (mode === 'development') {
  webpackOpts.devtool = 'cheap-module-source-map'
}

module.exports = webpackOpts
