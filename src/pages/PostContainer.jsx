import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as postsActions from '../actions/postsActions';

import Loader from '../components/Loader';
import Error from '../components/Error';
import PostBody from '../components/PostBody';

import './styles/post.css';

const PostContainer = props => {
	console.log(props);
	const {
		match: {
			params: { postId, userName },
		},
	} = props;

	useEffect(() => {
		props.getById(postId);
	}, []);

	//Asynchronus Stage
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

	return (
		<div className='postPage__container'>
			<div className='post--userTitle'>
				<h2>
					<span>Post By</span> {userName}
				</h2>
			</div>
			<PostBody />
		</div>
	);
};

const mapStateToProps = ({ postsReducer }) => postsReducer;

export default connect(mapStateToProps, postsActions)(PostContainer);
