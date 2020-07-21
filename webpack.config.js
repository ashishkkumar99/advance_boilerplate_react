/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
const { merge } = require('webpack-merge');

const commonConfig = require('./build_utils/webpack.common');

const getAddons = (addonsArgs) => {
  const addons = Array.isArray(addonsArgs)
    ? addonsArgs
    : [addonsArgs];

  return addons
    .filter(Boolean)
    .map((name) =>
      require(`./build_utils/addons/webpack.${name}.js`)
    );
};

module.exports = ({ env, addon }) => {
  const envConfig = require(`./build_utils/webpack.${env}.js`);

  return merge(commonConfig, envConfig, ...getAddons(addon));
};
