import React from 'react';
import { Menu } from 'antd';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { Router } from '@/router';
const { SubMenu } = Menu;
const { Item } = Menu;
const MenuName = styled.span``;
const Menus = (props) => {
    const { match, history } = props;
    const selectedKey = match.params.name;
    const clickMenu = (e) => {
        history.push(`/${e.key}`);
    };
    return (
        <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={['index']}
            selectedKeys={[selectedKey]}
        >
            {Router.map((item) => {
                if (item.isShow !== false) {
                    if (item.children) {
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
                                {item.children.map((item) => {
                                    if (item.isShow !== false) {
                                        return (
                                            <Item
                                                onClick={clickMenu}
                                                key={item.path}
                                            >
                                                {item.icon}
                                                <MenuName>{item.name}</MenuName>
                                            </Item>
                                        );
                                    }
                                })}
                            </SubMenu>
                        );
                    } else {
                        return (
                            <Item onClick={clickMenu} key={item.path}>
                                {item.icon}
                                <MenuName>{item.name}</MenuName>
                            </Item>
                        );
                    }
                }
            })}
        </Menu>
    );
};

export default withRouter(Menus);
