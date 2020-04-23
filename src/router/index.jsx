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
const Link = LoadableComponent(import('@/views/link'));
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
                        name: '嵌套路由',
                        path: 'innner',
                        icon: <LinkOutlined />,
                        children: [
                            {
                                name: '测试',
                                path: 'test',
                                icon: <LinkOutlined />,
                                component: Link,
                            },
                        ],
                    },
                    {
                        name: '隐藏',
                        path: 'hide',
                        icon: <LinkOutlined />,
                        isShow: false,
                        component: Link,
                    },
                ],
            },
            {
                name: '用户管理',
                path: 'user',
                icon: <UserOutlined />,
                component: Index,
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
