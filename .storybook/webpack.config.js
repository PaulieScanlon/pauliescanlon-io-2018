const path = require("path");
const TSDocgenPlugin = require("react-docgen-typescript-webpack-plugin");

module.exports = (baseConfig, env, config) => {
  config.module.rules.push({
    test: /\.(tsx?|ts?)$/,
    use: [
      "babel-loader",
      {
        loader: "react-docgen-typescript-loader",
        options: {
          includes: ["src.*\\.tsx$"],
          excludes: ["src.*\\stories\\.tsx$"]
        }
      }
    ]
  });
  config.plugins.push(new TSDocgenPlugin());
  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};
