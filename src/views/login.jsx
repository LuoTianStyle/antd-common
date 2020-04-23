import React from 'react';
import { Button } from 'antd';
import { withRouter } from 'react-router-dom';
const Login = (props) => {
    const { history } = props;
    const loginHandle = () => {
        localStorage.setItem('userInfo', JSON.stringify({ id: 16 }));
        history.push('/index');
    };
    return (
        <Button type="primary" onClick={loginHandle}>
            登录
        </Button>
    );
};

export default withRouter(Login);
