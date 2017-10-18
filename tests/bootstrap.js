// ignore styles
require('ignore-styles').default(['.sass', '.scss']);

// babel-register
require('babel-register')({
  ignore: /node_modules\/(?!@gdbots|lodash-es)/,
});

// handle svg
require.extensions['.svg'] = () => null;

// enzyme config
const enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
require('jsdom-global/register');

enzyme.configure({ adapter: new Adapter() });
