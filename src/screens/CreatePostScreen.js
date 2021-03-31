import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import FormContainer from '../containers/FormContainer';
import { Form, Button } from 'react-bootstrap';
import { createPost } from '../actions/postActions';
import DropZone from '../components/DropZone ';
import '../styles/CreatePost.scss';

const CreatePostScreen = () => {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('Rouble 1');
  const [certificate, setCertificate] = useState('NGC');
  const [description, setDescription] = useState('sdsdsd');
  const [bitkin, setBitkin] = useState('R');
  const [petrov, setPetrov] = useState('3R');
  const [link_video, setLink_video] = useState('link');

  const dispatch = useDispatch();
  const { loading, newpost } = useSelector((state) => state.addPost);

  useEffect(() => {
    if (newpost && Object.keys(newpost).indexOf('post') > 0) {
      setId(newpost.post._id);
    }
  }, [dispatch, newpost]);

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
      <Link to="/" className="btn btn-light my-3">
        Go back
      </Link>

      <FormContainer loading={loading} title="Add Post">
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

          <Button type="submit" className="btn__create_post" variant="primary">
            ADD POST
          </Button>
        </Form>

        {id && <DropZone id={id} />}
      </FormContainer>
    </>
  );
};

export default CreatePostScreen;
