import React, { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AdminRoutes = ({ children, ...rest }) => {
  const { userInfo } = useSelector((state) => state.userLogin);
  const { title } = rest;
  const [doctitle, setDocTitle] = useState('');

  useEffect(() => {
    setDocTitle(title);
    document.title = doctitle;
  }, [doctitle, title]);

  if (userInfo && userInfo.token && userInfo.user.roles && userInfo.expiresIn) {
    return <Route {...rest} />;
  } else {
    return <Redirect to="/login" />;
  }
};

export default AdminRoutes;
