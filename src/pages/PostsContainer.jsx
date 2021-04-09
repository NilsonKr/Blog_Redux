import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as usersActions from '../actions/usersActions';
import * as postsActions from '../actions/postsActions';

import './styles/posts.css';

import PostsInfo from '../components/PostsInfo';
import PostsList from '../components/PostsList';
import Loader from '../components/Loader';
import Error from '../components/Error';

const { getAll: getAllPosts } = postsActions;
const { getAll: getAllUsers } = usersActions;

const PostsContainer = props => {
	//Get Necessary Data from props
	const {
		match: {
			params: { userKey },
		},
		usersReducer: { users },
		postsReducer: { posts },
	} = props;

	useEffect(async () => {
		if (!users.length) {
			await props.getAllUsers();
		}

		props.getAllPosts(userKey);
	}, []);

	//Asynchronus Handling
	if (props.usersReducer.error || props.postsReducer.error) {
		return (
			<div className='mainContainer'>
				<Error message={props.error} />
			</div>
		);
	}

	if (props.usersReducer.loading || props.postsReducer.loading) {
		return (
			<div className='mainContainer'>
				<Loader />
			</div>
		);
	}

	//Find User on Users Array
	const pickedUser = users[userKey];

	return (
		<div className='posts'>
			{users.length && <PostsInfo pickedUser={pickedUser} />}
			{posts.length && <PostsList />}
		</div>
	);
};

const mapStateToProps = ({ usersReducer, postsReducer }) => ({
	usersReducer,
	postsReducer,
});

const mapDispatchToProps = {
	getAllUsers,
	getAllPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);
