import React from 'react';

const Users = () => {
	return (
		<div className='usersTable'>
			<div className='users__header'>
				<h2>Name</h2>
				<h2 className='middle'>E-Mail</h2>
				<h2>WebSite</h2>
			</div>
			<div className='users__body'>
				<div className='users__item'>
					<h2>USER NAME</h2>
					<h2 className='middle'>USER EMAIL</h2>
					<h2>USER WEBSITE</h2>
				</div>
				<div className='users__item'>
					<h2>USER NAME</h2>
					<h2 className='middle'>USER EMAIL</h2>
					<h2>USER WEBSITE</h2>
				</div>
				<div className='users__item'>
					<h2>USER NAME</h2>
					<h2 className='middle'>USER EMAIL</h2>
					<h2>USER WEBSITE</h2>
				</div>
			</div>
		</div>
	);
};

export default Users;
