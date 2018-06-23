import { createBrowserHistory } from 'history';
import { syncHistoryWithStore } from 'react-router-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/reduce';
import comments from './data/comments';
import posts from './data/posts';

const defaultState = {
    posts,
    comments
};
const store = createStore(rootReducer, defaultState);
export const history = syncHistoryWithStore(createBrowserHistory(), store);

export default store;