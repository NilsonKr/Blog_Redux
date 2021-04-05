import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Users = props => {
	console.log(props);

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
					<div className='users__item'>
						<h3>{user.username}</h3>
						<h3>{user.email}</h3>
						<h3>{user.website}</h3>
						<Link to={`/posts/${key}`} className='user--icon'>
							<i class='fas fa-eye fa-lg'></i>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

const mapStateToProps = reducers => reducers.usersReducer;

export default connect(mapStateToProps)(Users);
