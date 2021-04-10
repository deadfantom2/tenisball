import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadAndErrorContainer from '../containers/LoadAndErrorContainer';
import FavoritePost from '../components/FavoritePost';
import { GETPROFILE_INFO_RESET } from '../constants/userConstants';
import { getProfileInfo, deleteInFavoritePost } from '../actions/userActions';
import '../styles/FavoriteScreen.scss';

const FavoriteScreen = () => {
  const [favorites, setFavorites] = useState([]);

  const dispatch = useDispatch();
  const { loading, user } = useSelector((state) => state.profileInfo);

  useEffect(() => {
    if (!user || Object.keys(user).length === 0) {
      dispatch(getProfileInfo());
    } else {
      setFavorites(user.favorites);
    }
    return () => {
      user && dispatch({ type: GETPROFILE_INFO_RESET });
    };
  }, [dispatch, user]);

  const doUnFavorite = (favorite) => {
    dispatch(
      deleteInFavoritePost({
        favoriteId: favorite._id,
        postId: favorite.postId,
      })
    );
  };

  return (
    <>
      <LoadAndErrorContainer loading={loading} title="Your favorites">
        <div className="main-favorite-page">
          {favorites.length > 0 ? (
            favorites.map((item, index) => (
              <FavoritePost
                key={index}
                favorite={item}
                doUnFavorite={doUnFavorite}
              />
            ))
          ) : (
            <div className="not-favorites">
              <h3>You don't have any favorites post</h3>
            </div>
          )}
        </div>
      </LoadAndErrorContainer>
    </>
  );
};
export default FavoriteScreen;
