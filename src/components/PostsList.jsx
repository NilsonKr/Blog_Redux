import React from 'react';
import { connect } from 'react-redux';

const PostsList = props => {
	console.log(props);
	const { posts } = props;

	return (
		<div className='postsList__container'>
			{posts.map(post => (
				<div>
					<h1>{post.title}</h1>
					<em>{post.body}</em>
				</div>
			))}
		</div>
	);
};

const mapStateToProps = reducers => reducers.postsReducer;

export default connect(mapStateToProps)(PostsList);
