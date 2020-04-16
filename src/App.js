import React from 'react'
import { HashRouter, Switch, Redirect, Route } from 'react-router-dom'
import LayoutMenu from './layout'
const App = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/:name" component={LayoutMenu} />
      <Redirect to="/index" />
    </Switch>
  </HashRouter>
)
export default App
