import React, { Component } from 'react';
import 'babel-polyfill';
import fetch from 'isomorphic-fetch';
import classNames from 'classnames'

import '../styles/LoginPage.css'

export default class LoginPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      valid: true,
    }
  }
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };
  login(event) {
    fetch('/api/login', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: document.getElementById('username').value,
        password: document.getElementById('password').value,
      }),
    })
      .then(res => { return res.json(); } )
      .then(json => { 
        if(json) {
          this.props.setUser(json);
          this.context.router.push('/');
        }
        else
          this.setState( {valid: false} );
      })
  }

  render() {
    return(
      <div>
        <div className="logo">EE Forum</div>
        <div className="inputs">
          <div className={classNames('error', {hidden: this.state.valid})}>Wrong password or account!</div>
          <input placeholder="Username" id="username"></input><br/>
          <input placeholder="Password" id="password" type="password"></input>
          <div className="chk">
            <label className="chktxt"><input className="chkbox" type="checkbox"/>Remember?</label>
          </div>
          <button onClick={this.login.bind(this)}>Login</button>
        </div>
      </div>
    )
  }
}