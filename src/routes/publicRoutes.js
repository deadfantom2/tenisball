import React from 'react';
import { Route } from 'react-router-dom';

const PublicRoutes = ({ children, ...rest }) => {
  return <Route {...rest} />;
};

export default PublicRoutes;
