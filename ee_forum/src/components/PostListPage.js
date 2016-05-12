import React, { Component } from 'react';
import 'babel-polyfill';
import fetch from 'isomorphic-fetch';
import classNames from 'classnames'

import '../styles/PostListPage.css'

export default class PostListPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      posts: [],
      users: [],
    };
  }

  setPosts(json) {
    this.setState( {posts: json} );
  }
  setUsers(json) {
    this.setState( {users: json} );
  }

  mapPost(post) {
    return (
      <li key={post.id}>
        <div className="post_header">
          <div className="post_title">{post.title}</div>
          <div className="post_votes">{'▲' + post.up + '/▼' + post.down}</div>
          <div className="post_time">{post.time}</div>
        </div>
        <div className={classNames('poster', {'anonymous': !(post.op)})}>
          {'By: ' + (post.op ? this.state.users[post.op].name : post.anony)}
        </div>
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
      .then(this.setPosts.bind(this))
      .catch(function(err) {
        console.log(err);
      });
    fetch('/api/users')
      .then(function(res) {
        return res.json();
      })
      .then(this.setUsers.bind(this))
      .catch(function(err) {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="post_wrapper">
        <button className="newPost">+</button>
        <ul className="postList">{this.state.posts.map(this.mapPost.bind(this))}</ul>
      </div>
    )
  }
}