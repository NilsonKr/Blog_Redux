import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import postsReducer from './postsReducer';
import todosReducer from './todosReducer';
import querysReducer from './querysReducer';

export default combineReducers({
	usersReducer,
	postsReducer,
	todosReducer,
	querysReducer,
});
