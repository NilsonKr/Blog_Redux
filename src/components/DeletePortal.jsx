import React from 'react';
import ReactDOM from 'react-dom';

import DeleteMenu from './DeleteMenu';

const deletePortal = () =>
	ReactDOM.createPortal(<DeleteMenu />, document.querySelector('#modal'));

export default deletePortal;
