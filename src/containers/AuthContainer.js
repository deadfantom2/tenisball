import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Loader from '../components/Loader';
import Message from '../components/Message';
import '../styles/AuthContainer.scss';

const AuthContainer = ({ children, loading }) => {
  const { message } = useSelector((state) => state.successMsg);
  const { error } = useSelector((state) => state.errorMsg);
  return (
    <>
      {loading && <Loader />}
      <Row className="justify-content-md-center auth">
        <Col xs={12} md={6}>
          {error && <Message variant="danger">{error}</Message>}
          {message && <Message variant="success">{message}</Message>}
          {children}
        </Col>
      </Row>
    </>
  );
};

export default AuthContainer;
