import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Button, Form, Row } from 'react-bootstrap';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import userActions from 'redux/actions/user.actions';
import ForgotPasswordButton from '../FormModal/LoginModal/ForgotPasswordButton/ForgotPasswordButton';
import styles from './PasswordRecoveryForm.module.scss';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('*Proszę podać email'),
});

const initialValues = {
  email: '',
};

const form = (props) => (
  <Form onSubmit={props.handleSubmit}>
    <Form.Group controlId='email'>
      <Form.Label>Email</Form.Label>
      <Form.Control
        type='text'
        placeholder='Email'
        name='email'
        onChange={props.handleChange}
        onBlur={props.handleBlur}
        value={props.values.email}
        className={props.touched.email && props.errors.email ? styles.error : null} />
      {props.touched.email && props.errors.email ? (
        <div className={styles.errorMessage}>{props.errors.email}</div>
      ) : null}
    </Form.Group>

    <Row className={styles.submit}>
      <ForgotPasswordButton text='Powrót do logowania' />
      <Button variant='primary' type='submit' disabled={props.isSubmitting}>
        Wyślij
      </Button>
    </Row>
  </Form>
);

const PasswordRecoveryForm = ({ history, close, recoverPassword }) => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={({ email }, { setSubmitting, resetForm }) => {
      setSubmitting(true);
      recoverPassword(email);
      setSubmitting(false);

      close();
      resetForm();
      history.push('/');
    }}
  >
    {form}
  </Formik>

);

const mapDispatchToProps = dispatch => ({
  recoverPassword: (email) => dispatch(userActions.recoverPassword(email)),
});

export default compose(withRouter, connect(null, mapDispatchToProps))(PasswordRecoveryForm);

PasswordRecoveryForm.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  recoverPassword: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
};
