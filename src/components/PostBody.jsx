import React from 'react';
import { connect } from 'react-redux';

const PostBody = props => {
	const { posts: post } = props;

	return (
		<div className='post__body'>
			<h1>{post.title}</h1>
			<div className='post__body--description'>
				<p>{post.body}</p>
			</div>
		</div>
	);
};

const mapStateToProps = ({ postsReducer }) => postsReducer;

export default connect(mapStateToProps)(PostBody);
