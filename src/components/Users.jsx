import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Users = props => {
	//Render users from the reducer state

	return (
		<div className='usersTable'>
			<div className='users__header'>
				<h2>Name</h2>
				<h2 className='middle'>E-Mail</h2>
				<h2>WebSite</h2>
			</div>
			<div className='users__body'>
				{props.users.map((user, key) => (
					<div className='users__item' key={user.id}>
						<h3>{user.username}</h3>
						<h3>{user.email}</h3>
						<h3>{user.website}</h3>
						{/* Passing the key to make reference to location of this user */}
						<Link to={`/posts/${key}`} className='user--icon'>
							<i className='fas fa-eye fa-lg'></i>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

const mapStateToProps = reducers => reducers.usersReducer;

export default connect(mapStateToProps)(Users);
