import React, { Component } from 'react';
import 'babel-polyfill';

export default class UserInfo extends Component {
	render() {
		console.log(this.props.params.username);
		return <div>Detail</div>
	}
}