import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import postDirectImg from '../Assets/goPost.svg';
import './styles/PostList.css';

const PostsList = props => {
	const { posts } = props;

	return (
		<div className='postsList__container'>
			{posts.map((post, key) => (
				<div className='post__container' key={post.id}>
					<h1 className='post--title'>{post.title}</h1>
					<p className='post--body'>
						{post.body.slice(0, 55)} <span>...</span>
					</p>
					<Link to={`/posts/${props.userKey}/${key}`}>
						<img className='post--redirect' src={postDirectImg} alt='Go To the post' />
					</Link>
				</div>
			))}
		</div>
	);
};

const mapStateToProps = reducers => reducers.postsReducer;

export default connect(mapStateToProps)(PostsList);
