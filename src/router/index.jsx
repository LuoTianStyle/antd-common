import React from 'react';
import { HomeOutlined, LinkOutlined, UserOutlined } from '@ant-design/icons';
import TreeUtil from '@/utils/tree';
import Index from '@/views/index';
import RouteOne from '@/views/routeOne';
import RouteTwo from '@/views/routeTwo';
import RouteThree from '@/views/routeThree';
export const Router = [
    {
        name: '首页',
        path: 'index',
        icon: <HomeOutlined />,
        component: Index,
        closable: false,
    },
    {
        name: '路由',
        icon: <LinkOutlined />,
        path: 'route',
        children: [
            {
                name: '测试1',
                path: 'route_test_1',
                icon: <LinkOutlined />,
                component: RouteOne,
            },
            {
                name: '测试2',
                path: 'route_test_2',
                icon: <LinkOutlined />,
                component: RouteTwo,
            },
            {
                name: '测试3',
                path: 'route_test_3',
                icon: <LinkOutlined />,
                component: RouteThree,
            },
            {
                name: '测试4',
                path: 'route_test_4',
                icon: <LinkOutlined />,
                isShow: false,
                component: RouteThree,
            },
        ],
    },
    {
        name: '用户管理',
        path: 'user',
        icon: <UserOutlined />,
        component: Index,
    },
];
const RouteArr = [];
const routeTree = {
    children: Router,
};
const callbacks = (tree, stack) => {
    if (!tree.children) {
        const text = [];
        stack.forEach((item) => {
            if (item.name) {
                text.push(item.name);
            }
        });
        tree.text = text;
        RouteArr.push(tree);
    }
};
TreeUtil.dfsForEach(routeTree, callbacks);
console.log(RouteArr);
export const RouteMap = RouteArr;
