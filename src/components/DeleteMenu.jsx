import React from 'react';
import { connect } from 'react-redux';
import * as todoActions from '../actions/todosActions';

import './styles/deleteMenu.css';

const DeleteMenu = props => {
	return (
		<div className='deleteMenu ' id='menuDelete'>
			<h2>Are You Sure?</h2>
			<div className='delteMenu--options'>
				<i
					className='fas fa-check-circle deleteMenu--delete deleteTodo'
					onClick={() => props.removeTodo(props.todoId)}
				></i>
				<button className='deleteMenu--cancel'>Cancel</button>
			</div>
		</div>
	);
};

const mapStateToProps = reducers => reducers.todosReducer;

export default connect(mapStateToProps, todoActions)(DeleteMenu);
