import React from 'react';

import './styles/NewTodo.css';

const NewToDo = props => {
	return (
		<div className='addWindow'>
			<i
				class='fas fa-times-circle addWindow--close'
				onClick={() => props.close(false)}
			></i>
			<form action='' className='addWindow__container'>
				<h2>Set New To Do</h2>
				<input
					type='number'
					className='addWindow--input'
					name='todoUserId'
					placeholder='User Id'
				/>
				<input
					type='text'
					className='addWindow--input'
					name='todoDescription'
					placeholder='Description'
				/>
				<button className='addWindow--button'>Save</button>
			</form>
		</div>
	);
};

export default NewToDo;
