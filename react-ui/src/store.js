import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import comments from './data/comments';
import posts from './data/posts';
import rootReducer from './reducers/reduce'; // Or wherever you keep your reducers

const defaultState = {
  posts,
  comments
};

// Create a history of your choosing (we're using a browser history in this case)
const history = createBrowserHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  connectRouter(history)(rootReducer),
  defaultState,
  composeEnhancers(applyMiddleware(middleware))
);

export { history };
export default store;
