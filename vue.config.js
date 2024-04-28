const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: ["quasar"],

  chainWebpack: (config) => {
    config.module
      .rule("typescript")
      .test(/\.tsx?$/)
      .use("ts-loader")
      .loader("ts-loader")
      .end();
  },

  configureWebpack: {
    resolve: {
      extensions: [".js", ".ts", ".tsx", ".vue", ".json"],
      alias: {
        "@": __dirname + "/src",
      },
    },
    devServer: {
      // allowedHosts: "all",
      // proxy: {
      //   "/ws": {
      //     target: "https://n88zxx-8080.csb.app",
      //     ws: true,
      //     secure: true,
      //   },
      // },
    },
  },

  publicPath: "/",

  pluginOptions: {
    quasar: {
      importStrategy: "kebab",
      rtlSupport: false,
    },
  },
});
