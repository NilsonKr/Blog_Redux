import React from 'react';

import './styles/switchMode.css';

const SwitchMode = props => {
	const { theme } = props;

	return (
		<label className='switchMode'>
			<input
				type='checkbox'
				className='switch--check'
				onClick={() =>
					theme === 'light' ? props.updateTheme('dark') : props.updateTheme('light')
				}
			/>
			<span className='switch--slider'></span>
		</label>
	);
};

export default SwitchMode;
