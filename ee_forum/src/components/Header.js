import React, { Component, PropTypes } from 'react';
import 'babel-polyfill';

import NotFoundPage from './NotFoundPage';
import LoginPage from './LoginPage';
import PostListPage from './PostListPage';
import UserInfoPage from './UserInfoPage';
import UserStat from './UserStat';

import '../styles/Header.css'

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      users: null,
    }
  }
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };
  componentDidMount() {
    fetch('/api/users')
      .then(function(res) {
        return res.json();
      })
      .then(this.setUsers.bind(this));
    // fetch('/api/users/1')
    //   .then(function(res) {
    //     return res.json();
    //   })
    //   .then(this.setUser.bind(this));
  }
  setUser(json) {
    console.log(json);
    this.setState( {user: json} );
  }
  setUsers(json) {
    this.setState( {users: json} );
  }
  Child() {
    if(this.state.user === null) {
      return <LoginPage setUser={this.setUser.bind(this)}/>;
    }
    else {
      const children = React.Children.map(this.props.children,
           (child) => React.cloneElement(child, {
             user: this.state.user,
             setUser: this.setUser.bind(this),
           })
          );
      return children;
    }
  }
  render() {
    return(
      <div>
        <div className="topHeader">
          <div className="slogan v_center">NTUEESA</div>
        </div>
        <div>{this.Child()}</div>
      </div>
    )
  }
}