import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as usersActions from '../actions/usersActions';

import Loader from '../components/Loader';
import Error from '../components/Error';
import Users from '../components/Users';

import { StyledMain } from '../styledComponents/StyledLayout';
import './styles/home.css';

const Home = props => {
	//Avoid second Requests
	useEffect(() => {
		if (!props.users.length) {
			props.getAll();
		}
	}, []);

	//Handling Asynchronus Stage
	if (props.loading) {
		return (
			<div className='mainContainer'>
				<Loader />
			</div>
		);
	}

	if (props.error) {
		return (
			<div className='mainContainer'>
				<Error message={props.error} />
			</div>
		);
	}

	return <StyledMain>{props.users.length && <Users />}</StyledMain>;
};

const mapStateToProps = reducers => reducers.usersReducer;

export default connect(mapStateToProps, usersActions)(Home);
