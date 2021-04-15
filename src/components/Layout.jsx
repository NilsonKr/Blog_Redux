import React from 'react';
import { Link } from 'react-router-dom';

import SwitchMode from './SwitchMode';

const Layout = props => {
	return (
		<React.Fragment>
			<header className='header'>
				<div className='header__sections'>
					<Link to='/'>
						<h2>Home</h2>
					</Link>
					<Link to='/todos'>
						<h2>ToDo's</h2>
					</Link>
				</div>
				<SwitchMode />
			</header>
			{props.children}
		</React.Fragment>
	);
};

export default Layout;
