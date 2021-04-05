import React from 'react';
import { Spinner } from 'react-bootstrap';
import '../styles/Loader.scss';

const Loader = () => {
  return (
    <div className="loader-overlow">
      <Spinner
        animation="border"
        role="status"
        style={{
          position: 'absolute',
          width: '100px',
          height: '100px',
          margin: 'auto',
          display: 'block',
        }}
      >
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
};

export default Loader;
