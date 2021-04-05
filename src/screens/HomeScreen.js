import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col } from 'react-bootstrap';
import Post from '../components/Post';
import LoadAndErrorContainer from '../containers/LoadAndErrorContainer';
import { listPosts } from '../actions/postActions';
import '../styles/HomeScreen.scss';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { loading, posts } = useSelector((state) => state.postList);

  useEffect(() => {
    dispatch(listPosts());
  }, [dispatch]);

  return (
    <LoadAndErrorContainer loading={loading} title="All posts">
      {posts.length > 0 &&
        posts.map((post) => (
          <Col sm={12} md={6} lg={4} xl={3} key={post._id} className="col item">
            <Post post={post} />
          </Col>
        ))}
    </LoadAndErrorContainer>
  );
};

export default HomeScreen;
