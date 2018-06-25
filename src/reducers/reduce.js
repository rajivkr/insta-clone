import { routerReducer } from 'connected-react-router';
import { combineReducers } from 'redux';
import comments from './comments';
import posts from './posts';

const rootReducer = combineReducers({
  posts,
  comments,
  routing: routerReducer
});

export default rootReducer;
