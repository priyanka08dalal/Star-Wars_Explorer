const path = require('path')
const { TypewizPlugin, typewizCollectorMiddleware } = require('typewiz-webpack');

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: "./app.ts",
    output: {
      filename: "bundle.js"
    },
    resolve: {
      // Add `.ts` and `.tsx` as a resolvable extension.
      extensions: [".ts", ".tsx", ".js", '.jsx']
    },
    module: {
      rules: [
        // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
        { test: /\.tsx?$/, 
            loaders: ['awesome-typescript-loader', 'typewiz-webpack'] }
      ]
    },
    plugins: [
        new CheckerPlugin(),
        new TypewizPlugin()
      ],
    
      devServer: {
        before: function(app) {
          typewizCollectorMiddleware(app, 'collected-types.json');
        }
      }
  };