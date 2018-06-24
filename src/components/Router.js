import React from 'react';
import { Provider } from 'react-redux';
import { Route, Router, Switch } from 'react-router-dom';
import store, { history } from '../store';
import App from './App';
import Single from './Single';

const ReactRouter = () => (
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Switch>
          <Route path="/" component={App} />
          <Route path="/view/:postId" component={Single} />
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default ReactRouter;
