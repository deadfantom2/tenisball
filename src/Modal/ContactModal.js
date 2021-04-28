import React, { useEffect } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../styles/ConfirmModal.scss';

const ContactModal = ({ showModal, setShowModal, sendEmail, title }) => {
  useEffect(() => {}, [showModal]);

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    touched,
    errors,
  } = useFormik({
    initialValues: {
      emailContact: '',
      nameContact: '',
      messageContact: '',
    },
    validationSchema: Yup.object({
      emailContact: Yup.string()
        .email('* Email is invalid')
        .min(11, '* Email must be least than 11 characters')
        .max(50, '* Email must be shorter than 50 characters')
        .required('* Email is required'),
      nameContact: Yup.string()
        .min(3, '* Name must be least than 3 characters')
        .max(30, '* Name must be shorter than 30 characters')
        .required('* Name must be required')
        .matches(
          /^([a-zA-Z]{3,30})+$/,
          '* This field cannot contain blankspaces or specific characters'
        ),
      messageContact: Yup.string()
        .min(3, '* Message must be least than 3 characters')
        .max(30, '* Message must be shorter than 30 characters')
        .required('* Message must be required'),
    }),
    onSubmit: (body, { resetForm }) => {
      sendEmail(body);
      resetForm({ body: '' });
      handleClose();
    },
  });

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <Modal show={showModal} onHide={handleClose} keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Send email about {title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit} className="contact-form">
          <Form.Group controlId="emailContact">
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={values.emailContact}
              onChange={handleChange}
              onBlur={handleBlur}
            ></Form.Control>
            {touched.emailContact && errors.emailContact ? (
              <p>{errors.emailContact}</p>
            ) : null}
          </Form.Group>
          <Form.Group controlId="nameContact">
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={values.nameContact}
              onChange={handleChange}
              onBlur={handleBlur}
            ></Form.Control>
            {touched.nameContact && errors.nameContact ? (
              <p>{errors.nameContact}</p>
            ) : null}
          </Form.Group>
          <Form.Group controlId="messageContact">
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter your message"
              value={values.messageContact}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.messageContact && errors.messageContact ? (
              <p>{errors.messageContact}</p>
            ) : null}
          </Form.Group>
          <Form.Label>
            In this form you send the message to the administrator to request
            information on the selected coin!
          </Form.Label>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>

            <Button type="submit" variant="primary">
              SEND
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ContactModal;
