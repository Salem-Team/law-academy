const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});

// vue.config.js
module.exports = {
  // ... أي تكوينات أخرى
  pluginOptions: {
    foo: {
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
    },
  },
};
