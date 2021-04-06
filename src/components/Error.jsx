import React from 'react';

import errorImg from '../Assets/error.svg';

const Error = ({ message }) => {
	return (
		<div className='error'>
			<img src={errorImg} alt='Error' />
			<em>
				Hey! {message} <span>😰</span>
			</em>
		</div>
	);
};

export default Error;
