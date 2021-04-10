import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/Home';
import Todos from './pages/TodosContainer';
import Posts from './pages/PostsContainer';
import Post from './pages/PostContainer';

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/posts/:userKey' component={Posts} />
					<Route exact path='/post/:userName/:postId/' component={Post} />
					<Route exact path='/todos' component={Todos} />
				</Switch>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
