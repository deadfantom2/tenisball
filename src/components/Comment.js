import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addLikeComment,
  reportSomeComment,
  editComment,
  deleteCommentPost,
} from '../actions/postActions';
import { Image } from 'react-bootstrap';
import LikeCommentBar from '../components/LikeCommentBar';
import MenuItem from '../components/MenuItem';
import '../styles/Comment.scss';

const Comment = ({ comment }) => {
  const [isAuthorComment, setIsAuthorComment] = useState(false);
  const dispatch = useDispatch();
  const {
    userInfo: { user },
  } = useSelector((state) => state.userLogin);

  useEffect(() => {
    setIsAuthorComment(comment.user === reverseId(user.tokenUser));
  }, [comment.user, user, isAuthorComment]);

  const commentLike = (comment) => {
    dispatch(addLikeComment({ _id: comment._id }));
  };

  const upperName = (name) => {
    return name[0].toUpperCase() + name.substr(1);
  };

  const reverseId = (text) => {
    return text.split('').reverse().join('');
  };

  const reportComment = (commentId, userId) => {
    dispatch(reportSomeComment({ commentId: commentId, _id: userId }));
  };

  const modifyComment = (commentId, newComment) => {
    dispatch(editComment(commentId, { comment: newComment }));
  };

  const removeComment = (id) => {
    dispatch(deleteCommentPost(id));
  };

  return (
    <div className="comment">
      <div className="comment_avatar">
        <Image src={comment.userAvatar} roundedCircle className="img_comment" />
        {comment.name.length > 8 ? (
          <h6>{comment.name.substr(0, 6)}...</h6>
        ) : (
          <h6>{comment.name}</h6>
        )}
      </div>
      <div className="comment_body">
        <div className="comment_body_publicate">
          {upperName(comment.name)} posted a comment at:{' '}
          {comment.createdAt.substr(0, 10)}
          <MenuItem
            body={comment}
            isYourComment={isAuthorComment}
            doReport={reportComment}
            doEdit={modifyComment}
            doRemove={removeComment}
          />
        </div>
        <div className="comment_body_comment">{comment.comment}</div>
        <div className="comment_body_footer">
          <LikeCommentBar
            postOrComment={comment}
            param="comment"
            doLike={commentLike}
          />
        </div>
      </div>
    </div>
  );
};

export default Comment;
