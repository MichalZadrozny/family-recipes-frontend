import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Button, Form, Row } from 'react-bootstrap';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import userActions from 'actions/user.actions';
import styles from './RegisterForm.module.scss';

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .required('*Proszę podać nazwę użytkownika'),
  password: Yup.string()
    .required('*Proszę podać hasło')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 'Hasło musi zawierać minimum: 8 znaków, wielką literę, małą literę, cyfrę oraz znak specjalny'),
  confirmPassword: Yup.string()
    .required('*Proszę podać hasło potwierdzające')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 'Hasło musi zawierać minimum: 8 znaków, wielką literę, małą literę, cyfrę oraz znak specjalny')
    .oneOf([Yup.ref('password')], 'Hasła muszą się zgadzać'),
  email: Yup.string()
    .email('*Nieprawidłowy email')
    .required('*Proszę podać email'),
  termsOfUse: Yup.boolean()
    .oneOf([true], '*Proszę potwierdzić wrunki korzystania'),
});

const initialValues = {
  username: '',
  password: '',
  confirmPassword: '',
  email: '',
  termsOfUse: false,
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

    <Form.Group controlId='termsOfUse'>
      <Form.Label>Warunki korzystania</Form.Label>
      <Form.Control
        type='checkbox'
        name='termsOfUse'
        onChange={props.handleChange}
        onBlur={props.handleBlur}
        value={props.values.termsOfUse}
        className={props.touched.termsOfUse && props.errors.termsOfUse ? styles.error : null} />
      {props.touched.termsOfUse && props.errors.termsOfUse ? (
        <div className={styles.errorMessage}>{props.errors.termsOfUse}</div>
      ) : null}
    </Form.Group>

    <Row className={styles.submit}>
      <Button variant='primary' type='submit' disabled={props.isSubmitting}>
        Submit
      </Button>
    </Row>
  </Form>
);

const RegisterForm = ({ close, register }) => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    render={form}
    onSubmit={({ username, password, confirmPassword, email, termsOfUse }, { setSubmitting, resetForm }) => {
      setSubmitting(true);
      register(username, password, confirmPassword, email, termsOfUse);
      close();
      resetForm();
      setSubmitting(false);
    }}
  />
);

const mapDispatchToProps = dispatch => ({
  register: (username, password, confirmPassword, email, termsOfUse) => dispatch(userActions.register(username, password, confirmPassword, email, termsOfUse)),
});

export default connect(null, mapDispatchToProps)(RegisterForm);

RegisterForm.propTypes = {
  register: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
};
