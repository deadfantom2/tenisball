import React from 'react';
import { Form, Button } from 'react-bootstrap';
import '../styles/CEPostForm.scss';

const CEPostForm = ({
  children,
  submitHandler,
  title,
  setTitle,
  bitkin,
  setBitkin,
  petrov,
  setPetrov,
  link_video,
  setLink_video,
  certificate,
  setCertificate,
  description,
  setDescription,
  textBtn,
}) => {
  return (
    <>
      <Form onSubmit={submitHandler} className="createandedit__panel">
        <div className="createandedit__panel_left">
          <Form.Group controlId="title">
            <Form.Label>Title *</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="bitkin">
            <Form.Label>Bitkin *</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter bitkin"
              value={bitkin}
              onChange={(e) => setBitkin(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="petrov">
            <Form.Label>Petrov *</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter petrov"
              value={petrov}
              onChange={(e) => setPetrov(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="link_video">
            <Form.Label>Link video</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter link video"
              value={link_video}
              onChange={(e) => setLink_video(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="certificate">
            <Form.Label>Certificate *</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter certificate"
              value={certificate}
              onChange={(e) => setCertificate(e.target.value)}
            ></Form.Control>
          </Form.Group>
        </div>
        <div className="createandedit__panel_right">
          <Form.Group controlId="description">
            <Form.Label>Description *</Form.Label>
            <Form.Control
              as="textarea"
              rows={6}
              placeholder="Enter your description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          <Button className="btn__edit_post" type="submit" variant="primary">
            {textBtn}
          </Button>
          <Form.Group>{children}</Form.Group>
        </div>
      </Form>
    </>
  );
};
export default CEPostForm;
