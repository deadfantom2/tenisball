import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, Carousel } from 'react-bootstrap';
import { listPosts } from '../actions/postActions';
import Post from '../components/Post';

import LoadAndErrorContainer from '../containers/LoadAndErrorContainer';

const PostDetails = ({ match }) => {
  const [post, setPost] = useState();

  const dispatch = useDispatch();
  const { loading, posts, activeFilters, filterPosts } = useSelector(
    (state) => state.postList
  );

  useEffect(() => {
    dispatch(listPosts());
    return () => {};
  }, [dispatch]);

  return (
    <>
      <LoadAndErrorContainer loading={loading} title="Posts">
        {posts.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </LoadAndErrorContainer>
    </>
  );
};
export default PostDetails;
