import React from 'react';
import { Route, IndexRedirect, IndexRoute } from 'react-router';

import NotFoundPage from './components/NotFoundPage';
import LoginPage from './components/LoginPage';
import Header from './components/Header';
import PostListPage from './components/PostListPage';
import UserInfoPage from './components/UserInfoPage';
import UserStat from './components/UserStat';
import NewPostPage from './components/NewPostPage';


export default (
  <Route path="/" component={Header}>
    <Route component={UserStat}>
      <IndexRoute component={PostListPage}/>
      <Route path="user">
        <Route path=":userid" component={UserInfoPage} />
      </Route>
      <Route path="new" component={NewPostPage} />
    </Route>
    <Route path="login" component={LoginPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
