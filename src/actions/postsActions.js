import axios from 'axios';
import { POSTS_UPDATE, POSTS_ERROR, POSTS_LOADING } from '../types/postsTypes.js';

const apiUrl = 'https://jsonplaceholder.typicode.com/posts/';
const apiUrlSingle = `https://jsonplaceholder.typicode.com/posts?userId=`;
const apiUrlId = `https://jsonplaceholder.typicode.com/posts?id=`;
const apiComments = 'https://jsonplaceholder.typicode.com/comments?postId=';

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

export const getById = id => async dispatch => {
	dispatch({
		type: POSTS_LOADING,
	});

	try {
		const { data: post } = await axios.get(apiUrlId + id);
		const { data: comments } = await axios.get(apiComments + id);

		//add Comments
		const newPost = {
			...post[0],
			comments: comments,
		};

		dispatch({
			type: POSTS_UPDATE,
			payload: newPost,
		});
	} catch (error) {
		dispatch({
			type: POSTS_ERROR,
			payload: error.message,
		});
	}
};
