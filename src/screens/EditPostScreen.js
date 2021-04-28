import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onePost, editPost } from '../actions/postActions';
import { POST_ONE_RESET } from '../constants/postConstants';
import { deleteImageFirebase } from '../actions/imageActions';
import LoadAndErrorContainer from '../containers/LoadAndErrorContainer';
import CEPostForm from '../components/CEPostForm';
import DropZone from '../components/DropZone ';
import Photo from '../components/Photo';
import ConfirmModal from '../Modal/ConfirmModal';
import '../styles/EditScreen.scss';

const EditPost = ({ history, match }) => {
  const postId = match.params.id;
  const [idImage, setIdImage] = useState(null);
  const [pathFirebaseImg, setPathFirebaseImg] = useState('');
  const [title, setTitle] = useState('');
  const [certificate, setCertificate] = useState('');
  const [description, setDescription] = useState('');
  const [bitkin, setBitkin] = useState('');
  const [petrov, setPetrov] = useState('');
  const [imperator, setImperator] = useState('');
  const [link_video, setLink_video] = useState('');
  const [photos, setPhotos] = useState([]);
  let [showModal, setShowModal] = useState(false);
  let [infoModal, setInfoModal] = useState({
    header: '',
    body: '',
    footer: '',
  });
  const firstElement = useRef(null);

  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userLogin);
  const { loading, post } = useSelector((state) => state.postOne);

  useEffect(() => {
    if (!post) {
      dispatch(onePost(postId));
    } else {
      setTitle(post.title);
      setCertificate(post.certificate);
      setDescription(post.description);
      setBitkin(post.bitkin);
      setPetrov(post.petrov);
      setImperator(post.imperator);
      setLink_video(post.link_video);
      setPhotos(post.photos);
    }
    return () => post && dispatch({ type: POST_ONE_RESET });
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
        imperator,
        link_video,
      })
    );
  };

  const showConfirmModal = (value) => {
    const {
      photo: { _id, route, name },
    } = value;
    setShowModal(true);
    setInfoModal({
      position: 2,
      header: 'Warning Image',
      body: 'Do you want delete this image?',
      footer: 'Delete Image',
    });
    setIdImage(_id);
    setPathFirebaseImg(`${route}/${userInfo.user.tokenUser}/${name}`);
  };

  const removeImage = () => {
    dispatch(deleteImageFirebase({ idPhoto: idImage }, pathFirebaseImg));
    setShowModal(!showModal);
  };

  return (
    <>
      <LoadAndErrorContainer loading={loading} title="Modification">
        <div className="createandedit__post_form" ref={firstElement}>
          <CEPostForm
            submitHandler={submitHandler}
            title={title}
            setTitle={setTitle}
            bitkin={bitkin}
            setBitkin={setBitkin}
            petrov={petrov}
            setPetrov={setPetrov}
            imperator={imperator}
            setImperator={setImperator}
            link_video={link_video}
            setLink_video={setLink_video}
            certificate={certificate}
            setCertificate={setCertificate}
            description={description}
            setDescription={setDescription}
            type="edit"
            textBtn="Edit post"
          >
            <DropZone id={postId} />
          </CEPostForm>

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
        </div>
      </LoadAndErrorContainer>
    </>
  );
};
export default EditPost;
