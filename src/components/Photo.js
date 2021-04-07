import React, { useState, useEffect, useRef } from 'react';
import { Spinner } from 'react-bootstrap';
// import axios from 'axios';
import mediumZoom from 'medium-zoom';
import PhotoZoom from './PhotoZoom';
import '../styles/Photo.scss';

// const fetchImage = async (route, user, name) => {
//   const {
//     config: { url },
//   } = await axios.get(`/api/images/${route}/${user}/${name}`);
//   return url;
// };

const registerObserver = (ref, route, user, name, link, setImg) => {
  const observer = new IntersectionObserver((enteries, observer) => {
    enteries.forEach(async (entry) => {
      if (!entry.isIntersecting) {
        return;
      }
      /** WORK WITH THE SERVER NODE.JS */
      // const url = await fetchImage(route, user, name);
      // setImg(url);
      setImg(link);
      observer.disconnect();
    });
  });
  observer.observe(ref);
};

const Photo = ({ photo, postTitle, styleClass }) => {
  const { route, user, name, link } = photo; // link work with firebase
  const [img, setImg] = useState('');
  const imgRef = useRef(null);
  const zoom = useRef(mediumZoom());

  useEffect(() => {
    if (imgRef.current !== null) {
      registerObserver(imgRef.current, route, user, name, link, setImg);
    }
  }, [route, user, name, link]);

  if (img.length > 0) {
    return (
      <PhotoZoom
        src={img}
        className="image-style"
        zoom={zoom.current}
        background="#000"
        alt={postTitle}
      />
    );
  }

  return (
    <>
      <Spinner
        animation="border"
        role="status"
        ref={imgRef}
        style={{
          width: '100px',
          height: '100px',
          margin: 'auto',
          display: 'block',
        }}
      >
        <span className="sr-only">Loading...</span>
      </Spinner>
    </>
  );
};

export default Photo;
