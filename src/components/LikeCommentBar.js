import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/LikeCommentBar.scss';

const LikeCommentBar = ({ postOrComment, param, doLike, doFavorite }) => {
  const { userInfo } = useSelector((state) => state.userLogin);

  const reverseName = (name) => {
    return name.split('').reverse().join('');
  };

  const checkInLikesArray = (arr) => {
    if (arr === undefined) {
      return false;
    }
    return userInfo !== undefined && userInfo !== null
      ? arr.some(({ name }) => {
          return name === userInfo.user.name;
        })
      : false;
  };

  const checkInFavoritesArray = (arr) => {
    if (arr === undefined) {
      return false;
    }
    return userInfo !== undefined && userInfo !== null
      ? arr.some(({ user }) => {
          return user === reverseName(userInfo.user.tokenUser);
        })
      : false;
  };

  const allLikes = `fa-heart fa-2x ${
    checkInLikesArray(postOrComment.likes) ? ' fas liked' : 'far notLiked'
  }`;

  const allComments = `fa-comments fa-2x ${
    checkInLikesArray(postOrComment.comments) ? 'fas liked' : 'far notLiked'
  }`;

  const allFavorites = ` fa-star fa-2x ${
    checkInFavoritesArray(postOrComment.favorites)
      ? 'fas favored'
      : 'far notFavored'
  }`;

  return (
    <>
      <div className="coin_post__footer_like">
        <i className={allLikes} onClick={() => doLike(postOrComment)}></i>
        <span>{postOrComment.totalLikes}</span>
      </div>
      {param === 'post' && (
        <>
          <div className="coin_post__footer_comment">
            <i className={allComments}></i>
            <span>{postOrComment.comments.length}</span>
          </div>
          <i
            className={allFavorites}
            onClick={() => doFavorite(postOrComment)}
          ></i>
        </>
      )}
    </>
  );
};

export default LikeCommentBar;
