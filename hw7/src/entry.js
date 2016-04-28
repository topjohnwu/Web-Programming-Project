import React from 'react';
import {render} from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import ChatApp from './component/ChatApp'
import Root from './pages/Root'
import User from './pages/User'
import NotFound from './pages/NotFound'

import './style.css'

render(
	<Router history={browserHistory}>
		<Route path="/">
			<IndexRoute component={Root} />
			<Route path="chat" component={ChatApp} />
			<Route path="users">
				<Route path=":username" component={User} />
			</Route>
			<Route path="*" component={NotFound} />
		</Route>
	</Router>
	, document.getElementById('root')
);

// render(<ChatApp/>, document.getElementById('root'));