import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Carousel } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { onePost, addCommentPost } from '../actions/postActions';
import Photo from '../components/Photo';
import Comment from '../components/Comment';
import { POST_ONE_RESET } from '../constants/postConstants';
import LoadAndErrorContainer from '../containers/LoadAndErrorContainer';
import '../styles/PostDetails.scss';

const PostDetails = ({ match }) => {
  const [post, setPost] = useState({ photos: [], comments: [] });
  const [comment, setComment] = useState('');
  const [isActive, setIsActive] = useState(false);

  const dispatch = useDispatch();
  const { loading, post: postOne } = useSelector((state) => state.postOne);

  const argsPosts = [
    { postTitle: 'Title', postValue: post.title },
    { postTitle: 'Bitkin', postValue: post.bitkin },
    { postTitle: 'Petrov', postValue: post.petrov },
    { postTitle: 'Grading', postValue: post.certificate },
    { postTitle: 'Description', postValue: post.description },
  ];

  useEffect(() => {
    if (!postOne || Object.keys(postOne).length === 0) {
      dispatch(onePost(match.params.id));
    } else {
      setPost(postOne);
    }
    return () => {
      postOne && dispatch({ type: POST_ONE_RESET });
    };
  }, [dispatch, postOne, match]);

  const showVideo = () => {
    return setIsActive(!isActive);
  };

  const sendComment = (e) => {
    e.preventDefault();
    dispatch(addCommentPost({ post: match.params.id, comment: comment }));
    setComment('');
  };

  return (
    <>
      <LoadAndErrorContainer loading={loading} title="More detail of the post">
        <div className="post__detals">
          <div className="post__detals_header">
            <div className="post__detals_header_media">
              {post.photos.length > 0 ? (
                <Carousel>
                  {post.photos.map((photo, index) => (
                    <Carousel.Item key={index}>
                      <Photo photo={photo.photo} />
                    </Carousel.Item>
                  ))}
                </Carousel>
              ) : (
                <i className="fas fa-image no-image"></i>
              )}
            </div>
            <div className="post__detals_header_description">
              <ul>
                {argsPosts.map((args, index) => (
                  <li key={index}>
                    <h6>{args.postTitle}: </h6>
                    <span className="text-span">{args.postValue}</span>
                  </li>
                ))}
                <li>
                  <h6 className="show-video" onClick={showVideo}>
                    Show video
                  </h6>
                  {isActive && (
                    <span className="text-span video-frame">
                      <iframe
                        title={post.title}
                        width="500"
                        height="282"
                        src={
                          'https://www.youtube.com/embed/' +
                          post.link_video +
                          '?modestbranding=1&rel=0'
                        }
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </span>
                  )}
                </li>
              </ul>
            </div>
          </div>
          <div className="post__detals_footer">
            <Form onSubmit={sendComment}>
              <Form.Group controlId="comment">
                <Form.Control
                  type="text"
                  placeholder="Put your comment..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group>
                <Button type="submit" variant="primary" className="add_comment">
                  Comment
                </Button>
              </Form.Group>
            </Form>

            {post.comments.map((value, index) => (
              <Comment key={index} comment={value.comment} />
            ))}
          </div>
        </div>
      </LoadAndErrorContainer>
    </>
  );
};
export default PostDetails;

<iframe
  width="1280"
  height="720"
  src="https://www.youtube.com/embed/GHa5Yh2Wze0"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>;
