import React from 'react';
import { connect } from 'react-redux';

const PostComments = props => {
	console.log(props);
	const { posts: post } = props;

	return (
		<div className='post__comments'>
			<h2 className='post__comments--title'>
				<span></span> Comments
			</h2>
			{post.comments.map(comment => (
				<div className='comment__container'>
					<h3>{comment.name}</h3>
					<p>{comment.body}</p>
					<span>{comment.email}</span>
				</div>
			))}
		</div>
	);
};

const mapStateToProps = ({ postsReducer }) => postsReducer;

export default connect(mapStateToProps)(PostComments);
