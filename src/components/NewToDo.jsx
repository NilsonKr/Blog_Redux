import React from 'react';
import { connect } from 'react-redux';
import * as querysActions from '../actions/queryActions';

import './styles/NewTodo.css';

const NewToDo = props => {
	console.log(props);

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

	return (
		<div className='addWindow'>
			<i
				className='fas fa-times-circle addWindow--close'
				onClick={() => closeAndClean()}
			></i>
			<form action='' className='addWindow__container'>
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
		</div>
	);
};

const mapStateToProps = reducers => reducers.querysReducer;

export default connect(mapStateToProps, querysActions)(NewToDo);
