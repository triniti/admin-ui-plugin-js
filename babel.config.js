const env = process.env.BABEL_ENV || 'cjs';

const presets = [
  '@babel/preset-react'
];

const plugins = [
  [
    'babel-plugin-module-resolver',
    {
      root: ['./src']
    }
  ],
  [
    'babel-plugin-transform-builtin-extend',
    {
      globals: ['Error']
    }
  ],
  '@babel/plugin-syntax-dynamic-import',
  '@babel/plugin-transform-async-to-generator',
  '@babel/plugin-proposal-class-properties',
  ['@babel/plugin-proposal-decorators', { 'legacy': true }],
  '@babel/plugin-proposal-object-rest-spread',
  '@babel/plugin-transform-regenerator',
  '@babel/plugin-transform-runtime'
];

switch (env) {
  case 'cjs':
    presets.push([
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
        modules: 'commonjs',
        useBuiltIns: 'usage',
        corejs: '3.0.0',
      },
    ]);
    break;

  case 'es6':
    presets.push([
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
        modules: false,
        useBuiltIns: 'usage',
        corejs: '3.0.0',
      },
    ]);

    plugins.push('lodash');
    plugins.push('./build/use-lodash-es');
    break;

  default:
    break;
}

module.exports = {
  presets,
  plugins,
};
