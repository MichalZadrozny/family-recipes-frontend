import React from 'react';
import { PropTypes } from 'prop-types';
import { Toast } from 'react-bootstrap';
import { connect } from 'react-redux';

import alertActions from 'redux/actions/alert.actions';
import styles from './AlertToast.module.scss';

const AlertToast = ({ alert, clear }) => {
  if (alert.message) {
    return (
      <Toast show={!!alert.message} onClose={() => clear()} className={`${styles.messageToast} ${styles[alert.type]}`}>
        <Toast.Header className={styles.messageToastHeader}>
          <strong className='mr-auto'>{alert.message[0]}</strong>
        </Toast.Header>
        <Toast.Body className={styles.messageToastBody}>{alert.message[1]}</Toast.Body>
      </Toast>
    );
  }
  return null;
};

const mapStateToProps = ({ alert }) => ({ alert });

const mapDispatchToProps = dispatch => ({
  clear: () => dispatch(alertActions.clear()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AlertToast);

AlertToast.propTypes = {
  alert: PropTypes.shape({
    message: PropTypes.arrayOf(PropTypes.string),
    type: PropTypes.string,
  }).isRequired,
  clear: PropTypes.func.isRequired,
};
