import Raven from 'raven-js';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import App from './components/App';
// css
import './css/style.css';
import { sentry_url } from './data/config';
import store, { history } from './store';

Raven.config(sentry_url).install();
render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route path="/" component={App} />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
