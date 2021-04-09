import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/Home';
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
				</Switch>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
