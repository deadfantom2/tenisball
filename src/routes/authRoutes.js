import React, { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AuthRoutes = ({ children, ...rest }) => {
  const { userInfo } = useSelector((state) => state.userLogin);
  const { title } = rest;
  const [doctitle, setDocTitle] = useState('');

  useEffect(() => {
    setDocTitle(title);
    document.title = doctitle;
  }, [doctitle, title]);

  if (userInfo === null || userInfo === undefined) {
    return <Route {...rest} />;
  } else {
    return <Redirect to="/" />;
  }
};

export default AuthRoutes;
