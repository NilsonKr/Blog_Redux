import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as usersActions from '../actions/usersActions';

import './styles/posts.css';
import LandingImage from '../Assets/landingImage.jpg';

const { getAll: getAllUsers } = usersActions;

const Posts = props => {
	console.log(props);

	useEffect(() => {
		if (!props.users.length) {
			props.getAllUsers();
		}
	}, []);

	return (
		<div>
			<h1>You are on the posts Section </h1>
		</div>
	);
};

const mapStateToProps = reducers => reducers.usersReducer;

const mapDispatchToProps = {
	getAllUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
