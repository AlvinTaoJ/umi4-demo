import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  routes: [
    {
      path: '/',
      component: '../layout/BaseLayout',
      routes: [
        {
          name: '首页',
          path: '/home',
          routes: [
            {
              name: 'path1',
              path: '/home/path1',
              component: './Home',
            },
            {
              name: 'path2',
              path: '/home/path2',
              component: './Home',
            },
          ],
        },
        {
          name: '权限演示',
          path: '/access',
          routes: [
            {
              name: 'path1',
              path: '/access/path1',
              component: './Access',
            },
            {
              name: 'path2',
              path: '/access/path2',
              component: './Access',
            },
          ],
        },
        {
          name: ' CRUD 示例',
          path: '/table',
          component: './Table',
        },
        {
          name: 'Demo',
          path: '/demo',
          routes: [
            {
              name: 'TableNew',
              path: '/demo/tableNew',
              component: './Demo/TableNew',
            },
            {
              name: 'Demo',
              path: '/demo/table',
              component: './Demo',
            },
            {
              name: 'Zustand',
              path: '/demo/zustand',
              component: './Demo/Zustand',
            },
            {
              name: 'Context',
              path: '/demo/context',
              component: './Demo/Context',
            },
            {
              name: 'Tree',
              path: '/demo/tree',
              component: './Demo/Tree',
            },
          ],
        },
      ],
    },
  ],
  npmClient: 'yarn',
});
