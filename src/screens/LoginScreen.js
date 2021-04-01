import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button, Row, Col } from 'react-bootstrap';
import AuthContaier from '../containers/AuthContainer';
import { login } from '../actions/userActions';

const LoginScreen = ({ history, location }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const firstElement = useRef(null);

  const redirect = location.search ? location.search.split('=')[1] : '/';

  const dispatch = useDispatch();
  const { loading, userInfo } = useSelector((state) => state.userLogin);

  useEffect(() => {
    firstElement.current.focus();
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect, firstElement]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <AuthContaier loading={loading}>
      <h1 className="title" ref={firstElement}>
        Sign In
      </h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary">
          Login
        </Button>
      </Form>

      <Row className="py-3">
        <Col>
          New customer?
          <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
            {' '}
            Register
          </Link>
        </Col>
      </Row>
    </AuthContaier>
  );
};
export default LoginScreen;
