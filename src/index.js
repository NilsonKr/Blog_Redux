import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers/';

import App from './App';

import './index.css';
import '@fortawesome/fontawesome-free/css/all.css';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

//Hide Modals

document.body.addEventListener('click', ev => {
	const deleteModal = document.querySelector('#menuDelete');
	const target = ev.target;

	if (deleteModal && !target.classList.contains('deleteTodo')) {
		deleteModal.classList.remove('deleteMenu--active');
	}
});
