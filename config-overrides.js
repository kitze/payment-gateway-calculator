const { override, addBabelPlugin, disableEsLint } = require('customize-cra');

const addBabelPlugins = (...plugins) => plugins.map(p => addBabelPlugin(p));

const optimizeImports = (libraryName, options) =>
  addBabelPlugin([
    'import',
    Object.assign(
      {},
      {
        libraryName
      },
      options
    ),
    `fix-${libraryName}-imports`
  ]);

module.exports = override(
  disableEsLint(),
  ...addBabelPlugins(
    'polished',
    'emotion',
    'babel-plugin-transform-do-expressions'
  ),
  optimizeImports('lodash', {
    libraryDirectory: '',
    camel2DashComponentName: false
  }),
  optimizeImports('react-feather', {
    libraryName: 'react-feather',
    libraryDirectory: 'dist/icons'
  })
);
