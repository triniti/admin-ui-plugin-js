const dotenv = require('dotenv');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { resolve } = require('path');

module.exports = (webpackEnv = {}) => {
  /**
   * @type {{
   *  APP_ENV: string,
   *  NODE_ENV: string,
   *  IS_PRODUCTION: boolean,
   *  IS_NOT_PRODUCTION: boolean,
   * }}
   */
  // const env = Object.entries(process.env).reduce((acc, pair) => {
  //   const [key, value] = pair;
  //   if (typeof acc[key] === 'undefined') {
  //     return acc;
  //   }
  //
  //   acc[key.toUpperCase()] = value;
  //   return acc;
  // }, Object.assign({ NODE_ENV: 'development' }, webpackEnv, dotenv.config().parsed));
  //
  // const isProduction = env.NODE_ENV === 'production';
  // const isNotProduction = !isProduction;
  // env['process.env.NODE_ENV'] = env.NODE_ENV;
  // env.APP_ENV = env.NODE_ENV;
  // env.IS_PRODUCTION = isProduction;
  // env.IS_NOT_PRODUCTION = isNotProduction;
  // env[`IS_${env.APP_ENV.toUpperCase()}_ENVIRONMENT`] = true;

  const config = {
    entry: (() => {
      if (isProduction) {
        return {
          main: './index.jsx',
        };
      }

      return [
        'react-hot-loader/patch',
        'webpack-dev-server/client?https://localhost:3000',
        './index.jsx',
      ];
    })(),
    devtool: isProduction ? 'hidden-sourcemap' : 'cheap-module-eval-source-map',
    devServer: isProduction ? {} : {
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
          if (isProduction) {
            return {
              test: /\.scss$/,
              use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                  {
                    loader: 'css-loader',
                    options: {
                      importLoaders: 3,
                    },
                  },
                  {
                    loader: 'postcss-loader',
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
              }),
            };
          }

          return {
            test: /\.scss$/,
            use: [
              {
                loader: 'style-loader',
              },
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 3,
                },
              },
              {
                loader: 'postcss-loader',
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
      new webpack.DefinePlugin(Object.entries(env).reduce((acc, pair) => {
        const [key, value] = pair;
        acc[key] = JSON.stringify(value);
        return acc;
      }, {})),

      // enable HMR globally
      new webpack.HotModuleReplacementPlugin(),

      // prints more readable module names in the browser console on HMR updates
      new webpack.NamedModulesPlugin(),

      // do not emit compiled assets that include errors
      new webpack.NoEmitOnErrorsPlugin(),

      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),

      new ExtractTextPlugin({
        filename: 'bundle.css',
        disable: false,
        allChunks: true,
      }),
    ],
  };

  if (isProduction) {
    config.plugins.push(new UglifyJSPlugin({
      beautify: false,
      sourceMap: true,
      mangle: {
        screw_ie8: true,
        keep_fnames: true,
      },
      compress: {
        screw_ie8: true,
      },
      comments: false,
    }));
  }

  return config;
};
