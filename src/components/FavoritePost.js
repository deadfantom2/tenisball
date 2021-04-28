import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Photo from './Photo';
import ContactModal from '../Modal/ContactModal';
import { sendEmailContact } from '../actions/userActions';
import '../styles/FavoritePost.scss';

const FavoritePost = ({ favorite, doUnFavorite }) => {
  let [showModal, setShowModal] = useState(false);

  const photo = {
    route: 'post',
    user: favorite.folderPhoto,
    link: favorite.link,
    name: favorite.photo,
  };

  const dispatch = useDispatch();

  const sendEmail = (body) => {
    const { emailContact, nameContact, messageContact } = body;
    dispatch(
      sendEmailContact({
        email: emailContact,
        name: nameContact,
        message: messageContact,
      })
    );
  };

  return (
    <div className="favorite">
      <div className="favorite-icons">
        <i
          className="fas fa-envelope fa-2x"
          onClick={() => setShowModal(true)}
        ></i>
        <i
          className="fas fa-star fa-2x"
          onClick={() => doUnFavorite(favorite)}
        ></i>
      </div>
      <Photo photo={photo} postTitle={favorite.title} styleClass="image" />
      <div className="favorite-title">{favorite.title}</div>

      <ContactModal
        showModal={showModal}
        setShowModal={setShowModal}
        sendEmail={sendEmail}
        title={favorite.title}
      />
    </div>
  );
};

export default FavoritePost;
