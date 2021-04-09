import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as postsActions from '../actions/postsActions';
import * as usersActions from '../actions/usersActions';

import './styles/post.css';

const { getAll: getAllPosts } = postsActions;
const { getAll: getAllUsers } = usersActions;

const PostContainer = props => {
	console.log(props);
	const {
		match: {
			params: { userKey },
		},
		postsReducer: { posts },
		usersReducer: { users },
	} = props;

	//Fetching data in case
	useEffect(async () => {
		if (!users.length) {
			await props.getAllUsers();
		}

		if (!posts.length) {
			props.getAllPosts(userKey);
		}
	}, []);
	//Asynchronus Scene

	return (
		<div>
			<h1>{`You are on the post section`}</h1>
		</div>
	);
};

const mapStateToProps = ({ postsReducer, usersReducer }) => ({
	usersReducer,
	postsReducer,
});
const mapDispatchToProps = {
	getAllPosts,
	getAllUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);
