import React, { Component } from 'react';
import 'babel-polyfill';

import '../styles/LoginPage.css'

export default class LoginPage extends Component {
  render() {
    return(
      <div>
        <div className="topHeader">
          <div className="slogan">NTUEESA</div>
        </div>
        <div className="logo">EE Forum</div>
        <div className="inputs">
          <input placeholder="Username"></input><br/>
          <input placeholder="Password"></input>
          <div className="chk">
            <label className="chktxt"><input className="chkbox" type="checkbox"/>Remember?</label>
          </div>
          <div className="loginbtn"><button>Login</button></div>
        </div>
      </div>
    )
  }
}