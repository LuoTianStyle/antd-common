const router = [
    {
        name: '首页',
        path: 'index',
    },
    {
        name: '路由',

        path: 'route',
        children: [
            {
                name: '测试1',
                path: 'route_test_1',
            },
            {
                name: '测试2',
                path: 'route_test_2',
            },
            {
                name: '测试3',
                path: 'route_test_3',
            },
        ],
    },
];
export default router;
