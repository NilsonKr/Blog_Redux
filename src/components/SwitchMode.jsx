import React from 'react';

import './styles/switchMode.css';

const SwitchMode = () => {
	return (
		<label className='switchMode'>
			<input type='checkbox' className='switch--check' />
			<span className='switch--slider'></span>
		</label>
	);
};

export default SwitchMode;
