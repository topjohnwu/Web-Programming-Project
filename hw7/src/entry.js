import React from 'react';
import {render} from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import ChatApp from './component/ChatApp'
import Root from './pages/Root'

import './style.css'

render(
	<Router history={browserHistory}>
		<Route path="/" component={Root} />
		<Route path="/app" component={ChatApp} />
	</Router>
	, document.getElementById('root')
);

// render(<ChatApp/>, document.getElementById('root'));