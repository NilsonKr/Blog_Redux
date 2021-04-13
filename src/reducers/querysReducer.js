import { QUERY__DESCRIPTION, QUERY__USERID, QUERY__REBOOT } from '../types/queryTypes';

const INITIAL_STATE = {
	userID: '',
	description: '',
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
			return { ...state, description: '', userID: '' };
		default:
			return state;
			break;
	}
};
