import React from 'react';
import { connect } from 'react-redux';

import TodoCard from './TodoCard';

const todosList = props => {
	return (
		<div className='todos__list'>
			{props.users.map(user => (
				<TodoCard userName={user.username} userId={user.id} />
			))}
		</div>
	);
};

const mapStateToProps = ({ usersReducer }) => usersReducer;

export default connect(mapStateToProps)(todosList);
