import React, { useState, useEffect } from 'react';
import { Tabs, Button, Menu, Dropdown } from 'antd';
import { AlignRightOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { RouteMap } from '@/router';
import RouterContext from '@/context/routerContext';
const { TabPane } = Tabs;
const TabWrapper = styled(Tabs)`
    margin: 24px 24px 0 24px;
    min-height: calc(100vh - 64px - 50px - 24px);
    background: #fff;
    padding: 24px;
`;
const TabContent = (props) => {
    const { history, match } = props;
    const paneActive = RouteMap.filter((item) => item.closable === false);
    const [activeKey, setActiveKey] = useState(paneActive[0].path);
    const [panes, setPanes] = useState(paneActive);
    useEffect(() => {
        const currentPath = props.history.location.pathname.substr(1);
        const path_array = panes.map((item) => item.path);
        if (!path_array.includes(currentPath)) {
            const currentPane = RouteMap.find(
                (item) => item.path === currentPath
            );
            const closable =
                currentPane.closable === undefined
                    ? true
                    : currentPane.closable;
            const newPane = {
                name: currentPane.name,
                path: currentPath,
                closable,
            };
            setPanes([...panes, newPane]);
        }
        setActiveKey(currentPath);
    }, [props, panes]);

    const onChange = (activeKey) => {
        setActiveKey(activeKey);
    };
    const remove = (targetKey, historys) => {
        let activeKeyTmp = activeKey;
        let isRouteChange = false;
        const currentIndex = panes.findIndex((item) => item.path === targetKey);
        let lastIndex = panes.findIndex((pane) => pane.path === targetKey) - 1;
        const currentPanes = panes.filter((pane) => pane.path !== targetKey);
        if (panes.length) {
            if (lastIndex >= 0) {
                if (activeKeyTmp === targetKey) {
                    activeKeyTmp = currentPanes[lastIndex].path;
                    isRouteChange = true;
                }
            } else {
                activeKeyTmp = currentPanes[0].path;
            }
            lastIndex =
                currentIndex === panes.length - 1
                    ? currentIndex - 1
                    : currentIndex + 1;
            const history_route = isRouteChange
                ? panes[lastIndex].path
                : activeKeyTmp;
            setPanes(currentPanes);
            setActiveKey(activeKeyTmp);
            history.push(historys || history_route);
        }
    };
    const onEdit = (targetKey, action) => {
        if (action === 'remove') {
            remove(targetKey);
        }
    };
    const onTabClick = (e) => {
        if (e !== match.params.name) {
            history.push(`/${e}`);
        }
    };
    const renderList = () => {
        return panes.map((pane) => {
            const currentPane = RouteMap.find(
                (item) => item.path === pane.path
            );
            const Content = currentPane.component;
            return (
                <TabPane
                    tab={pane.name}
                    key={pane.path}
                    closable={pane.closable === false ? false : true}
                >
                    <Content />
                </TabPane>
            );
        });
    };

    const menu = () => (
        <Menu>
            <Menu.Item
                key="0"
                onClick={closeOther}
                disabled={
                    panes.filter((item) => item.closable !== false).length === 1
                }
            >
                关闭其他页面
            </Menu.Item>
            <Menu.Item key="1" onClick={closeAll}>
                关闭全部页面
            </Menu.Item>
        </Menu>
    );

    const operations = () => (
        <Dropdown overlay={menu()} trigger={['click']} placement="bottomLeft">
            <Button>
                <AlignRightOutlined />
            </Button>
        </Dropdown>
    );
    const closeAll = () => {
        const panesNew = panes.filter((item) => item.closable === false);
        setPanes(panesNew);
        const isActiveHas = panesNew.find((item) => item.path === activeKey);
        if (!isActiveHas) {
            history.push(panesNew[0].path);
        }
    };
    const closeOther = () => {
        const currentRoute = history.location.pathname.substr(1);
        const panesNew = panes.filter(
            (item) => item.closable === false || item.path === currentRoute
        );
        setPanes(panesNew);
    };
    return (
        <RouterContext.Provider
            value={{
                remove: (currentRoute, history) => {
                    remove(currentRoute, history);
                },
                tabs: panes,
            }}
        >
            <TabWrapper
                tabBarExtraContent={
                    panes.filter((item) => item.closable !== false).length === 0
                        ? null
                        : operations()
                }
                hideAdd
                onChange={onChange}
                activeKey={activeKey}
                type="editable-card"
                onEdit={onEdit}
                onTabClick={onTabClick}
            >
                {renderList()}
            </TabWrapper>
        </RouterContext.Provider>
    );
};

export default withRouter(TabContent);
