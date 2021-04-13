import React from 'react';
import { connect } from 'react-redux';
import * as todosActions from '../actions/todosActions';
import * as querysActions from '../actions/queryActions';

import editIcon from '../Assets/edit .svg';
import deleteIcon from '../Assets/delete.svg';

const todoCard = props => {
	//Get Todos of the user by his id
	const {
		userId,
		todosReducer: { todos },
	} = props;

	const userTodos = todos[userId];
	const userTodosKey = Object.keys(userTodos);

	//return if is not open
	if (!todos[userId].isOpen) return null;

	//Open Edit Todo
	const editTodo = ({ title, completed, id }) => {
		props.setExists(userId, title, completed, id);

		props.openEdit(true);
	};

	//Render Delete
	const renderDelete = ev => {
		const deleteBadge = document.querySelector('#menuDelete');

		deleteBadge.classList.add('deleteMenu--active');

		deleteBadge.style.top = ev.pageY + 'px';
		deleteBadge.style.left = ev.pageX + 'px';
	};

	return (
		<div className='todo__list'>
			{userTodosKey.map(todoKey => (
				<React.Fragment key={todoKey}>
					{/* Render Only Tasks  */}
					{userTodos[todoKey].title && (
						<div className='todo__information'>
							<div className='todo--info'>
								<label className='todo--input'>
									<input
										type='checkbox'
										defaultChecked={userTodos[todoKey].completed}
										onClick={() => props.setCompleted(userId, userTodos[todoKey].id)}
									/>
									<span className='todo--checked'></span>
								</label>
								<em>{userTodos[todoKey].title}</em>
							</div>
							<div className='todo__buttons'>
								<img
									src={editIcon}
									alt='edit'
									className='todo--button'
									onClick={() => editTodo(userTodos[todoKey])}
								/>
								<img
									src={deleteIcon}
									alt='delete'
									className='todo--button deleteTodo'
									onClick={renderDelete}
								/>
							</div>
						</div>
					)}
				</React.Fragment>
			))}
		</div>
	);
};

const mapStateToProps = ({ todosReducer, querysReducer }) => ({
	todosReducer,
	querysReducer,
});

const mapDispatchToProps = {
	...querysActions,
	...todosActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(todoCard);
