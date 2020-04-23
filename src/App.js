import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from '@/components/PrivateRoute';
import LoadableComponent from '@/utils/loadable';
const BasicLayout = LoadableComponent(import('@/layout/BasicLayout'));
const UserLayout = LoadableComponent(import('@/layout/UserLayout'));
const App = () => (
    <HashRouter>
        <Switch>
            <Route path="/login" component={UserLayout} />
            <Route path="/register" component={UserLayout} />
            <PrivateRoute path="/" component={BasicLayout} />
        </Switch>
    </HashRouter>
);
export default App;
