import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTenisesList } from '../actions/tenisActions';
import TenisCard from '../components/Tenis_card';
import useWindowSize from '../utils/useWindowSize';
import { calculateSize } from '../utils/calculateNewSize';
import '../styles/HomeScreen.scss';

const HomeScreen = () => {
  const { tenisesList } = useSelector((state) => state.tenisesList);
  const [sizeImg, setSizeImg] = useState(640);
  const [displayBall, setDisplayBall] = useState(true);
  const { width } = useWindowSize();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTenisesList());
    isDispalyTenisBall();
    calculateSize(width, 640, setSizeImg);
    // console.log(width);
  }, [width]);

  const isDispalyTenisBall = () => {
    return width < 768 ? setDisplayBall(false) : setDisplayBall(true);
  };

  return (
    <div className="home">
      <div className="home_players">
        <input placeholder="Rechercher un joueur" />
        <div className="home_players_content">
          {tenisesList.map((item, index) => (
            <TenisCard key={index} item={item} />
          ))}
        </div>
      </div>

      {displayBall && (
        <div className="home_logo">
          <img
            src="tenisball.png"
            alt="tenis ball"
            width={sizeImg}
            height={sizeImg}
          />
        </div>
      )}
    </div>
  );
};

export default HomeScreen;
