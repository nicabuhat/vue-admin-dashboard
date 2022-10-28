const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
        @import "@/global-styles/colors.scss";
        @import "@/global-styles/typography.scss";
        `,
      },
    },
  },
});
