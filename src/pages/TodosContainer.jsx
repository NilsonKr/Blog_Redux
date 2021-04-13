import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as todosActions from '../actions/todosActions';
import * as usersActions from '../actions/usersActions';

import TodosList from '../components/TodosList';
import AddToDo from '../components/AddToDo';
import Loader from '../components/Loader';
import Error from '../components/Error';
import NewToDo from '../components/NewToDo';
import DeletePortal from '../components/DeletePortal';

import './styles/todos.css';

const { getAll: getAllTodos } = todosActions;
const { getAll: getAllUsers } = usersActions;

const TodosContainer = props => {
	//Open newTodo Window
	const [isNewOpen, setNewOpen] = useState(false);
	//Validate if there are todos
	const todosUserKey = Object.keys(props.todosReducer.todos);

	useEffect(async () => {
		if (!props.usersReducer.users.length) {
			await props.getAllUsers();
		}

		if (!todosUserKey.length) {
			props.getAllTodos();
		}
	}, []);

	//Asynchronus Stage
	if (props.todosReducer.loading || props.usersReducer.loading) {
		return (
			<div className='mainContainer'>
				<Loader />
			</div>
		);
	}

	if (props.todosReducer.error || props.usersReducer.error) {
		return (
			<div className='mainContainer'>
				<Error message={props.todosReducer.error || props.usersReducer.error} />
			</div>
		);
	}

	return (
		<div className='todos'>
			<DeletePortal />
			<div className='todos__container'>
				{todosUserKey.length && <TodosList openEdit={setNewOpen} />}
			</div>
			;
			<AddToDo open={setNewOpen} />
			{isNewOpen && <NewToDo close={setNewOpen} />}
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
