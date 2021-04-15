import React from 'react';
import { connect } from 'react-redux';

import { StyledComment } from '../styledComponents/StyledPosts';

const PostComments = props => {
	console.log(props);
	const { posts: post } = props;

	return (
		<div className='post__comments'>
			<h2 className='post__comments--title'>
				<span className='comments--icon'></span> Comments
			</h2>
			{post.comments.map(comment => (
				<StyledComment key={comment.id}>
					<h3>{comment.name}</h3>
					<p className='comment--body'>{comment.body}</p>
					<p className='comment--email'>{comment.email}</p>
				</StyledComment>
			))}
		</div>
	);
};

const mapStateToProps = ({ postsReducer }) => postsReducer;

export default connect(mapStateToProps)(PostComments);
