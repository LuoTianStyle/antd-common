import React from 'react';
import { Button } from 'antd';
import { withRouter } from 'react-router-dom';
import TabRouter from '@/components/TabRouter';
const RouteThree = (props) => {
    const { history, remove } = props;
    const goto = () => {
        history.push('error');
    };
    const close = () => {
        const currentRoute = history.location.pathname.substr(1);
        if (remove) {
            remove(currentRoute);
        } else {
            history.push('/index');
        }
    };
    const closeAndGoto = () => {
        const currentRoute = history.location.pathname.substr(1);
        if (remove) {
            remove(currentRoute, 'index');
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
export default withRouter(TabRouter(RouteThree));
