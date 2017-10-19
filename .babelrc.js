const env = process.env.BABEL_ENV || 'cjs';

const presets = [
  'react',
  'stage-2'
];

const plugins = [
  [
    'transform-builtin-extend',
    {
      globals: ['Error']
    }
  ],
  'syntax-dynamic-import',
  'transform-async-to-generator',
  'transform-class-properties',
  'transform-decorators-legacy',
  'transform-object-rest-spread',
  'transform-regenerator',
  'transform-runtime'
];

switch (env) {
  case 'cjs':
    presets.push([
      'env',
      {
        targets: {
          node: [
            'v8',
          ],
        },
        modules: 'commonjs',
        useBuiltIns: true,
      },
    ]);

    plugins.push('transform-es2015-modules-commonjs');
    break;

  case 'es6':
    presets.push([
      'env',
      {
        targets: {
          node: [
            'v8',
          ],
        },
        modules: false,
        useBuiltIns: true,
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
