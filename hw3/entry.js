import React from 'react';
import {render} from 'react-dom';
import TodoApp from './todoapp'
import './style.css'

render(<TodoApp />, document.getElementById('root'));
render(
	<footer className="info">
		<p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
	</footer>, document.getElementById('footer')
	);