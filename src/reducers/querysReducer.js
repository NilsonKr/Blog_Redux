import {
	QUERY__DESCRIPTION,
	QUERY__USERID,
	QUERY__REBOOT,
	QUERY__EXISTS,
} from '../types/queryTypes';

const INITIAL_STATE = {
	userID: '',
	description: '',
	exists: false,
	isCompleted: false,
	todoID: '',
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case QUERY__USERID:
			return { ...state, userID: action.payload };
			break;
		case QUERY__DESCRIPTION:
			return { ...state, description: action.payload };
			break;
		case QUERY__REBOOT:
			return {
				...state,
				description: '',
				userID: '',
				exists: false,
				isCompleted: false,
				todoID: '',
			};
			break;
		case QUERY__EXISTS:
			return {
				...state,
				userID: action.payload.id,
				description: action.payload.description,
				exists: true,
				isCompleted: action.payload.completed,
				todoID: action.payload.todoId,
			};
			break;
		default:
			return state;
			break;
	}
};
