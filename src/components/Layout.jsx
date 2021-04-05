import React from 'react';
import { Link } from 'react-router-dom';

const Layout = props => {
	return (
		<React.Fragment>
			<header className='header'>
				<Link to='/'>
					<h2>Home</h2>
				</Link>
				<Link to='/todos'>
					<h2>ToDo's</h2>
				</Link>
			</header>
			{props.children}
		</React.Fragment>
	);
};

export default Layout;
