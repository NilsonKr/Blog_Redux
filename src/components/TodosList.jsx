import React from 'react';
import { connect } from 'react-redux';
import { openClose } from '../actions/todosActions';

import TodoCard from './TodoCard';

import checkListImg from '../Assets/check-list.svg';

const todosList = props => {
	const { users } = props.usersReducer;

	return (
		<div>
			{users.map(user => (
				<div className='todo__card' key={user.id}>
					<div className='todo__info__container' onClick={() => props.openClose(user.id)}>
						<h2 className='todo--user'>{user.username}</h2>
						<img className='todo--icon' src={checkListImg} alt='Check List' />
					</div>
					<TodoCard userId={user.id} edit={props.edit} />
				</div>
			))}
		</div>
	);
};

const mapStateToProps = ({ usersReducer, todosReducer }) => ({
	usersReducer,
	todosReducer,
});

const mapDispatchToProps = {
	openClose,
};

export default connect(mapStateToProps, mapDispatchToProps)(todosList);
