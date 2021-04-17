import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';
import Message from '../components/Message';
import '../styles/LoadAndErrorContainer.scss';

const LoadAndErrorContainer = ({
  children,
  loading,
  title,
  setShowModal,
  activeBtn,
  filter,
}) => {
  const { message } = useSelector((state) => state.successMsg);
  const { error } = useSelector((state) => state.errorMsg);

  return (
    <>
      <div className="panel-back">
        <Container>
          {!activeBtn && (
            <Link to="/" className="btn btn-light my-3">
              Go back
            </Link>
          )}

          <span>{title}</span>
          {filter && (
            <i
              className="fas fa-filter btn__filter"
              onClick={() => setShowModal(true)}
            ></i>
          )}
        </Container>
      </div>
      {loading && <Loader />}
      {error && <Message variant="danger">{error}</Message>}
      {message && <Message variant="success">{message}</Message>}
      <Row>{children}</Row>
    </>
  );
};

export default LoadAndErrorContainer;
