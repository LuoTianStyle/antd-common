import React from 'react';
import { withRouter } from 'react-router-dom';
import { RouteUser } from '@/router';
const UserLayout = (props) => {
    const { location } = props;
    const currentPath = location.pathname;
    const currentPane = RouteUser.find((item) => item.path === currentPath);
    const Content = currentPane.component;
    return <Content />;
};

export default withRouter(UserLayout);
