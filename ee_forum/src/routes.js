import React from 'react';
import { Route, IndexRedirect, IndexRoute } from 'react-router';
import NotFoundPage from './components/NotFoundPage';
import LoginPage from './components/LoginPage';


export default (
  <Route path="/">
	<IndexRedirect to="/login" />
	<Route path="/login" component={LoginPage} />
	<Route path="*" component={NotFoundPage} />
  </Route>
);
