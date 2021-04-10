import { TODOS_FETCH, TODOS_ERROR, TODOS_LOADING } from '../types/todosTypes';

const INITIAL_STATE = {
	todos: {},
	loading: false,
	error: null,
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case TODOS_FETCH:
			return { ...state, loading: false, todos: action.payload };
			break;
		case TODOS_LOADING:
			return { ...state, loading: true, error: null };
			break;
		case TODOS_LOADING:
			return { ...state, loading: false, error: action.payload };
			break;
		default:
			return state;
			break;
	}
};
