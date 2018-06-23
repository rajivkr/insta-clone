import React from 'react';
import { Provider } from 'react-redux';
import store, { history } from '../store';
import { Router, Route, Switch } from 'react-router-dom';
import Single from './Single';
import App from './App';

const ReactRouter = () => (
    <Provider store={store}>
        <Router history={history}>
            <div>
                <Switch>
                    <Route path='/' component={App} />
                    <Route path='/view/:postId' component={Single} />
                </Switch>
            </div>
        </Router>
    </Provider>
);


export default ReactRouter;
