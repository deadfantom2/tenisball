import React, { useState, useEffect } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import '../styles/ConfirmModal.scss';

const ConfirmModal = ({
  showModal,
  setShowModal,
  infoModal,
  executeInMenuItem,
}) => {
  const [comment, setComment] = useState('');

  useEffect(() => {
    setComment(infoModal.body);
  }, [showModal, infoModal.body]);

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <Modal show={showModal} onHide={handleClose} keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>{infoModal.header}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {infoModal.position === (0 || 2) ? (
          infoModal.body
        ) : (
          <Form.Group controlId="messageFooter">
            <Form.Control
              as="textarea"
              rows={3}
              defaultValue={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </Form.Group>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={() => executeInMenuItem(infoModal.position, comment)}
        >
          {infoModal.footer}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmModal;
