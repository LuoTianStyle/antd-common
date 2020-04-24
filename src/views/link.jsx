import React from 'react';
import { Button } from 'antd';
import { withRouter, Link } from 'react-router-dom';
import TabRouter from '@/components/TabRouter';
const LinkTest = (props) => {
    const { history, remove } = props;
    const goto = () => {
        history.push('error');
    };
    const close = () => {
        const currentRoute = history.location.pathname;
        if (remove) {
            remove(currentRoute);
        } else {
            history.push('/index');
        }
    };
    const closeAndGoto = () => {
        const currentRoute = history.location.pathname;
        if (remove) {
            remove(currentRoute, '/index');
        } else {
            history.push('/index');
        }
    };
    return (
        <>
            <Button style={{ margin: '10px' }} type="primary" onClick={goto}>
                跳转到空
            </Button>
            <Button style={{ margin: '10px' }} type="primary" onClick={close}>
                关闭当前
            </Button>
            <Link
                to={{
                    pathname: `/hide/1`,
                    query: { id: 1 },
                    state: { data: 'hello' },
                }}
                style={{ margin: '10px' }}
            >
                跳转到隐藏路由1
            </Link>
            <Link
                to={{
                    pathname: `/hide/2`,
                    query: { id: 2 },
                    state: { data: 'hello' },
                }}
                style={{ margin: '10px' }}
            >
                跳转到隐藏路由2
            </Link>
            <Button
                style={{ margin: '10px' }}
                type="primary"
                onClick={closeAndGoto}
            >
                关闭当前并跳转到首页
            </Button>
        </>
    );
};
export default withRouter(TabRouter(LinkTest));
