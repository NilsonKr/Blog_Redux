import React from 'react';
import { connect } from 'react-redux';

import TodoCard from './TodoCard';

const todosList = props => {
	return (
		<div className='todos__list'>
			{props.users.map(user => (
				<div className='todo__card' key={user.id}>
					<h2>{user.username}</h2>
					<TodoCard userId={user.id} />
				</div>
			))}
		</div>
	);
};

const mapStateToProps = ({ usersReducer }) => usersReducer;

export default connect(mapStateToProps)(todosList);
