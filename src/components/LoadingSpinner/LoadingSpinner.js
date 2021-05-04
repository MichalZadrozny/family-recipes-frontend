import React from 'react';
import { Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './LoadingSpinner.module.scss';


const LoadingSpinner = ({ loading }) => (
  <div>
    {
      loading ?
        <div className={styles.spinnerBox}>
          <Spinner animation='border' role='status' className={styles.spinner} size='lg'>
            <span className='sr-only' />
          </Spinner>
          <span className={styles.loadingLabel}>Ładowanie...</span>
        </div>
        :
        ''
    }
  </div>
);

const mapStateToProps = ({ recipes }) => ({
  loading: recipes.loading,
});


export default connect(mapStateToProps, null)(LoadingSpinner);

LoadingSpinner.propTypes = {
  loading: PropTypes.bool.isRequired,
};