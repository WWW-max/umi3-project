export default [
    { 
        path: '/',
        component: '@/pages/index',
        name: '首页',
    },
    { 
        path: '/test',
        component: '@/pages/Test',
        name: '测试页面',
    },
    {
        path: '/test2',
        name: '菜单项',
        routes: [
            {
                path: '/test2/test21',
                name: 'test21',
                component: '@/pages/Test2/Test21.jsx',
            },
            {
                path: 'test2/test22',
                name: 'test22',
                component: '@/pages/Test2/Test22.jsx',
            }
        ]
    }
]