import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { ProgressBar, Button } from 'react-bootstrap';
import '../styles/PhotoUpload.scss';

import axios, { CancelToken, isCancel } from 'axios';

const PhotoUpload = ({ id }) => {
  const [files, setFiles] = useState([]);
  const [progress, setProgress] = useState(0);
  const cancelFileUpload = useRef(null);
  const {
    userInfo: { token },
  } = useSelector((state) => state.userLogin);

  const showPreview = (e) => {
    e.preventDefault();
    setFiles(Object.values(e.target.files));
  };

  const click = async () => {
    let formData = new FormData();
    for (const file of files) {
      formData.append('fileInput', file, file.name);
    }
    formData.append('postId', id);

    const options = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      onUploadProgress: (progressEvent) => {
        const { loaded, total } = progressEvent;
        let percent = Math.floor((loaded * 100) / total);
        if (percent < 100) {
          setProgress(percent);
        }
      },
      cancelToken: new CancelToken(
        (cancel) => (cancelFileUpload.current = cancel)
      ),
    };

    try {
      await axios.post('/api/img/post', formData, options);
      setProgress(100);
      setTimeout(() => {
        setProgress(0);
      }, 1000);
    } catch (error) {
      if (isCancel(error)) {
        alert(error.message);
      }
      setProgress(0);
    }
  };

  const cancelUpload = () => {
    if (cancelFileUpload.current) {
      cancelFileUpload.current('User has canceled the file uploading...');
    }
  };

  return (
    <div className="photo__upload">
      <input
        type="file"
        multiple="multiple"
        className="custom__file-input"
        onChange={showPreview}
      />

      <Button variant="outline-primary" onClick={click}>
        Upload
      </Button>
      {progress > 0 && (
        <>
          <ProgressBar
            animated
            stripped
            variant="info"
            now={progress}
            label={`${progress}%`}
          />{' '}
          <span className="cancel_upload" onClick={cancelUpload}>
            Cancel
          </span>
        </>
      )}
    </div>
  );
};

export default PhotoUpload;
