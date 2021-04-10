import React from 'react';
import { connect } from 'react-redux';

const todoCard = props => {
	const userTodos = props.todos[props.userId];
	const userTodosKey = Object.keys(userTodos);
	console.log(userTodos);

	return (
		<div>
			<h2>
				{props.userName} # {props.userId}
			</h2>
			<div>
				{userTodosKey.map(todoKey => (
					<div>
						<input type='checkbox' defaultChecked={userTodos[todoKey].completed} />
						<em>{userTodos[todoKey].title}</em>
					</div>
				))}
			</div>
		</div>
	);
};

const mapStateToProps = reducers => reducers.todosReducer;

export default connect(mapStateToProps)(todoCard);
