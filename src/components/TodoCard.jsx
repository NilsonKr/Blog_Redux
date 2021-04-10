import React from 'react';
import { connect } from 'react-redux';

const todoCard = props => {
	//Get Todos of the user by his id
	const userTodos = props.todos[props.userId];
	const userTodosKey = Object.keys(userTodos);
	console.log(userTodos);

	return (
		<div className='todo__container'>
			{userTodosKey.map(todoKey => (
				<div className='todo__information' key={todoKey}>
					<input type='checkbox' defaultChecked={userTodos[todoKey].completed} />
					<em>{userTodos[todoKey].title}</em>
				</div>
			))}
		</div>
	);
};

const mapStateToProps = reducers => reducers.todosReducer;

export default connect(mapStateToProps)(todoCard);
