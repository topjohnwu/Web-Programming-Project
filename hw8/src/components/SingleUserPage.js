import React, { Component } from 'react';
import 'babel-polyfill';
import fetch from 'isomorphic-fetch';

import './SingleUserPage.css';
import NotFoundPage from './NotFoundPage'

class SingleUserPage extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			user: null,
		};
	}

	setUser(json) {
		console.log(json.status);
		this.setState( {user: json} );
	}

	componentDidMount() {
		fetch(`/api/users/${this.props.params.username}`)
		.then(function(res) {
			return res.json();
		})
		.then(this.setUser.bind(this))
		.catch(function(err) {
			console.log("Error!!!!!");
		});
	}


	render() {
		if(this.state.user === null) return null;
		return (
			<div>
				<h1>SingleUserPage</h1>
				<div>{'Name: ' + this.state.user.name + ' / Age: ' + this.state.user.age}</div>
			</div>
		);
	}
}

export default SingleUserPage;
