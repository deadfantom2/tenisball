import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import AuthContaier from '../containers/AuthContainer';
import { register } from '../actions/userActions';
import AvatarList from '../components/AvatarList';
import '../styles/Register.scss';

const RegisterScreen = ({ history, location }) => {
  const [avatar, setAvatar] = useState('/images/petr1.jpg');
  const firstElement = useRef(null);

  const redirect = location.search ? location.search.split('=')[1] : '/';

  const dispatch = useDispatch();
  const { loading, userInfo } = useSelector((state) => state.userRegister);

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
      name: '',
      surname: '',
      age: '',
      email: '',
      password: '',
      confirmPassword: '',
      // avatar: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, '* Name must be least than 3 characters')
        .max(30, '* Name must be shorter than 30 characters')
        .required('* Name must be required')
        .matches(
          /^([a-zA-Z]{3,30})+$/,
          '* This field cannot contain blankspaces or specific characters'
        ),
      surname: Yup.string().required('Surname must be required'),
      age: Yup.number('* Only number')
        .min(18, '* Age must be minimum 18')
        .max(125, '* Age must be maximum 125')
        .required('* Age must be required'),
      email: Yup.string()
        .email('* Email is invalid')
        .min(11, '* Email must be least than 11 characters')
        .max(50, '* Email must be shorter than 50 characters')
        .required('* Email is required'),
      password: Yup.string()
        .min(4, '* Password must be least than 3 characters')
        .max(100, '* Password must be shorter than 100 characters')
        .required('* Password must be required'),
      confirmPassword: Yup.string().test(
        'passwords-match',
        'Passwords must match',
        function (value) {
          return this.parent.password === value;
        }
      ),
      // avatar: Yup.string().required('Avatar must be required'),
    }),
    onSubmit: (body, { resetForm }) => {
      const { name, surname, age, email, password } = body;
      dispatch(register({ name, surname, age, email, password, avatar }));
      resetForm({ body: '' });
    },
  });

  useEffect(() => {
    firstElement.current.focus();
  }, [history, userInfo, redirect]);

  return (
    <AuthContaier loading={loading}>
      <h1 className="title" ref={firstElement}>
        Sign Up
      </h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name *</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          ></Form.Control>
          {touched.name && errors.name ? <p>{errors.name}</p> : null}
        </Form.Group>
        <Form.Group controlId="surname">
          <Form.Label>Surname *</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your surname"
            value={values.surname}
            onChange={handleChange}
            onBlur={handleBlur}
          ></Form.Control>
          {touched.surname && errors.surname ? <p>{errors.surname}</p> : null}
        </Form.Group>
        <Form.Group controlId="age">
          <Form.Label>Age *</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter your age"
            value={values.age}
            onChange={handleChange}
            onBlur={handleBlur}
          ></Form.Control>
          {touched.age && errors.age ? <p>{errors.age}</p> : null}
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email *</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          ></Form.Control>{' '}
          {touched.email && errors.email ? <p>{errors.email}</p> : null}
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password *</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          ></Form.Control>
          {touched.password && errors.password ? (
            <p>{errors.password}</p>
          ) : null}
        </Form.Group>
        <Form.Group controlId="confirmPassword">
          <Form.Label>Confirm Password *</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm password"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
          ></Form.Control>
          {touched.confirmPassword && errors.confirmPassword ? (
            <p>{errors.confirmPassword}</p>
          ) : null}
        </Form.Group>{' '}
        <AvatarList setAvatar={setAvatar} />
        <Button type="submit" variant="primary" disabled={!isValid}>
          Register
        </Button>
      </Form>

      <Row className="py-3">
        <Col>
          Have an account?
          <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
            {' '}
            Login
          </Link>
        </Col>
      </Row>
    </AuthContaier>
  );
};
export default RegisterScreen;
