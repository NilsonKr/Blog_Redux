import React from 'react';
import ReactDOM from 'react-dom';

import DeleteMenu from './DeleteMenu';

const deletePortal = props =>
	ReactDOM.createPortal(
		<DeleteMenu todoId={props.todoId} />,
		document.querySelector('#modal')
	);

export default deletePortal;
