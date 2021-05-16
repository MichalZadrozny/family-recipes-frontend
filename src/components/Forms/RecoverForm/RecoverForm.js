import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router';
import { useParams } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Button, Form, Row } from 'react-bootstrap';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import userActions from 'redux/actions/user.actions';
import styles from './RecoverForm.module.scss';

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .required('*Proszę podać hasło')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 'Hasło musi zawierać minimum: 8 znaków, wielką literę, małą literę, cyfrę oraz znak specjalny'),
  confirmPassword: Yup.string()
    .required('*Proszę podać hasło potwierdzające')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 'Hasło musi zawierać minimum: 8 znaków, wielką literę, małą literę, cyfrę oraz znak specjalny')
    .oneOf([Yup.ref('password')], 'Hasła muszą się zgadzać'),
});

const initialValues = {
  password: '',
  confirmPassword: '',
};

const form = (props) => (
  <Form onSubmit={props.handleSubmit}>
    <Form.Group controlId='password'>
      <Form.Label>Hasło</Form.Label>
      <Form.Control
        type='password'
        placeholder='Hasło'
        name='password'
        onChange={props.handleChange}
        onBlur={props.handleBlur}
        value={props.values.password}
        className={props.touched.password && props.errors.password ? styles.error : null} />
      {props.touched.password && props.errors.password ? (
        <div className={styles.errorMessage}>{props.errors.password}</div>
      ) : null}
    </Form.Group>

    <Form.Group controlId='confirmPassword'>
      <Form.Label>Powtórz hasło</Form.Label>
      <Form.Control
        type='password'
        placeholder='Hasło potwierdzające'
        name='confirmPassword'
        onChange={props.handleChange}
        onBlur={props.handleBlur}
        value={props.values.confirmPassword}
        className={props.touched.confirmPassword && props.errors.confirmPassword ? styles.error : null} />
      {props.touched.confirmPassword && props.errors.confirmPassword ? (
        <div className={styles.errorMessage}>{props.errors.confirmPassword}</div>
      ) : null}
    </Form.Group>

    <Row className={styles.submit}>
      <Button variant='primary' type='submit' disabled={props.isSubmitting}>
        Wyślij
      </Button>
    </Row>
  </Form>
);

const RecoverForm = ({ history, close, setNewPassword }) => {

  const { token } = useParams();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={({ password, confirmPassword }, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        setNewPassword(password, confirmPassword, token);
        resetForm();
        setSubmitting(false);
        close();
        history.push('/');
      }}
    >
      {form}
    </Formik>
  );
};


const mapDispatchToProps = dispatch => ({
  setNewPassword: (password, confirmPassword, token) => dispatch(userActions.setNewPassword(password, confirmPassword, token)),
});

export default compose(withRouter, connect(null, mapDispatchToProps))(RecoverForm);

RecoverForm.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  setNewPassword: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
};
