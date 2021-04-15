import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as usersActions from '../actions/usersActions';
import * as postsActions from '../actions/postsActions';

import PostsInfo from '../components/PostsInfo';
import PostsList from '../components/PostsList';
import Loader from '../components/Loader';
import Error from '../components/Error';

import './styles/posts.css';
import { StyledMain } from '../styledComponents/StyledLayout';
import { StyledPosts } from '../styledComponents/StyledPosts';

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
			<StyledMain>
				<Error message={props.error} />
			</StyledMain>
		);
	}

	if (props.usersReducer.loading || props.postsReducer.loading) {
		return (
			<StyledMain>
				<Loader />
			</StyledMain>
		);
	}

	//Find User on Users Array
	const pickedUser = users[userKey];

	return (
		<StyledPosts>
			{users.length && <PostsInfo pickedUser={pickedUser} />}
			{posts.length && <PostsList userKey={userKey} pickedUser={pickedUser} />}
		</StyledPosts>
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
