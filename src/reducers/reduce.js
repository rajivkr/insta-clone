import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import posts from './posts';
import comments from './comments';

const rootReducer = combineReducers({
    posts,
    comments,
    routing: routerReducer
});

export default rootReducer;