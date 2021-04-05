import { USERS_UPDATE, USERS_ERROR, USERS_LOADING } from '../types/usersTypes';

const INITIAL_STATE = {
	error: null,
	loading: false,
	users: [],
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case USERS_UPDATE:
			return { ...state, loading: false, users: action.payload };
			break;
		case USERS_LOADING:
			return { ...state, loading: true, error: null };
			break;
		case USERS_ERROR:
			return { ...state, loading: false, error: action.payload };
			break;
		default:
			return state;
			break;
	}
};
