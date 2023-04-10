import { defineConfig } from 'umi';
import routes from './routes.js';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // routes,
  fastRefresh: {},
  layout: {
    // 开启项目视图骨架配置
    // 支持任何不需要 dom 的
    // https://procomponents.ant.design/components/layout#prolayout
    name: 'Ant Design',
    locale: true,
    layout: 'side',
  },
});
