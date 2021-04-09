import React from 'react';

import userImg from '../Assets/user.png';

const PostsInfo = props => {
	const { pickedUser } = props;

	return (
		<React.Fragment>
			<div className='landingImage'>
				<img src={userImg} alt='User' />
				<h2 className='user--name'>{pickedUser.name}</h2>
				<em className='user-nickname'> “{pickedUser.username}”</em>
			</div>
			<div className='posts__container'>
				<h2 className='posts--usertitle'>
					<span>Posts by</span> {pickedUser.username} <span>...</span>
				</h2>
			</div>
		</React.Fragment>
	);
};

export default PostsInfo;
