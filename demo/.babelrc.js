const env = process.env.BABEL_ENV || 'cjs';

const presets = [
  'react',
  'stage-2'
];

const plugins = [
  [
    'module-resolver',
    {
      root: ['./src']
    }
  ],
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
  'transform-es2015-modules-commonjs',
  'transform-object-rest-spread',
  'transform-regenerator',
  'transform-runtime',
  'universal-import',
];

switch (env) {
  case 'browser':
    presets.push([
      'env',
      {
        targets: {
          browsers: [
            'last 2 versions',
          ],
        },
        modules: false,
        useBuiltIns: true,
      },
    ]);

    plugins.push('react-hot-loader/babel');
    break;

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
    break;

  default:
    break;
}

module.exports = {
  presets,
  plugins,
};
