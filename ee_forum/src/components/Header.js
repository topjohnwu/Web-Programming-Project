import React, { Component, PropTypes } from 'react';
import 'babel-polyfill';

import NotFoundPage from './NotFoundPage';
import LoginPage from './LoginPage';
import PostListPage from './PostListPage';
import UserInfoPage from './UserInfoPage';
import UserStat from './UserStat';

import '../styles/Header.css'

export default class Header extends Component {
  constructor(context) {
    super(context);
    this.state = {
      user: null,
      users: null,
    }
    this.users = null;
  }
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };
  componentWillMount() {
    if(!this.state.user)
      if(this.props.location.pathname !== "/login") 
        this.context.router.push('/login');
  }
  componentDidMount() {
    fetch('/api/users')
      .then(res => { return res.json(); } )
      .then(json => { this.setState( {users: json} ); });
  }
  setUser(json) {
    this.setState( {user: json} );
  }
  Child() {
    const children = React.Children.map(this.props.children,
           (child) => React.cloneElement(child, {
             user: this.state.user,
             users: this.state.users,
             setUser: this.setUser.bind(this),
          }));
      return children;
  }
  render() {
    if(!this.state.users) return null;
    return(
      <div>
        <div className="topHeader">
          <div className="slogan" onClick={() => {this.context.router.push('/')} }>NTUEESA</div>
        </div>
        <div>{this.Child()}</div>
      </div>
    )
  }
}