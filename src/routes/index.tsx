/** @jsx jsx */
import { jsx } from '@emotion/core';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import lang from '../libs/internationalizer';
import routes from './constant';

export default function AppRouter() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">{lang`TODAY`}</Link>
          </li>
          <li>
            <Link to="/write">{lang`WRITE`}</Link>
          </li>
        </ul>
        {renderRoutes(routes)}
      </div>
    </Router>
  );
}
