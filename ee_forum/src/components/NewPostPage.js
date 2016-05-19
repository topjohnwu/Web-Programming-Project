import React, { Component } from 'react';
import 'babel-polyfill';
import fetch from 'isomorphic-fetch';

import '../styles/NewPostPage.css'

export default class NewPostPage extends Component {
  constructor(props, context) {
    super(props, context);
  }
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };
  addPost() {
    fetch('/api/posts', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        { id: null, op: this.props.user.id, time: (new Date()).getTime(), 
        title: document.getElementById('post-title').value,
        content: document.getElementById('post-content').value, 
        up: 0, down: 0,}),
    })
      .then(() => this.context.router.push('/') );
    
  }
  render() {
    return (
      <div>
        <button className="float-button" onClick={this.addPost.bind(this)}>✓</button>
        <div className="post-inputs">
          <input placeholder="Title" id="post-title"/>
          <textarea placeholder="Content" id="post-content"/>
        </div>
      </div>
    )
  }
}