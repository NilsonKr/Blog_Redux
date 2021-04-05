import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as usersActions from '../actions/usersActions';

import Users from '../components/Users';

import './styles/home.css';

const Home = props => {
	useEffect(() => {
		props.getAll();
	}, []);

	return <div className='home'>{props.users.length && <Users />}</div>;
};

const mapStateToProps = reducers => reducers.usersReducer;

export default connect(mapStateToProps, usersActions)(Home);
