import React, { useState, useEffect, useCallback } from 'react';
import ConfirmModal from '../Modal/ConfirmModal';
import '../styles/MenuItem.scss';

const MenuItem = ({ body, isYourComment, doReport, doEdit, doRemove }) => {
  let [showMenuItem, setShowMenuItem] = useState(false);
  let [showModal, setShowModal] = useState(false);
  let [infoModal, setInfoModal] = useState({
    header: '',
    body: '',
    footer: '',
  });

  const handleUserKeyPress = useCallback((event) => {
    const {
      target: { className },
    } = event;

    if (className !== 'menu-item') {
      setShowMenuItem(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('mousedown', handleUserKeyPress);
    return () => {
      window.removeEventListener('mousedown', handleUserKeyPress);
    };
  }, [handleUserKeyPress, isYourComment]);

  const opeMenu = () => {
    return setShowMenuItem(!showMenuItem);
  };

  const activeMenu = `menu ${!showMenuItem ? 'closeMenu' : 'openMenu'}`;

  const chooseMenuItem = (e, index) => {
    e.preventDefault();
    setShowModal(true);
    switch (index) {
      case 0:
        setInfoModal({
          position: 0,
          header: 'Warning Report',
          body: 'Do you want report this comment?',
          footer: 'Report',
        });
        break;
      case 1:
        setInfoModal({
          position: 1,
          header: 'Warning Edit',
          body: body.comment,
          footer: 'Edit',
        });
        break;
      case 2:
        setInfoModal({
          position: 2,
          header: 'Warning Delete',
          body: 'Do you want delete this comment?',
          footer: 'Delete',
        });
        break;
      default:
        break;
    }
  };

  const executeInMenuItem = (positionMenuItem, newComment) => {
    switch (positionMenuItem) {
      case 0:
        doReport(body._id, body.user);
        break;
      case 1:
        doEdit(body._id, newComment);
        infoModal.body = newComment;
        break;
      case 2:
        doRemove(body._id);
        break;
      default:
        break;
    }
    setShowModal(!showModal);
  };

  return (
    <>
      <span className="menu-zone" onClick={opeMenu}>
        <i className="fas fa-ellipsis-h"></i>
        <ul className={activeMenu}>
          {!isYourComment && (
            <li
              className="menu-item"
              key={0}
              onClick={(e) => chooseMenuItem(e, 0)}
            >
              Report
            </li>
          )}

          {isYourComment && (
            <>
              <li
                className="menu-item"
                key={1}
                onClick={(e) => chooseMenuItem(e, 1)}
              >
                Edit
              </li>
              <li
                className="menu-item"
                key={2}
                onClick={(e) => chooseMenuItem(e, 2)}
              >
                Delete
              </li>
            </>
          )}
        </ul>
      </span>

      <ConfirmModal
        showModal={showModal}
        setShowModal={setShowModal}
        infoModal={infoModal}
        executeInMenuItem={executeInMenuItem}
      />
    </>
  );
};

export default MenuItem;
