/** @jsx jsx */
import { jsx } from '@emotion/core';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { RouteConfig } from 'react-router-config';
import routes from './constant';

export default function AppRouter() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/write">Write</Link>
          </li>
        </ul>

        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </div>
    </Router>
  );
}

function RouteWithSubRoutes(route: RouteConfig) {
  const { path, routes, component } = route;
  const Component = component as React.ComponentType<{
    routes: RouteConfig[] | undefined;
  }>;
  return (
    <Route
      path={path}
      render={(props) => <Component {...props} routes={routes} />}
    />
  );
}
