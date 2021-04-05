import { USERS_UPDATE, USERS_ERROR, USERS_LOADING } from '../types/usersTypes';
import axios from 'axios';

const apiUrl = 'https://jsonplaceholder.typicode.com/users';

export const getAll = () => async dispatch => {
	//Fetching Users Data
	dispatch({
		type: USERS_LOADING,
	});

	try {
		const { data } = await axios.get(apiUrl);

		dispatch({
			type: USERS_UPDATE,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: USERS_ERROR,
			payload: error.message,
		});
	}
};
