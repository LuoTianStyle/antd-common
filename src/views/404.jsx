import React from 'react';
import { Result, Button } from 'antd';
import { withRouter } from 'react-router-dom';
import TabRouter from '@/components/TabRouter';
const Error = (props) => {
    const { history, remove } = props;
    const backHome = () => {
        const currentRoute = history.location.pathname.substr(1);
        if (remove) {
            remove(currentRoute, 'index');
        } else {
            history.push('/index');
        }
    };
    return (
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={
                <Button type="primary" onClick={backHome}>
                    Back Home
                </Button>
            }
        />
    );
};

export default withRouter(TabRouter(Error));
