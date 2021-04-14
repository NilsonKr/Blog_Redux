import axios from 'axios';
import {
	TODOS_FETCH,
	TODOS_ERROR,
	TODOS_LOADING,
	TODOS_UPDATE,
} from '../types/todosTypes';

const apiUrl = 'https://jsonplaceholder.typicode.com/todos/';

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

export const openClose = userId => (dispatch, getState) => {
	const { todos } = getState().todosReducer;

	const newUser = { ...todos };

	//Inmutabilitie
	newUser[userId] = {
		...newUser[userId],
		isOpen: !todos[userId].isOpen,
	};

	dispatch({
		type: TODOS_FETCH,
		payload: newUser,
	});
};

export const setCompleted = (userId, taskId) => (dispatch, getState) => {
	const { todos } = getState().todosReducer;

	const todoPicked = todos[userId][taskId];

	//Inmutabilitie
	const newTodos = { ...todos };
	newTodos[userId] = { ...newTodos[userId] };
	newTodos[userId][taskId] = { ...todoPicked, completed: !todoPicked.completed };

	dispatch({
		type: TODOS_FETCH,
		payload: newTodos,
	});
};

//Delete Todo
export const removeTodo = id => async dispatch => {
	dispatch({
		type: TODOS_LOADING,
	});

	try {
		const response = await axios.delete(apiUrl + id);

		console.log(response);

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
