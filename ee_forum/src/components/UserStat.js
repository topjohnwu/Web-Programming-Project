import React, { Component, PropTypes } from 'react';
import 'babel-polyfill';
import fetch from 'isomorphic-fetch';
import NotFoundPage from './NotFoundPage';

import '../styles/UserStat.css'

export default class UserStat extends Component {
  constructor(props, context) {
    super(props, context);
  }
  static propTypes = {
    children: PropTypes.any.isRequired
  };
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  Child() {
    const children = React.Children.map(this.props.children,
         (child) => React.cloneElement(child, {
           user: this.props.user,
           users: this.props.users,
         })
        );
    return children;
  }

  render() {
    const user = this.props.user;
    if(user === null) return null;
    return (
      <div>
        <div className="status">
          <img className="img-circle v_center" src={user.pic} onClick={
            () => {this.context.router.push(`/user/${user.id}`)}
          }/>
          <div className="username v_center">{user.name}</div>
          <button className="logout v_center" 
            onClick={ () => { this.props.setUser(null); this.context.router.push('/login'); } }>
            Logout</button>
        </div>
        <div className="left_nav">
          <ul>
            <li>Placeholder</li>
            <li>Placeholder</li>
            <li>Placeholder</li>
            <li>Placeholder</li>
            <li>Placeholder</li>
            <li>Placeholder</li>
          </ul>
        </div>
        <div className="main">{this.Child()}</div>
      </div>
    )
  }
}