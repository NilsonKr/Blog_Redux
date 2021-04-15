import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Theme from '../styledComponents/Theme';
import SwitchMode from './SwitchMode';

import { StyledHeader } from '../styledComponents/StyledLayout';

const Layout = props => {
	const [theme, setTheme] = useState('light');

	return (
		<Theme theme={theme}>
			<StyledHeader>
				<div className='header__sections'>
					<Link to='/'>
						<h2>Home</h2>
					</Link>
					<Link to='/todos'>
						<h2>ToDo's</h2>
					</Link>
				</div>
				<SwitchMode updateTheme={setTheme} theme={theme} />
			</StyledHeader>
			{props.children}
		</Theme>
	);
};

export default Layout;
