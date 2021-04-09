import axios from 'axios';
import { POSTS_UPDATE, POSTS_ERROR, POSTS_LOADING } from '../types/postsTypes.js';

const apiUrl = 'https://jsonplaceholder.typicode.com/posts/';
const apiUrlSingle = `https://jsonplaceholder.typicode.com/posts?userId=`;

export const getAll = userKey => async (dispatch, getState) => {
	//Get user id
	const { users } = getState().usersReducer;
	const userId = users[userKey].id;

	dispatch({
		type: POSTS_LOADING,
	});

	try {
		const { data } = await axios.get(apiUrlSingle + userId);

		dispatch({
			type: POSTS_UPDATE,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: POSTS_ERROR,
			payload: error.message,
		});
	}
};
