import { HashRouter, Route, Switch } from "react-router-dom";

import React from "react";
import routes from "./routes";
import Page from './components/Page';

localStorage.setItem('streams', `[{
  "name": "Default stream",
  "env": "Default",
  "cloudProvider": "aws",
  "region": "us-east-1",
  "preset": "Trial"
}]`)

const App = () => (
  <HashRouter>
    <Switch>
      {routes.map(({ path, component: Component, exact }) => (
        <Route
          key={path}
          path={path}
          component={path === "/"
            ? Component // Don't chrome the dashboard page (which is a CRC clone)
            : props => <Page><Component {...props} /></Page>
          }
          exact={exact}
        />
      ))}
    </Switch>
  </HashRouter>
);

export default App;
