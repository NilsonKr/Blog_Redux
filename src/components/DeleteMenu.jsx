import React from 'react';

import './styles/deleteMenu.css';

const DeleteMenu = props => {
	return (
		<div className='deleteMenu' id='menuDelete'>
			<h2>Are You Sure</h2>
			<div className='delteMenu--options'>
				<i className='fas fa-check-circle deleteMenu--delete'></i>
				<button className='deleteMenu--cancel'>Cancel</button>
			</div>
		</div>
	);
};

export default DeleteMenu;
