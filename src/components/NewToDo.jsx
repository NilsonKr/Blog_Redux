import React from 'react';
import { connect } from 'react-redux';
import * as querysActions from '../actions/queryActions';

import './styles/NewTodo.css';
import { StyledNewTodo } from '../styledComponents/StyledTodos';

const NewToDo = props => {
	//Close panel and clean inputs
	const closeAndClean = () => {
		props.close(false);
		props.cleanQuerys();
	};

	//Set Values
	const setUserQuery = ev => {
		const input = ev.target;

		if (input.name === 'todoUserId') {
			props.setUserQuery(input.value);
		} else {
			props.setDescriptionQuery(input.value);
		}
	};

	//Send Todo
	const saveTodo = ev => {
		ev.preventDefault();

		if (props.exists) {
			const newTodo = {
				id: props.todoID,
				userId: props.userID,
				title: props.description,
				completed: props.isCompleted,
			};

			props.putTodo(newTodo);
		} else {
			const newTodo = {
				userId: props.userID,
				title: props.description,
				completed: false,
			};

			props.postTodo(newTodo);
		}
		closeAndClean();
	};

	return (
		<StyledNewTodo>
			<i
				className='fas fa-times-circle addWindow--close'
				onClick={() => closeAndClean()}
			></i>
			<form action='' className='addWindow__container' onSubmit={saveTodo}>
				<h2>Set New To Do</h2>
				<input
					type='number'
					className='addWindow--input'
					name='todoUserId'
					placeholder='User Id'
					value={props.userID}
					onChange={setUserQuery}
				/>
				<input
					type='text'
					className='addWindow--input'
					name='todoDescription'
					placeholder='Description'
					value={props.description}
					onChange={setUserQuery}
				/>
				<button className='addWindow--button'>Save</button>
			</form>
		</StyledNewTodo>
	);
};

const mapStateToProps = reducers => reducers.querysReducer;

export default connect(mapStateToProps, querysActions)(NewToDo);
