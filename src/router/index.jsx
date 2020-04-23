import React from 'react';
import {
    HomeOutlined,
    LinkOutlined,
    UserOutlined,
    BulbOutlined,
} from '@ant-design/icons';
import TreeUtil from '@/utils/tree';
import LoadableComponent from '@/utils/loadable';
const Login = LoadableComponent(import('@/views/login'));
const Register = LoadableComponent(import('@/views/register'));
const Index = LoadableComponent(import('@/views/index'));
const RouteOne = LoadableComponent(import('@/views/routeOne'));
const RouteTwo = LoadableComponent(import('@/views/routeTwo'));
const RouteThree = LoadableComponent(import('@/views/routeThree'));
const Works = LoadableComponent(import('@/views/works'));
const Error = LoadableComponent(import('@/views/404'));
const RouteArr = [];
const Router = [
    {
        path: '/user',
        children: [
            {
                name: '登录',
                path: 'login',
                component: Login,
            },
            {
                name: '注册',
                path: 'register',
                component: Register,
            },
        ],
    },
    {
        path: '/',
        children: [
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
                        children: [
                            {
                                name: '测试1',
                                path: 'route_test_1',
                                icon: <LinkOutlined />,
                                component: RouteOne,
                            },
                        ],
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
                component: RouteThree,
            },
            {
                name: '我的作品',
                path: 'works',
                icon: <BulbOutlined />,
                component: Works,
            },
            {
                name: '404',
                path: '404',
                isShow: false,
                component: Error,
            },
        ],
    },
];
const routeTree = Object.assign({}, Router[1]);
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
export const RouteBasic = [...RouteArr];
export const RouteUser = [...Router[0].children];
export const RouteBasicMap = [...Router[1].children];
