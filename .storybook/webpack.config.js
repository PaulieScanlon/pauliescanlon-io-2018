const path = require("path");

module.exports = (baseConfig, env, config) => {
  config.module.rules.push({
    test: /\.(tsx?|ts?)$/,
    loader: "babel-loader!ts-loader",
    exclude: /node_modules/
  });
  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};
