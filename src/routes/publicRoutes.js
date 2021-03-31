import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';

const PublicRoutes = ({ children, ...rest }) => {
  const { title } = rest;
  const [doctitle, setDocTitle] = useState('');

  useEffect(() => {
    setDocTitle(title);
    document.title = doctitle;
  }, [doctitle, title]);

  return <Route {...rest} />;
};

export default PublicRoutes;
