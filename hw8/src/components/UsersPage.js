import React, { Component } from 'react';
import 'babel-polyfill';
import fetch from 'isomorphic-fetch';

import './UsersPage.css';

class UsersPage extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			users: [],
		};
	}

	static contextTypes = {
		router: React.PropTypes.object.isRequired
	};

	setUsers(json) {
		console.log(json);
		this.setState( {users: json} );
	}

	mapUser(user) {
		return (
			<div key={user.name} onClick={() => {this.context.router.push(`/users/${user.name}`)} }>
			{'Name: ' + user.name}</div>
		)
	}

	componentDidMount() {
		fetch('/api/users')
		.then(function(res) {
			return res.json();
		})
		.then(this.setUsers.bind(this))
		.catch(function(err) {
			console.log(err);
		});
	}

	render() {
		return (
			<div>
				<h1>UsersPage</h1>
				{this.state.users.map(this.mapUser.bind(this))}
			</div>
		);
	}
}

export default UsersPage;
