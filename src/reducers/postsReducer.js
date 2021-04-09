import { POSTS_UPDATE, POSTS_ERROR, POSTS_LOADING } from '../types/postsTypes.js';

const INITIAL_STATE = {
	posts: [],
	loading: false,
	error: null,
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case POSTS_UPDATE:
			return { ...state, loading: false, posts: action.payload };
			break;
		case POSTS_LOADING:
			return { ...state, loading: true, error: null };
			break;
		case POSTS_ERROR:
			return { ...state, loading: false, error: action.payload };
			break;
		default:
			return state;
			break;
	}
};
