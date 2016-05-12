import React, { Component, PropTypes } from 'react';
import 'babel-polyfill';
import fetch from 'isomorphic-fetch';

import '../styles/UserStat.css'

export default class UserStat extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      user: null,
    };
  }
  static propTypes = {
    children: PropTypes.any.isRequired
  };
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  setUser(json) {
    this.setState( {user: json} );
  }

  componentDidMount() {
    fetch(`/api/users/${this.props.params.userid}`)
    .then(function(res) {
      return res.json();
    })
    .then(this.setUser.bind(this))
    .catch(function(err) {
      console.log(err);
    });
  }


  render() {
    const user = this.state.user;
    if(user === null) return null;
    return (
      <div>
        <div className="status">
          <img className="img-circle v_center" src={user.pic} />
          <div className="username v_center">{user.name}</div>
          <button className="logout v_center">Logout</button>
        </div>
        <div className="left_nav">
          <ul>
            <li>Hottest</li>
            <li>Latest</li>
            <li>Placeholder</li>
            <li>Placeholder</li>
            <li>Placeholder</li>
            <li>Placeholder</li>
          </ul>
        </div>
        <div className="main">{this.props.children}</div>
      </div>
    )
  }
}