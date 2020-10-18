const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = (env, argv) => ({
  module: {
    rules: [
      //   {
      //     test: /\.tsx?$/,
      //     use: "ts-loader",
      //     exclude: /node_modules/,
      //   },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
    ],
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js",
    },
  },
  plugins: [new VueLoaderPlugin()],
});
