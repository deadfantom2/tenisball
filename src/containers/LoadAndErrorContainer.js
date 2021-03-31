import React from 'react';
import { useSelector } from 'react-redux';
import { Row } from 'react-bootstrap';
import Loader from '../components/Loader';
import Message from '../components/Message';

const LoadAndErrorContainer = ({ children, loading, title }) => {
  const { message } = useSelector((state) => state.successMsg);
  const { error } = useSelector((state) => state.errorMsg);

  return (
    <>
      <h1 className="title">{title}</h1>
      {loading && <Loader />}
      {error && <Message variant="danger">{error}</Message>}
      {message && <Message variant="success">{message}</Message>}
      <Row>{children}</Row>
    </>
  );
};

export default LoadAndErrorContainer;
