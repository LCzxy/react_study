import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  mfsu: {},
  proxy: {
    '/api': {
      target: 'http://localhost:8888/',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
  fastRefresh: {},
});
