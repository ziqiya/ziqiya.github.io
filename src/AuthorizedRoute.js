import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const AuthorizedRoute = props => {
  const { component: Component, path } = props;
  return (
    <Route
      path={path}
      render={
        props =>
        <Component {...props} />
      }
    />
  );
};
export default AuthorizedRoute;
