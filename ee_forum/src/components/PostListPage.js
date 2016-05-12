import React, { Component } from 'react';
import 'babel-polyfill';
import fetch from 'isomorphic-fetch';

import '../styles/PostListPage.css'

export default class PostListPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      posts: [],
    };
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  setPosts(json) {
    this.setState( {posts: json} );
  }

  mapPost(post) {
    return (
      <li key={post.id}>{post.content}</li>
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
  }

  render() {
    return (
      <div className="post_wrapper">
        <button className="newPost">+</button>
        <ul className="postList">{this.state.posts.map(this.mapPost)}</ul>
      </div>
    )
  }
}