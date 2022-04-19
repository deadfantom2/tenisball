import React, { useEffect, memo } from 'react';
import { Modal } from 'react-bootstrap';
import '../styles/DetailsModal.scss';

const DetailsModal = ({
  showModal,
  setShowModal,
  item: {
    firstname,
    lastname,
    picture,
    sex,
    country: { code, picture: flag },
    data: { rank, points, age, weight, height },
  },
}) => {
  useEffect(() => {}, [showModal]);

  const handleClose = () => {
    setShowModal(false);
  };

  const weightkg = (weight) => {
    return weight / 1000;
  };

  return (
    <Modal
      show={showModal}
      onHide={handleClose}
      keyboard={false}
      className="custom__modal"
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div className="border-photo">
          <img src={picture} alt="photo of tenises" />
        </div>
        <div className="modal-body-upper">
          <div className="tenises__name">
            <span>{firstname}</span>
            <p>{lastname}</p>
          </div>
          <div className="tenises__flag">
            <img src={flag} alt="flag of country" />
            <span>{code}</span>
          </div>
        </div>

        <div className="modal-body-down">
          <div className="body-down-info">
            <div className="one">
              <span>Rank</span>
              <p>#{rank}</p>
            </div>
            <div className="two">
              <span>Points</span>
              <p>{points}</p>
            </div>
            <div className="three">
              <span>Country</span>
              <p>{code}</p>
            </div>
            <div className="four">
              <span>Sex</span>
              <p>{sex}</p>
            </div>
            <div className="five">
              <span>Age</span>
              <p>{age}</p>
            </div>
            <div className="six">
              <span>Weight</span>
              <p>{weightkg(weight)} kg</p>
            </div>
            <div className="seven">
              <span>Height</span>
              <p>{height} cm</p>
            </div>
          </div>
          <div className="body-down-career">
            <span>Career Title</span>
            <p></p>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default memo(DetailsModal);
