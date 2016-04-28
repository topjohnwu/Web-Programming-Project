import React from 'react';
import { Link } from 'react-router';

export default class Root extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
			<div>
		    	<Link to="/app">Go To Chat app</Link>
		    </div>
		);
	}
}