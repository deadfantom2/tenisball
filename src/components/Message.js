import React, { useState, useEffect } from 'react';
import { Alert } from 'react-bootstrap';
// debugger;

const Message = ({ variant, children }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // setTimeout(() => {
    //   closeAlert();
    // }, 3000);
  });

  const closeAlert = () => {
    setShow(false);
  };

  return (
    <Alert
      show={show}
      variant={variant}
      children={children}
      onClose={() => closeAlert()}
      dismissible
    >
      {children}
    </Alert>
  );
};

Message.defaultProps = {
  variant: 'info',
};

export default Message;
