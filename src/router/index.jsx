import React from 'react';
import { HomeOutlined, LinkOutlined } from '@ant-design/icons';
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
];
export const RouteMap = [
    { name: '首页', path: 'index', component: Index, closable: false },
    { name: '测试1', path: 'route_test_1', component: RouteOne },
    { name: '测试2', path: 'route_test_2', component: RouteTwo },
    {
        name: '测试3',
        path: 'route_test_3',
        component: RouteThree,
        closable: false,
    },
    {
        name: '测试4',
        path: 'route_test_4',
        component: RouteThree,
    },
];
