import { defineConfig } from 'umi';
import routes from './routes.js';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  fastRefresh: {},
});
