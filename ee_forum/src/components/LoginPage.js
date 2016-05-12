import React, { Component } from 'react';
import 'babel-polyfill';
import fetch from 'isomorphic-fetch';
import classNames from 'classnames'

import '../styles/LoginPage.css'

export default class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      valid: true,
    }
  }
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };
  login(event) {
    let users = this.state.users;
    let username = document.getElementById('username');
    let password = document.getElementById('password');
    for(let i = 0; i < users.length; ++i) {
      if(users[i].name === username.value) {
        if(users[i].password === password.value) {
          this.context.router.push(`/user/${users[i].id}`)
        }
      }
    }
    this.setState( {valid: false} );
  }
  setUsers(json) {
    console.log(json);
    this.setState( {users: json} );
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
    return(
      <div>
        <div className="logo">EE Forum</div>
        <div className="inputs">
          <div className={classNames('error', {hidden: this.state.valid})}>Wrong password or account!</div>
          <input placeholder="Username" id="username"></input><br/>
          <input placeholder="Password" id="password"></input>
          <div className="chk">
            <label className="chktxt"><input className="chkbox" type="checkbox"/>Remember?</label>
          </div>
          <button onClick={this.login.bind(this)}>Login</button>
        </div>
      </div>
    )
  }
}