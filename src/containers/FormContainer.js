import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Loader from '../components/Loader';
import Message from '../components/Message';
import '../styles/FormContainer.scss';

const FormContainer = ({ children, loading, title }) => {
  const { message } = useSelector((state) => state.successMsg);
  const { error } = useSelector((state) => state.errorMsg);
  return (
    <Row className="justify-content-md-center form-container">
      <Col xs={12} md={6}>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <>
            {message && <Message variant="success">{message}</Message>}
            <h1>{title}</h1>
            {children}
          </>
        )}
      </Col>
    </Row>
  );
};

export default FormContainer;
