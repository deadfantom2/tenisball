import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col } from 'react-bootstrap';
import Post from '../components/Post';
import LoadAndErrorContainer from '../containers/LoadAndErrorContainer';
import { listPosts } from '../actions/postActions';
import FilterModal from '../Modal/FilterModal';
import '../styles/HomeScreen.scss';

const HomeScreen = () => {
  let [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();
  const { loading, posts, activeFilters, filterPosts } = useSelector(
    (state) => state.postList
  );

  useEffect(() => {
    dispatch(listPosts());
  }, [dispatch]);

  return (
    <LoadAndErrorContainer
      loading={loading}
      title="All posts"
      setShowModal={setShowModal}
      activeBtn
      filter
    >
      {Object.keys(activeFilters).length === 0 ? (
        posts.length > 0 ? (
          posts.map((post) => (
            <Col
              sm={12}
              md={6}
              lg={4}
              xl={3}
              key={post._id}
              className="col item"
            >
              <Post post={post} />
            </Col>
          ))
        ) : (
          <div className="not-posts">
            <h3>Not have yet any posts</h3>
          </div>
        )
      ) : (
        filterPosts.map((post) => (
          <Col sm={12} md={6} lg={4} xl={3} key={post._id} className="col item">
            <Post post={post} />
          </Col>
        ))
      )}

      <FilterModal
        showModal={showModal}
        setShowModal={setShowModal}
        activeFilters={activeFilters}
      />
    </LoadAndErrorContainer>
  );
};

export default HomeScreen;
