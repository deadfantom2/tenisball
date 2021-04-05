import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import AuthContaier from '../containers/AuthContainer';
import { login } from '../actions/userActions';

const LoginScreen = ({ location }) => {
  const redirect = location.search ? location.search.split('=')[1] : '/';

  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.userLogin);

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    touched,
    isValid,
    errors,
  } = useFormik({
    initialValues: {
      emailLogin: '',
      passwordLogin: '',
    },
    validationSchema: Yup.object({
      emailLogin: Yup.string()
        .email('* Email is invalid')
        .min(11, '* Email must be least than 11 characters')
        .max(50, '* Email must be shorter than 50 characters')
        .required('* Email is required'),
      passwordLogin: Yup.string()
        .min(4, '* Password must be least than 3 characters')
        .max(100, '* Password must be shorter than 100 characters')
        .required('* Password must be required'),
    }),

    onSubmit: (body, { resetForm }) => {
      const { emailLogin, passwordLogin } = body;
      dispatch(login({ email: emailLogin, password: passwordLogin }));
      resetForm({ body: '' });
    },
  });

  return (
    <AuthContaier loading={loading}>
      <h1 className="title">Sign In</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="emailLogin">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={values.emailLogin}
            onChange={handleChange}
            onBlur={handleBlur}
          ></Form.Control>
          {touched.emailLogin && errors.emailLogin ? (
            <p>{errors.emailLogin}</p>
          ) : null}
        </Form.Group>
        <Form.Group controlId="passwordLogin">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={values.passwordLogin}
            onChange={handleChange}
            onBlur={handleBlur}
          ></Form.Control>
          {touched.passwordLogin && errors.passwordLogin ? (
            <p>{errors.passwordLogin}</p>
          ) : null}
        </Form.Group>

        <Button type="submit" variant="primary" disabled={!isValid}>
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
