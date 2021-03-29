import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { PropTypes } from 'prop-types';

import LoginForm from '../LoginForm/LoginForm';

const LoginModal = ({ onHide, show }) => (
  <Modal
    show={show}
    onHide={onHide}
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
      <LoginForm close={onHide} />
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={onHide}>Close</Button>
    </Modal.Footer>
  </Modal>
);

export default LoginModal;

LoginModal.propTypes = {
  onHide: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};
