import React from 'react';

import todoAddImg from '../Assets/addTodo.svg';
import './styles/AddTodo.css';

const AddToDo = props => {
	return (
		<div className='addTodo'>
			<div className='addTodo__container'>
				<img src={todoAddImg} alt='' className='addTodo--icon' />
				<div className='addtodo--text'>
					<span>New ToDo</span>
				</div>
			</div>
		</div>
	);
};

export default AddToDo;
