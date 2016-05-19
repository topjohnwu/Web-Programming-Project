import React, { Component } from 'react';
import 'babel-polyfill';
import fetch from 'isomorphic-fetch';
import classNames from 'classnames'

import '../styles/PostListPage.css'

export default class PostListPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      posts: null,
    };
  }
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  setPosts(json) {
    this.setState( {posts: json} );
  }

  printTime(millisec) {
    let a = "";
    let d = new Date(millisec);
    let c = new Date();
    if(d.toDateString() !== c.toDateString()) a += (d.toDateString() + ' ');
    else a += ('Today ');
    a += d.toTimeString().substr(0, 8);
    return a;
  }

  mapPost(post) {
    return (
      <li key={post.id}>
        <div className="post_header">
          <div className="post_title">{post.title}</div>
          <div className="post_time">{this.printTime(post.time)}</div>
          <div className="post_votes">{'▲' + post.up + '/▼' + post.down}</div>
        </div>
        <a 
          className="op"
          onClick={ () => {this.context.router.push(`/user/${post.op}`)} }>
          {'By: ' + this.props.users[post.op].name}
        </a>
        <div className="post_content">{post.content}</div>
        <div className="post_buttons">
          <button>▲</button>
          <button>▼</button>
          <button>Comment</button>
        </div>
      </li>
    )
  }

  componentDidMount() {
    fetch('/api/posts')
      .then(function(res) {
        return res.json();
      })
      .then(this.setPosts.bind(this));
  }

  render() {
    const users = this.state.users, posts = this.state.posts;
    if(users === null || posts === null) return null;
    return (
      <div className="post_wrapper">
        <button className="float-button" onClick={() => {this.context.router.push('/new')} }>+</button>
        <ul className="postList">{this.state.posts.map(this.mapPost.bind(this))}</ul>
      </div>
    )
  }
}