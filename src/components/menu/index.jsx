import React from 'react';
import { Menu } from 'antd';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { RouteBasicMap } from '@/router';
const { SubMenu } = Menu;
const { Item } = Menu;
const MenuName = styled.span``;
const Menus = (props) => {
    const { location, history } = props;
    const selectedKey = location.pathname;
    const clickMenu = (e) => {
        history.push(e.key);
    };
    const menuHandle = (item) => {
        if (item.isShow !== false && item.children) {
            return (
                <SubMenu
                    key={item.path}
                    title={
                        <span>
                            {item.icon}
                            <MenuName>{item.name}</MenuName>
                        </span>
                    }
                >
                    {item.children.map((item) => menuHandle(item))}
                </SubMenu>
            );
        } else if (item.isShow !== false) {
            return (
                <Item onClick={clickMenu} key={item.path}>
                    {item.icon}
                    <MenuName>{item.name}</MenuName>
                </Item>
            );
        } else {
            return null;
        }
    };
    return (
        <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={['/index']}
            selectedKeys={[selectedKey]}
        >
            {RouteBasicMap.map((item) => menuHandle(item))}
        </Menu>
    );
};

export default withRouter(Menus);
