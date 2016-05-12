import React from 'react';
import { Route, IndexRedirect, IndexRoute } from 'react-router';
import NotFoundPage from './components/NotFoundPage';
import LoginPage from './components/LoginPage';
import Header from './components/Header';
import PostListPage from './components/PostListPage';
import UserInfoPage from './components/UserInfoPage';
import UserStat from './components/UserStat';


export default (
  <Route path="/" component={Header}>
    <IndexRedirect to="/login" />
    <Route path="login" component={LoginPage} />
    <Route path="user">
      <Route path=":userid" component={UserStat}>
        <IndexRoute component={PostListPage}/>
        <Route path="detail" component={UserInfoPage}/>
      </Route>
    </Route>
    <Route path="*" component={NotFoundPage} />
  </Route>
);
