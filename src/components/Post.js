import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Photo from './Photo';
import { addInFavoritePost } from '../actions/userActions';
import { addLikePost } from '../actions/postActions';
import LikeCommentBar from '../components/LikeCommentBar';
import '../styles/Post.scss';

const Post = ({ post }) => {
  const dispatch = useDispatch();

  const checkCertificate = (certificate) => {
    return certificate === 'NGC' ? (
      <img src="ngc.svg" width="100px" height="36px" alt="NGC" />
    ) : (
      <img src="pcgs.svg" width="100px" height="28px" alt="PCGS" />
    );
  };

  const postLike = (post) => {
    dispatch(addLikePost({ _id: post._id }));
  };

  const postFavorite = (post) => {
    console.log(post);
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
          <Link to={`/post/${post._id}`}>
            <h6>More details...</h6>
          </Link>
          <p>Send message to ask about coin</p>
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
    </div>
  );
};

export default Post;
