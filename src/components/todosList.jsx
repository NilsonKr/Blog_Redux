import React from 'react';
import { connect } from 'react-redux';

const todosList = props => {
	return <div></div>;
};

const mapStateToProps = reducers => reducers.todosReducer;

export default connect()(todosList);
