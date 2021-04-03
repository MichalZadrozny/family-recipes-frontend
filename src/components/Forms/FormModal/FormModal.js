import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { PropTypes } from 'prop-types';

const FormModal = ({ onHide, show, title, form }) => (
  <Modal
    show={show}
    onHide={onHide}
    size='lg'
    aria-labelledby='contained-modal-title-vcenter'
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id='contained-modal-title-vcenter'>
        {title}
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {form}
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={onHide}>Zamknij</Button>
    </Modal.Footer>
  </Modal>
);

export default FormModal;

FormModal.propTypes = {
  onHide: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  form: PropTypes.elementType.isRequired,
};
