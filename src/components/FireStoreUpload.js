import React, { useState } from 'react';
import { storage } from '../firebase.js';
import { ProgressBar } from 'react-bootstrap';
// import { deleteImage } from '../actions/imageActions.js';

const FireStoreUpload = () => {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState('');
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTaks = storage.ref(`images/${image.name}`).put(image);
    uploadTaks.on(
      'state_changed',
      (snapshot) => {
        const progress =
          Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      },
      (error) => {},
      () => {
        storage
          .ref('images')
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);
          });
      }
    );
  };

  const handleDelete = () => {
    const deleteImg = storage.ref(`images/${image.name}`);
    deleteImg
      .delete()
      .then((res) => {
        // File deleted successfully
      })
      .catch((error) => {
        // Uh-oh, an error occurred!
      });
  };

  return (
    <>
      {' '}
      <ProgressBar
        now={progress}
        label={`${progress}%`}
        variant="info"
        striped
      />
      <input type="file" onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
      <button onClick={handleDelete}>Delete</button>
      <br />
      <img src={url} alt="testphoto" width="150rem" height="150rem" />
    </>
  );
};
export default FireStoreUpload;
