import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { useFormik, Formik } from 'formik';
import * as Yup from 'yup';
import LoadAndErrorContainer from '../containers/LoadAndErrorContainer';
import ConfirmModal from '../components/ConfirmModal';
import {
  getProfileInfo,
  changeProfileInfo,
  profilePassword,
  profileDelete,
  logout,
} from '../actions/userActions';
import { GETPROFILE_INFO_RESET } from '../constants/userConstants';
import '../styles/ProfileScreen.scss';

const ProfileScreen = ({ history, location }) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [age, setAge] = useState(18);
  const [isCanPost, setIsCanPost] = useState(true);
  const [isCanWrite, setIsCanWrite] = useState(true);
  const [isReported, setIsReported] = useState(false);
  let [showModal, setShowModal] = useState(false);
  let [infoModal, setInfoModal] = useState({
    header: '',
    body: '',
    footer: '',
  });

  const redirect = location.search ? location.search.split('=')[1] : '/';

  const dispatch = useDispatch();
  const { loading, user } = useSelector((state) => state.profileInfo);

  useEffect(() => {
    if (!user || Object.keys(user).length === 0) {
      dispatch(getProfileInfo());
    } else {
      setName(user.name);
      setSurname(user.surname);
      setAge(user.age);
      setIsCanPost(user.isCanPost);
      setIsCanWrite(user.isCanWrite);
      setIsReported(user.isReported);
    }
    return () => {
      user && dispatch({ type: GETPROFILE_INFO_RESET });
    };
  }, [dispatch, user]);

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    setSubmitting,
    values,
    touched,
    isValid,
    errors,
  } = useFormik({
    initialValues: {
      name: name,
      surname: surname,
      age: age,
    },
    enableReinitialize: true,
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
    }),
    onSubmit: (data) => {
      const { name, surname, age } = data;
      dispatch(changeProfileInfo({ name, surname, age }));
      setSubmitting(true);
    },
  });

  const accessToPost = (canPost) => {
    return canPost
      ? 'You can create any post'
      : 'You do not have a permission for create any post';
  };

  const accessToComment = (canComment) => {
    return canComment
      ? 'You can create any comment'
      : 'You do not have a permission for post any comment';
  };

  const haveReport = (isReported) => {
    return !isReported
      ? 'You have not been reported'
      : 'You have been reported';
  };

  const showConfirmModal = () => {
    setShowModal(true);
    setInfoModal({
      position: 2,
      header: 'Warning Account',
      body: 'Do you want delete your account?',
      footer: 'Account',
    });
  };

  const deleteAccount = () => {
    dispatch(profileDelete());
    dispatch(logout());
    setShowModal(!showModal);
    history.push(redirect);
  };

  return (
    <>
      <Link to="/" className="btn btn-light my-3">
        Go back
      </Link>

      <LoadAndErrorContainer loading={loading}>
        <div className="profile">
          <div className="profile-info">
            <h5 className="h5-profile">Profile</h5>
            <Form className="form" onSubmit={handleSubmit}>
              <Form.Group controlId="name">
                <Form.Label>Name *</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
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
                  placeholder="Enter surname"
                  value={values.surname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></Form.Control>
                {touched.surname && errors.surname ? (
                  <p>{errors.surname}</p>
                ) : null}
              </Form.Group>
              <Form.Group controlId="age">
                <Form.Label>Age *</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter age"
                  value={values.age}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></Form.Control>
                {touched.age && errors.age ? <p>{errors.age}</p> : null}
              </Form.Group>

              <Button type="submit" variant="primary" disabled={!isValid}>
                EDIT INFO
              </Button>
            </Form>
          </div>
          <div className="profile-password">
            <h5 className="h5-password">Password</h5>
            <Formik
              initialValues={{ password: '', confirmPassword: '' }}
              validationSchema={Yup.object({
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
              })}
              onSubmit={(values, actions) => {
                dispatch(profilePassword({ password: values.password }));
                actions.setSubmitting(true);
                actions.resetForm();
              }}
            >
              {(props) => (
                <Form onSubmit={props.handleSubmit}>
                  <Form.Group controlId="password">
                    <Form.Label>Password *</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter password"
                      value={props.values.password}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      name="password"
                    ></Form.Control>
                    {props.touched.password && props.errors.password ? (
                      <p>{props.errors.password}</p>
                    ) : null}
                  </Form.Group>
                  <Form.Group controlId="confirmPassword">
                    <Form.Label>Confirm Password *</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Confirm password"
                      value={props.values.confirmPassword}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      name="confirmPassword"
                    ></Form.Control>
                    {props.touched.confirmPassword &&
                    props.errors.confirmPassword ? (
                      <p>{props.errors.confirmPassword}</p>
                    ) : null}
                  </Form.Group>

                  <Button
                    type="submit"
                    variant="primary"
                    disabled={!props.isValid}
                  >
                    EDIT PASSWORD
                  </Button>
                </Form>
              )}
            </Formik>
          </div>
          <div className="profile-status">
            <h5 className="h5-status">Status</h5>

            <Form.Check
              type="switch"
              id="custom-switch"
              label={accessToPost(isCanPost)}
              disabled
              isValid={isCanPost}
              defaultChecked={isCanPost}
            />

            <Form.Check
              type="switch"
              id="custom-switch"
              label={accessToComment(isCanWrite)}
              disabled
              isValid={isCanWrite}
              defaultChecked={isCanWrite}
            />

            <Form.Check
              type="switch"
              id="custom-switch"
              label={haveReport(isReported)}
              disabled
              isValid={isReported}
              defaultChecked={isReported}
            />

            <Button variant="danger" onClick={showConfirmModal}>
              Delete your account
            </Button>

            <ConfirmModal
              showModal={showModal}
              setShowModal={setShowModal}
              infoModal={infoModal}
              executeInMenuItem={deleteAccount}
            />
          </div>
        </div>
      </LoadAndErrorContainer>
    </>
  );
};
export default ProfileScreen;
