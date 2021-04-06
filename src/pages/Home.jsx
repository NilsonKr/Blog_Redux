import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as usersActions from '../actions/usersActions';

import Loader from '../components/Loader';
import Error from '../components/Error';
import Users from '../components/Users';

import './styles/home.css';

const Home = props => {
	//Avoid second Requests
	useEffect(() => {
		if (!props.users.length) {
			props.getAll();
		}
	}, []);

	if (props.loading) {
		return (
			<div className='home'>
				<Loader />
			</div>
		);
	}

	if (props.error) {
		return (
			<div className='home'>
				<Error message={props.error} />
			</div>
		);
	}

	return <div className='home'>{props.users.length && <Users />}</div>;
};

const mapStateToProps = reducers => reducers.usersReducer;

export default connect(mapStateToProps, usersActions)(Home);
