import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as postsActions from '../actions/postsActions';

import Loader from '../components/Loader';
import Error from '../components/Error';
import PostBody from '../components/PostBody';
import PostComments from '../components/PostComments';

import './styles/post.css';
import { StyledMain } from '../styledComponents/StyledLayout';
import { StyledPost } from '../styledComponents/StyledPosts';

const PostContainer = props => {
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
			<StyledMain>
				<Error message={props.error} />
			</StyledMain>
		);
	}

	if (props.loading || props.posts.length === 0) {
		return (
			<StyledMain>
				<Loader />
			</StyledMain>
		);
	}

	return (
		<StyledPost>
			<div className='post--userTitle__container'>
				<div className='post--userTitle'>
					<h2>
						<span>Post By</span> {userName}
					</h2>
				</div>
			</div>
			{!props.posts.length && (
				<React.Fragment>
					<PostBody />
					<PostComments />
				</React.Fragment>
			)}
		</StyledPost>
	);
};

const mapStateToProps = ({ postsReducer }) => postsReducer;

export default connect(mapStateToProps, postsActions)(PostContainer);
