import React, { Component } from 'react';
import 'babel-polyfill';

import '../styles/LoginPage.css'

export default class LoginPage extends Component {
  login(event) {
    let username = document.getElementById('username');
    let password = document.getElementById('password');
  }
  render() {
    return(
      <div>
        <div className="logo">EE Forum</div>
        <div className="inputs">
          <input placeholder="Username" id="username"></input><br/>
          <input placeholder="Password" id="password"></input>
          <div className="chk">
            <label className="chktxt"><input className="chkbox" type="checkbox"/>Remember?</label>
          </div>
          <button>Login</button>
        </div>
      </div>
    )
  }
}