import React, { useState } from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';
import Headers from '@/components/header';
import Menus from '@/components/menu';
import Right from '@/components/right';
import Footer from '@/components/footer';

const { Header, Sider, Content } = Layout;

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
`;
const RightHeader = styled(Header)`
    position: fixed;
    top: 0;
    right: 0;
    transition: all 0.2s;
    z-index: 9;
    width: ${(props) =>
        props.extend === 'true' ? 'calc(100% - 80px)' : 'calc(100% - 256px)'};
    background: #fff !important;
    padding: 0;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
    display: flex;
`;
const RightContent = styled(Content)`
    position: relative;
    margin-top: 64px;
    min-height: calc(100vh - 64px);
`;
const BasicLayout = (props) => {
    const [collapsed, setCollapsed] = useState(false);
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
                <Menus />
            </LeftSider>
            <RightSider extend={collapsed.toString()}>
                <RightHeader extend={collapsed.toString()}>
                    <Headers
                        collapsed={collapsed}
                        toggle={() => setCollapsed(!collapsed)}
                    />
                </RightHeader>
                <RightContent>
                    <Right />
                    <Footer />
                </RightContent>
            </RightSider>
        </Layout>
    );
};

export default BasicLayout;
