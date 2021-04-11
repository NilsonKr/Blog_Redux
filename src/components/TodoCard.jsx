import React from 'react';
import { connect } from 'react-redux';
import * as todosActions from '../actions/todosActions';

import editIcon from '../Assets/edit .svg';
import deleteIcon from '../Assets/delete.svg';

const todoCard = props => {
	//Get Todos of the user by his id
	const userTodos = props.todos[props.userId];
	const userTodosKey = Object.keys(userTodos);

	//return if is not open
	if (!props.todos[props.userId].isOpen) return null;

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
										onClick={() =>
											props.setCompleted(props.userId, userTodos[todoKey].id)
										}
									/>
									<span className='todo--checked'></span>
								</label>
								<em>{userTodos[todoKey].title}</em>
							</div>
							<div className='todo__buttons'>
								<img src={editIcon} alt='edit' className='todo--button' />
								<img src={deleteIcon} alt='delete' className='todo--button' />
							</div>
						</div>
					)}
				</React.Fragment>
			))}
		</div>
	);
};

const mapStateToProps = reducers => reducers.todosReducer;

export default connect(mapStateToProps, todosActions)(todoCard);
