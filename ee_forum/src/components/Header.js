import React, { Component, PropTypes } from 'react';
import 'babel-polyfill';

import '../styles/Header.css'

export default class Header extends Component {
  render() {
    return(
      <div>
        <div className="topHeader">
          <div className="slogan v_center">NTUEESA</div>
        </div>
        <div>{this.props.children}</div>
      </div>
    )
  }
}