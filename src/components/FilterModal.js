import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Modal, Form } from 'react-bootstrap';
import { filterActivePost, filterPost } from '../actions/postActions';
import { tsars } from '../outils/TsarList';
import '../styles/FilterModal.scss';

const FilterModal = ({ showModal, setShowModal }) => {
  const [filters, setFilters] = useState(['']);

  const dispatch = useDispatch();

  const handleClose = () => {
    setShowModal(false);
  };

  const handleChange = (e) => {
    if (filters.indexOf(e.target.value) >= 0) {
      setFilters(filters.filter((filters) => filters !== e.target.value));
    } else {
      setFilters((oldFilters) => [...oldFilters, e.target.value]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (filters.length === 1) {
      dispatch(filterActivePost({}));
    } else {
      dispatch(filterActivePost({ imperator: filters }));
      dispatch(filterPost({ imperator: filters }));
    }
    setShowModal(false);
  };

  const checkIfChecked = (name) => {
    if (filters.length > 0) {
      return filters.indexOf(name) >= 0;
    }
  };

  return (
    <Modal show={showModal} onHide={handleClose} keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Select your Imperators</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={(e) => handleSubmit(e)} className="contact-form">
          <Form.Group controlId="filterModal">
            <ul className="filter">
              {tsars.map((tsar, index) => (
                <li key={index} className="filter-row">
                  <input
                    type="checkbox"
                    value={tsar.imperator || ''}
                    onChange={(e) => handleChange(e)}
                    checked={checkIfChecked(tsar.imperator)}
                  />
                  {tsar.name}
                </li>
              ))}
            </ul>
          </Form.Group>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" variant="primary">
              Filter
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default FilterModal;
