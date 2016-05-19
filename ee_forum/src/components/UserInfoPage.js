import React, { Component } from 'react';
import 'babel-polyfill';

import '../styles/UserInfoPage.css'

export default class UserInfoPage extends Component {
	render() {
		const user = this.props.users[this.props.params.userid];
		return (
			<div>
				<img className="info-img" src={user.pic}/>
				<div className="info-name">{user.name}</div>
			</div>
		)
	}
}