import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { onePost, editPost } from '../actions/postActions';
import { deleteImage } from '../actions/imageActions';
import Photo from '../components/Photo';
import { Button, Form } from 'react-bootstrap';
import AuthContainer from '../containers/AuthContainer';
import { POST_ONE_RESET } from '../constants/postConstants';
import DropZone from '../components/DropZone ';
import '../styles/EditScreen.scss';
import ConfirmModal from '../components/ConfirmModal';

const EditPost = ({ history, match }) => {
  const postId = match.params.id;
  const [idImage, setIdImage] = useState(null);
  const [title, setTitle] = useState(''); //
  const [certificate, setCertificate] = useState(''); //
  const [description, setDescription] = useState(''); //
  const [bitkin, setBitkin] = useState(''); //
  const [petrov, setPetrov] = useState(''); //
  const [link_video, setLink_video] = useState(''); //
  const [photos, setPhotos] = useState([]);
  let [showModal, setShowModal] = useState(false);
  let [infoModal, setInfoModal] = useState({
    header: '',
    body: '',
    footer: '',
  });
  const firstElement = useRef(null);

  const dispatch = useDispatch();
  const { loading, post } = useSelector((state) => state.postOne);
  const { loading: loadingEdit } = useSelector((state) => state.editPost);

  useEffect(() => {
    firstElement.current.focus();
    if (!post) {
      dispatch(onePost(postId));
    } else {
      setTitle(post.title);
      setCertificate(post.certificate);
      setDescription(post.description);
      setBitkin(post.bitkin);
      setPetrov(post.petrov);
      setLink_video(post.link_video);
      setPhotos(post.photos);
    }
    return () => {
      post && dispatch({ type: POST_ONE_RESET });
    };
  }, [dispatch, history, postId, post]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      editPost(postId, {
        title,
        certificate,
        description,
        bitkin,
        petrov,
        link_video,
      })
    );
  };

  const showConfirmModal = (value) => {
    setShowModal(true);
    setInfoModal({
      position: 2,
      header: 'Warning Image',
      body: 'Do you want delete this image?',
      footer: 'Delete Image',
    });
    setIdImage(value.photo._id);
  };

  const removeImage = () => {
    dispatch(deleteImage({ idPhoto: idImage }));
    setShowModal(!showModal);
  };

  return (
    <div className="edit__post">
      <Link to="/" ref={firstElement} className="btn btn-light my-3">
        Go back
      </Link>

      <AuthContainer loading={loading || loadingEdit}>
        <h1>Edit Post</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="title">
            <Form.Label>Title *</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
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
          <Form.Group controlId="description">
            <Form.Label>Description *</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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

          <Button className="btn__edit_post" type="submit" variant="primary">
            EDIT POST
          </Button>
        </Form>
        <DropZone id={postId} />

        {photos.length > 0 && (
          <div className="photos">
            {photos.map((photo, index) => (
              <div className="photos-edit" key={index}>
                <Photo
                  photo={photo.photo}
                  countNumberPhotos={photos.length}
                  postTitle="Photo coin"
                />
                <i
                  className="fas fa-trash-alt"
                  onClick={() => showConfirmModal(photo)}
                ></i>
              </div>
            ))}
          </div>
        )}

        <ConfirmModal
          showModal={showModal}
          setShowModal={setShowModal}
          infoModal={infoModal}
          executeInMenuItem={removeImage}
        />
      </AuthContainer>
    </div>
  );
};
export default EditPost;
