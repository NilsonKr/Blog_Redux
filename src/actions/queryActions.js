import axios from 'axios';
import { TODOS_UPDATE, TODOS_ERROR, TODOS_LOADING } from '../types/todosTypes';
import {
	QUERY__DESCRIPTION,
	QUERY__USERID,
	QUERY__REBOOT,
	QUERY__EXISTS,
} from '../types/queryTypes';

const apiUrl = 'https://jsonplaceholder.typicode.com/todos/';

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

export const setExists = (userId, description, completed, id) => dispatch => {
	const todo = {
		todoId: id,
		id: userId,
		description: description,
		completed: completed,
	};

	dispatch({
		type: QUERY__EXISTS,
		payload: todo,
	});
};

//Add new To do
export const postTodo = newTodo => async dispatch => {
	dispatch({
		type: TODOS_LOADING,
	});

	try {
		const { data } = await axios.post(apiUrl, newTodo);

		dispatch({
			type: TODOS_UPDATE,
		});
	} catch (error) {
		dispatch({
			type: TODOS_ERROR,
			payload: error.message,
		});
	}
};

//Update To do
export const putTodo = newTodo => async dispatch => {
	dispatch({
		type: TODOS_LOADING,
	});

	try {
		const id = newTodo.id;

		const { data } = await axios.put(apiUrl + id, newTodo);

		dispatch({
			type: TODOS_UPDATE,
		});
	} catch (error) {
		dispatch({
			type: TODOS_ERROR,
			payload: error.message,
		});
	}
};
