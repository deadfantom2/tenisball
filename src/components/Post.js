import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Photo from './Photo';
import { sendEmailContact, addInFavoritePost } from '../actions/userActions';
import ContactModal from './ContactModal';
import { addLikePost } from '../actions/postActions';
import LikeCommentBar from '../components/LikeCommentBar';
import '../styles/Post.scss';

const Post = ({ post }) => {
  let [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  const checkCertificate = (certificate) => {
    return certificate === 'NGC' ? (
      <img src="ngc.svg" width="100px" height="36px" alt="NGC" />
    ) : (
      <img src="pcgs.svg" width="100px" height="28px" alt="PCGS" />
    );
  };

  const postLike = (post) => {
    console.log(post);
    dispatch(addLikePost({ _id: post._id }, post));
  };

  const postFavorite = (post) => {
    const { _id, title, photos } = post;
    if (post.photos.length > 0) {
      dispatch(
        addInFavoritePost({
          title,
          folderPhoto: photos[0].photo.user,
          link: photos[0].photo.link,
          photo: photos[0].photo.name,
          postId: _id,
        })
      );
    } else {
      /**TODO IF NOT PHOTO DO SOMETHINGS   */
    }
  };

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
    <div className="coin_post">
      <div className="coin_post__header">
        {post.photos.length > 0 && (
          <Photo
            photo={post.photos[0].photo}
            postTitle={post.title}
            styleClass="image"
          />
        )}
      </div>
      <div className="coin_post__body">
        <div className="coin_post__body_title">
          <Link to={`/post/edit/${post._id}`}>
            <h6>{post.title}</h6>
          </Link>
        </div>
        <div className="coin_post__body_certif">
          {checkCertificate(post.certificate)}
        </div>
        <div className="coin_post__body_text">
          <img
            src="/send_mail.svg"
            alt="send email"
            onClick={() => setShowModal(true)}
          />
          <Link to={`/post/${post._id}`}>
            <h6>More details...</h6>
          </Link>
        </div>
      </div>
      <div className="coin_post__footer">
        <LikeCommentBar
          postOrComment={post}
          param="post"
          doLike={postLike}
          doFavorite={postFavorite}
        />
      </div>

      <ContactModal
        showModal={showModal}
        setShowModal={setShowModal}
        sendEmail={sendEmail}
        title={post.title}
      />
    </div>
  );
};

export default Post;
