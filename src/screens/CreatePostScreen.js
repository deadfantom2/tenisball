import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CREATE_POST_RESET } from '../constants/postConstants';
import LoadAndErrorContainer from '../containers/LoadAndErrorContainer';
import { createPost } from '../actions/postActions';
import CEPostForm from '../components/CEPostForm';
import DropZone from '../components/DropZone ';
import '../styles/CreatePost.scss';

const CreatePostScreen = () => {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [certificate, setCertificate] = useState('');
  const [description, setDescription] = useState('');
  const [bitkin, setBitkin] = useState('');
  const [petrov, setPetrov] = useState('');
  const [link_video, setLink_video] = useState('');

  const dispatch = useDispatch();
  const { loading, newpost } = useSelector((state) => state.addPost);

  useEffect(() => {
    if (newpost && Object.keys(newpost).indexOf('post') > 0) {
      setId(newpost.post._id);
    }
    return () => {
      id && dispatch({ type: CREATE_POST_RESET });
    };
  }, [dispatch, newpost, id]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createPost({
        title,
        certificate,
        description,
        bitkin,
        petrov,
        link_video,
      })
    );
  };

  return (
    <>
      <LoadAndErrorContainer loading={loading} title="Creation of post">
        <div className="createandedit__post_form">
          <CEPostForm
            submitHandler={submitHandler}
            title={title}
            setTitle={setTitle}
            bitkin={bitkin}
            setBitkin={setBitkin}
            petrov={petrov}
            setPetrov={setPetrov}
            link_video={link_video}
            setLink_video={setLink_video}
            certificate={certificate}
            setCertificate={setCertificate}
            description={description}
            setDescription={setDescription}
            textBtn="Create post"
          >
            {id && <DropZone id={id} />}
          </CEPostForm>
        </div>
      </LoadAndErrorContainer>
    </>
  );
};

export default CreatePostScreen;
