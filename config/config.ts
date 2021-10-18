import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  title: '后台管理系统',
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
  routes: routes,
});
