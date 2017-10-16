const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { resolve } = require('path');

module.exports = () => {
  return {
    entry: (() => {
      return [
        'react-hot-loader/patch',
        'webpack-dev-server/client?https://localhost:3000',
        './index.jsx',
      ];
    })(),
    devtool: 'cheap-module-eval-source-map',
    devServer: {
      port: 3000,
      https: true,
      hot: true,
      contentBase: resolve(__dirname, 'public'),
    },
    output: {
      path: resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      library: 'triniti',
    },
    context: resolve(__dirname, 'src'),
    resolve: {
      extensions: ['*', '.js', '.jsx', '.json'],
      alias: {},
    },
    externals: {},
    module: {
      exprContextCritical: false,
      rules: [
        {
          test: /\.jsx?$/,
          include: [
            resolve(__dirname, 'src'),
            resolve(__dirname, '../src'),
            /node_modules\/@gdbots/,
          ],
          loader: 'babel-loader',
        },
        {
          test: /\.html$/,
          loader: 'html-loader',
        },
        {
          test: /\.(png|gif|jpg)$/,
          loader: 'url-loader',
          options: {
            limit: 50000,
          },
        },
        {
          test: /\.svg$/,
          use: [
            'url-loader',
            'svg-fill-loader',
          ],
        },
        {
          test: /\.(woff|woff2|eot|ttf)$/,
          loader: 'file-loader',
          options: {
            name: './assets/[path][name].[ext]',
          },
        },
        {
          test: /\.css$/,
          loader: ['style-loader', 'css-loader', 'postcss-loader'],
        },

        // sass rule
        (() => {
          return {
            test: /\.scss$/,
            use: [
              {
                loader: 'style-loader',
              },
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 2,
                },
              },
              {
                loader: 'sass-loader',
              },
              {
                loader: 'sass-resources-loader',
                options: {
                  resources: resolve(__dirname, 'src/assets/styles/_variables.scss'),
                },
              },
            ],
          };
        })(),
      ],
    },
    plugins: [
      // enable HMR globally
      new webpack.HotModuleReplacementPlugin(),

      // prints more readable module names in the browser console on HMR updates
      new webpack.NamedModulesPlugin(),

      // do not emit compiled assets that include errors
      new webpack.NoEmitOnErrorsPlugin(),

      new ExtractTextPlugin({
        filename: 'bundle.css',
        disable: false,
        allChunks: true,
      }),
    ],
  };
};
