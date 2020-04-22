import React, { useState, useEffect } from 'react';
import { message, Menu, Dropdown, Badge, Avatar } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    BellOutlined,
    UserOutlined,
} from '@ant-design/icons';
import styled from 'styled-components';
import ColorPicker from '@/components/ColorPicker/index';
const Containner = styled.div`
    width: 100%;
    height: 64px;
    line-height: 64px;
    display: flex;
    align-items: center;
`;
const Trigger = styled.div`
    font-size: 20px;
    line-height: 64px;
    padding: 0 20px;
    cursor: pointer;
    transition: color 0.3s;
    &:hover {
        color: #f1892d;
    }
`;
const Right = styled.div`
    flex: 1;
    display: flex;
    padding-right: 24px;
    justify-content: flex-end;
    align-items: center;
`;
const Theme = styled.div`
    padding: 0 20px;
    transition: 0.3s;
    &:hover {
        background: rgba(0, 0, 0, 0.025);
    }
`;
const Notice = styled(Trigger)`
    &:hover {
        background: rgba(0, 0, 0, 0.025);
        color: rgba(0, 0, 0, 0.65);
    }
`;
const Info = styled(Theme)``;
const menu = (
    <Menu>
        <Menu.Item>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://www.alipay.com/"
            >
                1st menu item
            </a>
        </Menu.Item>
        <Menu.Item>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://www.taobao.com/"
            >
                2nd menu item
            </a>
        </Menu.Item>
        <Menu.Item>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://www.tmall.com/"
            >
                3rd menu item
            </a>
        </Menu.Item>
    </Menu>
);
const Header = (props) => {
    const { collapsed, toggle } = props;
    const [color, setColor] = useState('#f1892d');
    const changeColor = (color) => {
        window.less
            .modifyVars({
                '@primary-color': color,
            })
            .then(() => {
                localStorage.setItem(
                    'user-theme',
                    JSON.stringify({ '@primary-color': color })
                );
                setColor(color);
                message.success('更换主题颜色成功');
            });
    };
    useEffect(() => {
        const userTheme = JSON.parse(localStorage.getItem('user-theme'));
        if (userTheme) {
            const defaultColor = userTheme['@primary-color'];
            window.less.modifyVars({
                '@primary-color': defaultColor,
            });
            setColor(defaultColor);
        }
    }, []);
    return (
        <Containner>
            <Trigger onClick={toggle}>
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Trigger>
            <Right>
                <Theme>
                    <ColorPicker color={color} onChange={changeColor} />
                </Theme>
                <Notice>
                    <Badge count={99} offset={[6, 0]}>
                        <BellOutlined style={{ fontSize: 20 }} />
                    </Badge>
                </Notice>
                <Info>
                    <Dropdown overlay={menu}>
                        <div>
                            <Avatar size={32} icon={<UserOutlined />} />
                            <span style={{ marginLeft: 8 }}>{'流~星~泪'}</span>
                        </div>
                    </Dropdown>
                </Info>
            </Right>
        </Containner>
    );
};
export default Header;
