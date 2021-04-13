import { QUERY__DESCRIPTION, QUERY__USERID, QUERY__REBOOT } from '../types/queryTypes';

export const setUserQuery = query => dispatch => {
	dispatch({
		type: QUERY__USERID,
		payload: query,
	});
};

export const setDescriptionQuery = query => dispatch => {
	dispatch({
		type: QUERY__DESCRIPTION,
		payload: query,
	});
};

export const cleanQuerys = () => dispatch => {
	dispatch({
		type: QUERY__REBOOT,
	});
};
