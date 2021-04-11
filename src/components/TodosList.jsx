import React from 'react';
import { connect } from 'react-redux';

import TodoCard from './TodoCard';

import checkListImg from '../Assets/check-list.svg';

const todosList = props => {
	return (
		<div>
			{props.users.map(user => (
				<div className='todo__card' key={user.id}>
					<div className='todo__info__container'>
						<h2 className='todo--user'>{user.username}</h2>
						<img className='todo--icon' src={checkListImg} alt='Check List' />
					</div>
					<TodoCard userId={user.id} />
				</div>
			))}
		</div>
	);
};

const mapStateToProps = ({ usersReducer }) => usersReducer;

export default connect(mapStateToProps)(todosList);
