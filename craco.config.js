const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#3B845D', '@border-color-base': '#3B845D'},
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};