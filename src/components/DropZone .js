import React, { useRef, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ProgressBar } from 'react-bootstrap';
import axios, { CancelToken } from 'axios';

import '../styles/DropZone.scss';

const Dropzone = ({ id }) => {
  const [uploadPercentage, setUploadPercentage] = useState(0);
  const cancelFileUpload = useRef(null);

  const fileInputRef = useRef(); // Click on Input type=file
  const modalImageRef = useRef(); // Display modal image
  const modalRef = useRef(); // Display modal progress
  const uploadRef = useRef();
  const uploadModalRef = useRef();
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [validFiles, setValidFiles] = useState([]);
  const [unsupportedFiles, setUnsupportedFiles] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const { userInfo } = useSelector((state) => state.userLogin);

  useEffect(() => {
    let filteredArr = selectedFiles.reduce((acc, current) => {
      const x = acc.find((item) => item.name === current.name);
      if (!x) {
        return acc.concat([current]);
      } else {
        return acc;
      }
    }, []);
    setValidFiles([...filteredArr]);
  }, [selectedFiles]);

  /**TODO: Event Drag&Drop */
  const dragOver = (e) => {
    e.preventDefault();
  };

  const dragEnter = (e) => {
    e.preventDefault();
  };

  const dragLeave = (e) => {
    e.preventDefault();
  };

  const fileDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length) {
      handleFiles(files);
    }
  };

  const filesSelected = () => {
    if (fileInputRef.current.files.length) {
      handleFiles(fileInputRef.current.files);
    }
  };

  // When clicked on Input
  const fileInputClicked = () => {
    fileInputRef.current.click();
  };

  /**TODO: File system ADD REMOVE */
  const handleFiles = (files) => {
    for (let i = 0; i < files.length; i++) {
      if (validateFile(files[i])) {
        setSelectedFiles((prevArray) => [...prevArray, files[i]]);
      } else {
        files[i]['invalid'] = true;
        setSelectedFiles((prevArray) => [...prevArray, files[i]]);
        setErrorMessage('File type not permitted');
        setUnsupportedFiles((prevArray) => [...prevArray, files[i]]);
      }
    }
  };

  const removeFile = (name) => {
    const index = validFiles.findIndex((e) => e.name === name);
    const index2 = selectedFiles.findIndex((e) => e.name === name);
    const index3 = unsupportedFiles.findIndex((e) => e.name === name);
    validFiles.splice(index, 1);
    selectedFiles.splice(index2, 1);
    setValidFiles([...validFiles]);
    setSelectedFiles([...selectedFiles]);
    if (index3 !== -1) {
      unsupportedFiles.splice(index3, 1);
      setUnsupportedFiles([...unsupportedFiles]);
    }
  };

  /**TODO: Formating type */
  const validateFile = (file) => {
    const validTypes = [
      'image/jpeg',
      'image/jpg',
      'image/png',
      'image/gif',
      'image/x-icon',
    ];
    if (validTypes.indexOf(file.type) === -1) {
      return false;
    }
    return true;
  };

  const fileSize = (size) => {
    // size = 78934 Bytes
    if (size === 0) {
      return '0 Bytes';
    }
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    // Math.log(size)=11.27636733   Math.log(k)=6.93147180
    const i = Math.floor(Math.log(size) / Math.log(k)); // Math.floor(1.999)=1
    return parseFloat((size / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const fileType = (fileName) => {
    return (
      fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length) ||
      fileName
    );
  };

  /**TODO: Display/ Close Modals  */
  const openImageModal = (file) => {
    const reader = new FileReader();
    modalRef.current.style.display = 'block';
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      modalImageRef.current.style.backgroundImage = `url(${e.target.result})`;
    };
  };

  const closeModal = () => {
    modalRef.current.style.display = 'none';
    modalImageRef.current.style.backgroundImage = 'none';
  };

  const cancelUpload = () => {
    if (cancelFileUpload.current) {
      cancelFileUpload.current('You cancelled uploading ');
    }
    uploadModalRef.current.style.display = 'none';
  };

  /**TODO: Execute Http method POST Axios */
  const uploadFiles = async () => {
    uploadModalRef.current.style.display = 'block';
    uploadRef.current.innerHTML = 'File(s) Uploading...';
    let formData = new FormData();
    for (const file of validFiles) {
      formData.append('fileInput', file, file.name);
    }
    formData.append('key', '');
    formData.append('postId', id);

    axios
      .post('/api/img/post', formData, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
        onUploadProgress: (progressEvent) => {
          let percent = Math.floor(
            (progressEvent.loaded / progressEvent.total) * 100
          );
          if (percent < 100) {
            setUploadPercentage(percent);
          }
        },
        cancelToken: new CancelToken(
          (cancel) => (cancelFileUpload.current = cancel)
        ),
      })
      .then(() => {
        setUploadPercentage(100);
        uploadRef.current.innerHTML = 'File(s) Uploaded';
        validFiles.length = 0;
        setValidFiles([...validFiles]);
        setSelectedFiles([...validFiles]);
        setUnsupportedFiles([...validFiles]);
        setTimeout(() => {
          setUploadPercentage(0);
          uploadModalRef.current.style.display = 'none';
        }, 2000);
      })
      .catch((err) => {
        uploadRef.current.innerHTML = `<span class="error">Error Uploading File(s)</span>`;
      });
  };

  return (
    <>
      <div className="container-zone">
        {unsupportedFiles.length === 0 && validFiles.length ? (
          <button className="file-upload-btn" onClick={() => uploadFiles()}>
            Upload Files
          </button>
        ) : (
          ''
        )}
        {unsupportedFiles.length ? (
          <p>Please remove all unsupported files.</p>
        ) : (
          ''
        )}
        <div
          className="drop-container"
          onDragOver={dragOver}
          onDragEnter={dragEnter}
          onDragLeave={dragLeave}
          onDrop={fileDrop}
          onClick={fileInputClicked}
        >
          <div className="drop-message">
            <div className="upload-icon"></div>
            Drag & Drop files here or click to select file(s)
          </div>

          <input
            type="file"
            className="file-input"
            multiple
            onChange={filesSelected}
            ref={fileInputRef}
          />
        </div>

        <div className="file-display-container">
          {validFiles.map((data, i) => (
            <div className="file-status-bar" key={i}>
              <div className="file-type-logo"></div>
              <div className="file-type-text">{fileType(data.name)}</div>
              <span
                onClick={
                  !data.invalid
                    ? () => openImageModal(data)
                    : () => removeFile(data.name)
                }
                className={`file-name ${data.invalid ? 'file-error' : ''}`}
              >
                {data.name}
              </span>
              <span className="file-size">({fileSize(data.size)})</span>
              <i
                className="fas fa-trash file-remove"
                onClick={() => removeFile(data.name)}
              ></i>
              {data.invalid && (
                <span className="file-error-message">({errorMessage})</span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="display-image" ref={modalRef}>
        <div className="overlay"></div>
        <div className="modal-image" ref={modalImageRef}>
          <span className="close-dropzone" onClick={() => closeModal()}>
            X
          </span>
        </div>
      </div>

      <div className="upload-modal" ref={uploadModalRef}>
        <div className="overlay"></div>
        <div className="progress-container">
          <div className="close-dropzone" onClick={() => cancelUpload()}>
            X
          </div>
          <span ref={uploadRef}></span>
          <ProgressBar
            now={uploadPercentage}
            label={`${uploadPercentage}%`}
            variant="info"
            striped
          />
        </div>
      </div>
    </>
  );
};

export default Dropzone;
