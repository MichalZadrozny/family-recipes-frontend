import React from 'react';
import { Button, Modal } from 'react-bootstrap';

import LoginForm from './LoginForm/LoginForm';

const Modals = (props) => (
  <>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Modal {...props}
           size='lg'
           aria-labelledby='contained-modal-title-vcenter'
           centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Login
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <LoginForm />
      </Modal.Body>
      <Modal.Footer>
        {/* eslint-disable-next-line react/prop-types,react/destructuring-assignment */}
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  </>
);

const LoginModal = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant='primary' onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <Modals
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};


export default LoginModal;