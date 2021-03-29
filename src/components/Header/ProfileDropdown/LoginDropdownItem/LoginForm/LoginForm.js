import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Button, Form, Row } from 'react-bootstrap';
import { PropTypes } from 'prop-types';

import styles from './LoginForm.module.scss';

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .required('*Proszę podać nazwę użytkownika'),
  password: Yup.string()
    .required('*Proszę podać hasło'),
});

const initialValues = {
  username: '',
  password: '',
};

const form = (props) => (
  <Form onSubmit={props.handleSubmit}>
    <Form.Group controlId='username'>
      <Form.Label>Nazwa użytkownika</Form.Label>
      <Form.Control
        type='text'
        placeholder='Nazwa użytkownika'
        name='username'
        onChange={props.handleChange}
        onBlur={props.handleBlur}
        value={props.values.username}
        className={props.touched.username && props.errors.username ? styles.error : null} />
      {props.touched.username && props.errors.username ? (
        <div className={styles.errorMessage}>{props.errors.username}</div>
      ) : null}
    </Form.Group>

    <Form.Group controlId='password'>
      <Form.Label>Nazwa użytkownika</Form.Label>
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

    <Row className={styles.submit}>
      <Button variant='primary' type='submit' disabled={props.isSubmitting}>
        Submit
      </Button>
    </Row>
  </Form>
);

const LoginForm = ({ history, close }) => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    render={form}
    onSubmit={(values, { setSubmitting, resetForm }) => {
      setSubmitting(true);
      setSubmitting(false);
      resetForm();
      close();
      history.push('/');
    }}
  />
);

export default withRouter(LoginForm);

LoginForm.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  close: PropTypes.func.isRequired,
};