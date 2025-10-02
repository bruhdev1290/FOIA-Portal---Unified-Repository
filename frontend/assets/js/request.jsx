import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { appEnv } from 'settings';
import ConfirmationTestPage from './pages/confirmation_test';
import AgencyComponentRequestPage from './pages/agency_component_request';
import NotFoundPage from './pages/not_found';

const history = createBrowserHistory({
  basename: '/request',
});

// Set some globals
// Not sure if there's a better pattern for sharing globals
window.app = {
  history,
};

render(
  <Router history={history}>
    <Switch>
      { appEnv !== 'production'
        // This is a test page to help with styling and testing
        && (
        <Route
          path="/agency-component/:agencyComponentId/confirmation"
          component={ConfirmationTestPage}
        />
        )}
      <Route path="/agency-component/:agencyComponentId" component={AgencyComponentRequestPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>,
  document.getElementById('react-app'),
);
