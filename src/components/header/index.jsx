import React, { useState, useEffect } from 'react';
import { Menu, Dropdown, Badge, Avatar } from 'antd';
import { withRouter } from 'react-router-dom';
import screenfull from 'screenfull';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    BellOutlined,
    UserOutlined,
    SettingOutlined,
    LogoutOutlined,
    FullscreenOutlined,
    FullscreenExitOutlined,
    AntDesignOutlined,
} from '@ant-design/icons';
import styled from 'styled-components';
import ColorPicker from '@/components/ColorPicker/index';
const { Item } = Menu;
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
const Info = styled(Theme)`
    padding-right: 0;
    cursor: pointer;
`;
const UserInfo = styled.div`
    display: flex;
    align-items: center;
`;
const NickName = styled.div`
    max-width: 150px;
    padding: 0 15px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`;
const ItemMy = styled(Item)`
    width: 182px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 18px;
    font-size: 14px;
`;
const UserItem = styled(ItemMy)`
    text-align: center;
    padding-left: 12px;
    cursor: auto;
`;
const NickNameItem = styled.div`
    padding-top: 5px;
    line-height: 25px;
    text-align: center;
    white-space: normal;
    word-break: break-all;
`;
const Header = (props) => {
    const { collapsed, toggle, history, color, changeColor } = props;
    const [isFullscreen, setIsFullscreen] = useState(false);
    const toggleFullscreen = () => {
        if (screenfull.isEnabled) {
            screenfull.toggle().then(() => {
                setIsFullscreen(screenfull.isFullscreen);
            });
        }
    };
    const handleResize = () => {
        if (screenfull.isFullscreen !== isFullscreen) {
            setIsFullscreen(screenfull.isFullscreen);
        }
    };
    const logout = () => {
        localStorage.removeItem('userInfo');
        history.push('/login');
    };
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return function cleanup() {
            window.removeEventListener('resize', handleResize);
        };
    });
    const menu = (
        <Menu>
            <UserItem>
                <Avatar size={64} src="/logo192.png" />
                <NickNameItem>流~星~泪流~星~泪流~星~泪</NickNameItem>
            </UserItem>
            <ItemMy>
                <UserOutlined />
                个人中心
            </ItemMy>
            <ItemMy>
                <SettingOutlined />
                个人设置
            </ItemMy>
            <ItemMy onClick={() => toggleFullscreen()}>
                {isFullscreen ? (
                    <>
                        <FullscreenExitOutlined />
                        退出全屏
                    </>
                ) : (
                    <>
                        <FullscreenOutlined />
                        切换全屏
                    </>
                )}
            </ItemMy>
            <ItemMy onClick={() => changeColor('#f1892d')}>
                <AntDesignOutlined />
                恢复默认主题
            </ItemMy>
            <Menu.Divider />
            <ItemMy onClick={logout}>
                <LogoutOutlined />
                退出登录
            </ItemMy>
        </Menu>
    );
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
                    <Dropdown overlay={menu} trigger={['click']}>
                        <UserInfo>
                            <Avatar size={32} src="/logo192.png" />
                            <NickName>{'流~星~泪流~星~泪流~星~泪'}</NickName>
                        </UserInfo>
                    </Dropdown>
                </Info>
            </Right>
        </Containner>
    );
};
export default withRouter(Header);
