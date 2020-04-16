import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import router from '../router';
import TabMenu from './tabMenu';
import Footer from '@/components/footer';
const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;
const LeftSider = styled(Sider)`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    overflow: auto;
    box-shadow: 2px 0 8px 0 rgba(29, 35, 41, 0.05);
`;
const Logo = styled.div`
    height: 32px;
    background: #ccc;
    margin: 16px;
`;
const RightSider = styled(Layout)`
    padding-left: ${(props) => (props.extend === 'true' ? '80px' : '256px')};
    transition: all 0.2s;
    .trigger {
        font-size: 20px;
        line-height: 64px;
        padding: 0 24px;
        cursor: pointer;
        transition: color 0.3s;
    }
    .trigger:hover {
        color: #1890ff;
    }
`;
const RightHeader = styled(Header)`
    position: fixed;
    top: 0;
    right: 0;
    transition: all 0.2s;
    z-index: 9;
    width: ${(props) =>
        props.extend === 'true' ? 'calc(100% - 80px)' : 'calc(100% - 256px)'};
    background: #fff;
    padding: 0;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
`;
const RightContent = styled(Content)`
    position: relative;
    margin-top: 64px;
    min-height: calc(100vh - 64px);
`;
const ContentCenter = styled.div`
    margin: 24px 24px 0 24px;
    min-height: calc(100vh - 64px - 50px - 50px - 24px);
    background: #fff;
    padding: 24px;
`;
const ContentBreadcrumb = styled(Breadcrumb)`
    background: #fff;
    height: 50px;
    line-height: 50px;
    padding-left: 24px;
`;

const BasicLayout = (props) => {
    const selectedKey = props.match.params.name;
    const [collapsed, setCollapsed] = useState(false);
    const toggle = () => {
        setCollapsed(!collapsed);
    };
    const clickMenu = (evt) => {
        props.history.push(`/${evt.key}`);
    };
    return (
        <Layout>
            <LeftSider
                theme="light"
                trigger={null}
                collapsible
                width={256}
                collapsed={collapsed}
            >
                <Logo />
                <Menu
                    theme="light"
                    mode="inline"
                    defaultSelectedKeys={['index']}
                    selectedKeys={[selectedKey]}
                >
                    {router.map((item) => {
                        if (item.children) {
                            return (
                                <SubMenu
                                    key={item.path}
                                    mode="inline"
                                    inlineCollapsed={true}
                                    title={
                                        <span>
                                            {/* <Icon type="user" /> */}
                                            {/* <UserOutlined /> */}
                                            {item.name}
                                        </span>
                                    }
                                >
                                    {item.children &&
                                        item.children.map((item) => {
                                            return (
                                                <Menu.Item
                                                    onClick={clickMenu}
                                                    key={item.path}
                                                >
                                                    {item.name}
                                                </Menu.Item>
                                            );
                                        })}
                                </SubMenu>
                            );
                        } else {
                            return (
                                <Menu.Item onClick={clickMenu} key={item.path}>
                                    {item.name}
                                </Menu.Item>
                            );
                        }
                    })}
                </Menu>
            </LeftSider>
            <RightSider extend={collapsed.toString()}>
                <RightHeader extend={collapsed.toString()}>
                    {React.createElement(
                        collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                        {
                            className: 'trigger',
                            onClick: toggle,
                        }
                    )}
                </RightHeader>
                <RightContent>
                    <ContentBreadcrumb>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </ContentBreadcrumb>
                    <ContentCenter>
                        <TabMenu />
                    </ContentCenter>
                    <Footer />
                </RightContent>
            </RightSider>
        </Layout>
    );
};

export default BasicLayout;
