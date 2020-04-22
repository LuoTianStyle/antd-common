import React from 'react'
import { HashRouter, Switch, Redirect, Route } from 'react-router-dom'
import BasicLayout from './layout/BasicLayout'
const App = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/:name" component={BasicLayout} />
      <Redirect to="/index" />
    </Switch>
  </HashRouter>
)
export default App