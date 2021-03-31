import React, { useRef } from 'react';
import { Image } from 'react-bootstrap';

const PhotoZoom = ({ zoom, src, background, className, alt }) => {
  const zoomRef = useRef(zoom.clone({ background }));

  const attachZoom = (image) => {
    zoomRef.current.attach(image);
  };

  return <Image src={src} className={className} ref={attachZoom} alt={alt} />;
};

export default PhotoZoom;
