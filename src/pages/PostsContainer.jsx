import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as usersActions from '../actions/usersActions';

import './styles/posts.css';

import PostsInfo from '../components/PostsInfo';
import Loader from '../components/Loader';
import Error from '../components/Error';

const { getAll: getAllUsers } = usersActions;

const PostsContainer = props => {
	const {
		match: {
			params: { userKey },
		},
	} = props;

	useEffect(() => {
		if (!props.users.length) {
			props.getAllUsers();
		}
	}, []);

	//Asynchronus Handling
	if (props.error) {
		return (
			<div className='mainContainer'>
				<Error message={props.error} />
			</div>
		);
	}

	if (props.loading) {
		return (
			<div className='mainContainer'>
				<Loader />
			</div>
		);
	}

	//Find User on Users Array
	const pickedUser = props.users[userKey];

	return (
		<div className='posts'>
			{props.users.length && <PostsInfo pickedUser={pickedUser} />}
		</div>
	);
};

const mapStateToProps = reducers => reducers.usersReducer;

const mapDispatchToProps = {
	getAllUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);
