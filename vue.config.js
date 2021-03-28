module.exports = {
  publicPath: "",
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "src/assets/sass/main.scss";`,
      },
    },
  },
};
