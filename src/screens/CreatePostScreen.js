import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'react-bootstrap';
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
  const [imperator, setImperator] = useState('');
  const [link_video, setLink_video] = useState('');

  const dispatch = useDispatch();
  const { loading, newpost } = useSelector((state) => state.addPost);

  useEffect(() => {
    if (Object.keys(newpost).indexOf('post') > 0) {
      setId(newpost.post._id);
    }
    console.log('id: ', id);
    return () => {
      id && dispatch({ type: CREATE_POST_RESET });
    };
  }, [dispatch, newpost, id]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (id !== '') {
      setId('');
    }
    dispatch(
      createPost({
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
            imperator={imperator}
            setImperator={setImperator}
            link_video={link_video}
            setLink_video={setLink_video}
            certificate={certificate}
            setCertificate={setCertificate}
            description={description}
            setDescription={setDescription}
            type="create"
            textBtn="Create post"
          ></CEPostForm>
          <Form.Group> {id && <DropZone id={id} />}</Form.Group>
        </div>
      </LoadAndErrorContainer>
    </>
  );
};

export default CreatePostScreen;
