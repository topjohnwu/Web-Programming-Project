import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import UsersPage from './components/UsersPage';
import SingleUserPage from './components/SingleUserPage';
import NotFoundPage from './components/NotFoundPage';


export default (
  <Route path="/">
    <IndexRedirect to="/users" />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
