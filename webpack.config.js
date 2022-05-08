const { merge } = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa-react');

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: 'single-spa-todos',
    projectName: 'nav',
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {});
};
