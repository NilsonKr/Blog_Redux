import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import postDirectImg from '../Assets/goPost.svg';
import './styles/PostList.css';
import { StyledPostCard } from '../styledComponents/StyledPosts';

const PostsList = props => {
	const { posts } = props;

	return (
		<div className='postsList__container'>
			{posts.map(post => (
				<StyledPostCard key={post.id}>
					<h1 className='post--title'>{post.title}</h1>
					<p className='post--body'>
						{post.body.slice(0, 55)} <span>...</span>
					</p>
					<Link to={`/post/${props.pickedUser.username}/${post.id}`}>
						<img className='post--redirect' src={postDirectImg} alt='Go To the post' />
					</Link>
				</StyledPostCard>
			))}
		</div>
	);
};

const mapStateToProps = reducers => reducers.postsReducer;

export default connect(mapStateToProps)(PostsList);
