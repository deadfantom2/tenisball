import React from 'react';
import { useDispatch } from 'react-redux';
import { sendEmailContact } from '../actions/userActions';
import { Container, Row, Form, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
// import { auth } from '../firebase';

import '../styles/Footer.scss';

const Footer = () => {
  const dispatch = useDispatch();

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    touched,
    errors,
  } = useFormik({
    initialValues: {
      emailFooter: '',
      nameFooter: '',
      messageFooter: '',
    },
    validationSchema: Yup.object({
      emailFooter: Yup.string()
        .email('* Email is invalid')
        .min(11, '* Email must be least than 11 characters')
        .max(50, '* Email must be shorter than 50 characters')
        .required('* Email is required'),
      nameFooter: Yup.string()
        .min(3, '* Name must be least than 3 characters')
        .max(30, '* Name must be shorter than 30 characters')
        .required('* Name must be required')
        .matches(
          /^([a-zA-Z]{3,30})+$/,
          '* This field cannot contain blankspaces or specific characters'
        ),
      messageFooter: Yup.string()
        .min(3, '* Message must be least than 3 characters')
        .max(30, '* Message must be shorter than 30 characters')
        .required('* Message must be required'),
    }),
    onSubmit: (body, { resetForm }) => {
      const { emailFooter, nameFooter, messageFooter } = body;
      dispatch(
        sendEmailContact({
          email: emailFooter,
          name: nameFooter,
          message: messageFooter,
        })
      );
      resetForm({ body: '' });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
  });

  return (
    <footer>
      <div className="shares">
        <Container>
          <Row className="contact">
            <div className="contact-mobile">
              <div>
                <i className="fab fa-viber"></i>
                <i className="fab fa-telegram"></i>
                <i className="fab fa-whatsapp"></i>
                <a href="https://www.instagram.com/monnaierusse/">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.youtube.com">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
              <div className="contact-mobile_phones">
                <span>
                  +336 50 00 46 41
                  <br />
                  +38067 884 1 884
                </span>
              </div>
            </div>

            <div className="contact-email">
              <Form onSubmit={handleSubmit} className="contact-form">
                <Form.Group controlId="emailFooter">
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    value={values.emailFooter}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  ></Form.Control>
                  {touched.emailFooter && errors.emailFooter ? (
                    <p>{errors.emailFooter}</p>
                  ) : null}
                </Form.Group>
                <Form.Group controlId="nameFooter">
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    value={values.nameFooter}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  ></Form.Control>
                  {touched.nameFooter && errors.nameFooter ? (
                    <p>{errors.nameFooter}</p>
                  ) : null}
                </Form.Group>
                <Form.Group controlId="messageFooter">
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter your message"
                    value={values.messageFooter}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.messageFooter && errors.messageFooter ? (
                    <p>{errors.messageFooter}</p>
                  ) : null}
                </Form.Group>

                <Button type="submit" variant="primary">
                  SEND A MESSAGE
                </Button>
              </Form>
            </div>
          </Row>
        </Container>
      </div>

      <div className="copyright">Copyright &copy VSH Russian coins</div>
    </footer>
  );
};

export default Footer;
