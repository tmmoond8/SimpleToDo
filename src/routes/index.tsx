/** @jsx jsx */
import { jsx } from '@emotion/core';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
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
        {renderRoutes(routes)}
      </div>
    </Router>
  );
}
