import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as todosActions from '../actions/todosActions';
import * as usersActions from '../actions/usersActions';

import TodosList from '../components/TodosList';

const { getAll: getAllTodos } = todosActions;
const { getAll: getAllUsers } = usersActions;

const TodosContainer = props => {
	const todosUserKey = Object.keys(props.todosReducer.todos);

	useEffect(async () => {
		if (!props.usersReducer.users.length) {
			await props.getAllUsers();
		}

		if (!todosUserKey.length) {
			props.getAllTodos();
		}
	}, []);

	return (
		<div>
			<h1>You Are on the todos section</h1>
			{todosUserKey.length && <TodosList />}
		</div>
	);
};

const mapStateToProps = ({ todosReducer, usersReducer }) => ({
	usersReducer,
	todosReducer,
});

const mapDispatchToProps = {
	getAllTodos,
	getAllUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
