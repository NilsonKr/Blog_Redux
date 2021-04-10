import axios from 'axios';
import { TODOS_FETCH, TODOS_ERROR, TODOS_LOADING } from '../types/todosTypes';

const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

export const getAll = () => async dispatch => {
	dispatch({
		type: TODOS_LOADING,
	});

	try {
		const { data } = await axios.get(apiUrl);

		const todos = {};

		//Inmutabilitie and indexing the data
		data.map(
			todo =>
				(todos[todo.userId] = {
					//todos by user id
					...todos[todo.userId],
					isOpen: false,

					[todo.id]: {
						//todos by id in their respective user id
						...todo,
					},
				})
		);

		dispatch({
			type: TODOS_FETCH,
			payload: todos,
		});
	} catch (error) {
		dispatch({
			type: TODOS_ERROR,
			payload: error.message,
		});
	}
};
