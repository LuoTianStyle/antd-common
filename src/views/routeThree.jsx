import React from 'react';
import { Button } from 'antd';
import { withRouter } from 'react-router-dom';
import TabRouter from '@/components/TabRouter';
const RouteThree = (props) => {
    const { history, remove } = props;
    console.log(props);
    const goto = () => {
        history.push('route_test_1');
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
            remove(currentRoute, 'route_test_1');
        } else {
            history.push('/route_test_1');
        }
    };
    return (
        <div>
            <div>测试3</div>
            <Button onClick={goto}>跳转到测试1</Button>
            <Button onClick={close}>关闭当前</Button>
            <Button onClick={closeAndGoto}>关闭当前并跳转到测试1</Button>
        </div>
    );
};
export default withRouter(TabRouter(RouteThree));
