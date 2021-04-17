import React, { useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { tsars } from '../outils/TsarList';
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
  imperator,
  setImperator,
  link_video,
  setLink_video,
  certificate,
  setCertificate,
  description,
  setDescription,
  textBtn,
  type,
}) => {
  const certificates = [
    { name: 'No slabe', value: 'None' },
    { name: 'NGC', value: 'NGC' },
    { name: 'PCGS', value: 'PCGS' },
  ];

  useEffect(() => {}, [certificate]);

  const checkScreen = (value) => {
    if (type === 'edit') {
      if (value === 'certificate') {
        console.log(certificate);
        return certificate;
      } else if (value === 'imperator') {
        return imperator;
      }
    } else {
      if (value === 'certificate') {
        return 'Choose certification';
      } else if (value === 'imperator') {
        return 'Choose an Imperator';
      }
    }
  };

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
        </div>
        <div className="createandedit__panel_right">
          <Form.Group controlId="imperator">
            <Form.Label>Imperators * {imperator}</Form.Label>
            <Form.Control
              as="select"
              defaultValue={checkScreen('imperator')}
              // defaultValue="Choose an Imperator"
              onChange={(e) => setImperator(e.target.value)}
            >
              <option disabled>Choose an Imperator</option>
              {tsars.map((tsar, index) => (
                <option key={index} value={tsar.imperator}>
                  {tsar.name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="certificate">
            <Form.Label>
              Certificate * {certificate} - {checkScreen('certificate')}
            </Form.Label>
            <Form.Control
              as="select"
              defaultValue={checkScreen('certificate') || certificate}
              // defaultValue="Choose certification"
              onChange={(e) => setCertificate(e.target.value)}
            >
              <option disabled>Choose certification</option>
              {certificates.map((certif, index) => (
                <option key={index} value={certif.value}>
                  {certif.name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Description *</Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
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
