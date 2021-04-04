import React from 'react';
import { Button, Form, InputGroup, Row } from 'react-bootstrap';
import { FieldArray, Formik } from 'formik';
import { withRouter } from 'react-router';
import ReactRouterPropTypes from 'react-router-prop-types';
import { PropTypes } from 'prop-types';
import * as Yup from 'yup';
import shortid from 'shortid';

import styles from './AddRecipeForm.module.scss';
import NutrientsFormPart from './NutrientsFormPart/NutrientsFormPart';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, '*Nazwa musi się składać co najmniej z dwóch znaków')
    .max(60, '*Nazwa nie może składać się z więcej niż 60 znaków')
    .required('*Przepis musi posiadać nazwę'),
  description: Yup.string(),
  ingredients: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required('*Nazwa jest wymagana'),
      amount: Yup.number().required('*Ilość jest wymagana').typeError('*Ilość musi być podana za pomocą liczby'),
      unit: Yup.string(),
    }),
  ).min(1, '*Przepus musi mieć co najmniej jeden składnik'),
  nutrients: Yup.object().shape({
    calories: Yup.number().typeError('*Kalorie muszą być podane za pomocą liczby').positive('*Kalorie nie mogą być ujemne'),
    proteins: Yup.number().typeError('*Białka muszą być podane za pomocą liczby').positive('*Białka nie mogą być ujemne'),
    carbs: Yup.number().typeError('*Węglowodany muszą być podane za pomocą liczby').positive('*Węglowodany nie mogą być ujemne'),
    fats: Yup.number().typeError('*Tłuszcze muszą być podane za pomocą liczby').positive('*Tłuszcze nie mogą być ujemne'),
  }),

  steps: Yup.array().of(
    Yup.object().shape({
        step: Yup.string().required('*Kroki do wykonania są wymagane'),
      },
    ),
  ).min(1, '*Przepus musi mieć co najmniej jeden krok'),
  preparationTime: Yup.number()
    .typeError('*Czas musi być podany za pomocą liczby')
    .positive('*Czas musi być większy od 0')
    .required('*Czas jest wymagany'),
});

const form = (props) => (
  <Form onSubmit={props.handleSubmit}>
    <Form.Group controlId='name'>
      <Form.Label>Nazwa przepisu</Form.Label>
      <Form.Control
        type='text'
        placeholder='Nazwa przepisu'
        name='name'
        onChange={props.handleChange}
        onBlur={props.handleBlur}
        value={props.values.name}
        className={props.touched.name && props.errors.name ? styles.error : null} />
      {props.touched.name && props.errors.name ? (
        <div className={styles.errorMessage}>{props.errors.name}</div>
      ) : null}
    </Form.Group>
    <Form.Group controlId='description'>
      <Form.Label>Opis</Form.Label>
      <Form.Control
        as='textarea'
        rows={3}
        placeholder='Opis'
        name='description'
        onChange={props.handleChange}
        onBlur={props.handleBlur}
        value={props.values.description}
        className={props.touched.description && props.errors.description ? styles.error : null} />
      {props.touched.description && props.errors.description ? (
        <div className={styles.errorMessage}>{props.errors.description}</div>
      ) : null}
    </Form.Group>
    <Form.Group>
      <Form.Label>Składniki</Form.Label>

      <FieldArray
        name='ingredients'
        render={
          ingredientsArray => (
            <div>
              {
                props.values.ingredients.map((item, index) => {
                  const touchedIng = props.touched.ingredients;
                  const errorsIng = props.errors.ingredients;

                  return (
                    <div key={item.id}>
                      <InputGroup>
                        <InputGroup.Prepend>
                          <InputGroup.Text>
                            {index + 1}
                          </InputGroup.Text>
                        </InputGroup.Prepend>

                        <Form.Control
                          name={`ingredients.${index}.amount`}
                          type='number'
                          placeholder='Ilość'
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          className={(touchedIng && touchedIng[index] && touchedIng[index].amount) && (errorsIng && errorsIng[index] && errorsIng[index].amount) ? styles.error : null}
                        /><br />

                        <Form.Control
                          name={`ingredients.${index}.unit`}
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          placeholder='Jednostka'
                        /><br />

                        <Form.Control
                          name={`ingredients.${index}.name`}
                          placeholder='Nazwa'
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          className={(touchedIng && touchedIng[index] && touchedIng[index].name) && (errorsIng && errorsIng[index] && errorsIng[index].name) ? styles.error : null}
                        /><br />

                        <button type='button'
                                onClick={() => ingredientsArray.remove(index)}> -
                        </button>

                        {(touchedIng && touchedIng[index] && touchedIng[index].amount) && (errorsIng && errorsIng[index] && errorsIng[index].amount) ? (
                          <div className={styles.errorMessage}>{errorsIng[index].amount}</div>
                        ) : null}

                        {(touchedIng && touchedIng[index] && touchedIng[index].name) && (errorsIng && errorsIng[index] && errorsIng[index].name) ? (
                          <div className={styles.errorMessage}>{errorsIng[index].name}</div>
                        ) : null}

                      </InputGroup>

                    </div>

                  );
                })}
              <button type='button'
                      onClick={() => ingredientsArray.push({
                        id: shortid.generate(),
                        name: '',
                        amount: '',
                        unit: '',
                      })}> +
              </button>
            </div>
          )}

      />

      {
        props.errors.ingredients && (typeof (props.errors.ingredients) === 'string') ? (
          <div className={styles.errorMessage}>{props.errors.ingredients}</div>
        ) : null
      }
    </Form.Group>

    <Form.Group>
      <Form.Label>Kroki do wykonania</Form.Label>
      <FieldArray
        name='steps'
        render={stepsArray => (
          <div>
            {
              props.values.steps.map((item, index) => {
                const touchedSteps = props.touched.steps;
                const errorsSteps = props.errors.steps;

                return (
                  <div key={item.id}>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text>
                          {index + 1}
                        </InputGroup.Text>
                      </InputGroup.Prepend>

                      <Form.Control
                        name={`steps.${index}.step`}
                        type='text'
                        placeholder={`${index + 1} składnik`}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        className={(touchedSteps && touchedSteps[index] && touchedSteps[index].step) && (errorsSteps && errorsSteps[index] && errorsSteps[index].step) ? styles.error : null}
                      /><br />

                      <button type='button'
                              onClick={() => stepsArray.remove(index)}> -
                      </button>

                      {(touchedSteps && touchedSteps[index] && touchedSteps[index].step) && (errorsSteps && errorsSteps[index] && errorsSteps[index].step) ? (
                        <div className={styles.errorMessage}>{errorsSteps[index].step}</div>
                      ) : null}

                    </InputGroup>
                  </div>
                );
              })}
            <button type='button'
                    onClick={() =>
                      stepsArray.push(
                        {
                          id: shortid.generate(),
                          step: '',
                        },
                      )
                    }> +
            </button>
          </div>
        )}
      />

      {
        props.errors.steps && (typeof (props.errors.steps) === 'string') ? (
          <div className={styles.errorMessage}>{props.errors.steps}</div>
        ) : null
      }
    </Form.Group>

    <Form.Group controlId='preparationTime'>
      <Form.Label>Czas przygotowania</Form.Label>
      <Form.Control
        type='number'
        placeholder='Czas przygotowania'
        name='preparationTime'
        onChange={props.handleChange}
        onBlur={props.handleBlur}
        value={props.values.preparationTime}
        className={props.touched.preparationTime && props.errors.preparationTime ? styles.error : null} />
      {props.touched.preparationTime && props.errors.preparationTime ? (
        <div className={styles.errorMessage}>{props.errors.preparationTime}</div>
      ) : null}
    </Form.Group>
    <Form.Group controlId='diet'>
      <Form.Label>Dieta</Form.Label>
      <Form.Control
        as='select'
        name='diet'
        onChange={props.handleChange}
        onBlur={props.handleBlur}
        value={props.values.diet}>
        <option value='MEAT'>Mięsna</option>
        <option value='VEGETARIAN'>Wegetariańska</option>
        <option value='VEGAN'>Wegańska</option>
      </Form.Control>
    </Form.Group>

    <NutrientsFormPart values={props.values} errors={props.errors} touched={props.touched}
                       handleChange={props.handleChange}
                       handleBlur={props.handleBlur} />

    <Row className={styles.submit}>
      <Button variant='primary' type='submit' disabled={props.isSubmitting}>
        Submit
      </Button>
    </Row>
  </Form>
);

const removeIDs = (values) => {
  // eslint-disable-next-line no-param-reassign
  values.forEach(value => delete value.id);

  return values;
};

const mapStepsToStringArray = (values) => {

  const newValues = [];

  values.forEach(value => newValues.push(value.step));

  return newValues;
};


const initialValues = {
  // image: '',
  name: '',
  description: '',
  ingredients: [
    {
      id: shortid.generate(),
      name: '',
      amount: '',
      unit: '',
    },
  ],
  diet: 'MEAT',
  nutrients: {
    calories: '',
    proteins: '',
    carbs: '',
    fats: '',
  },
  steps: [
    {
      id: shortid.generate(),
      step: '',
    },
  ],
  preparationTime: '',
};

const AddRecipeForm = ({ addRecipe, history }) => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    render={form}
    onSubmit={(values, { setSubmitting, resetForm }) => {
      setSubmitting(true);

      // eslint-disable-next-line no-param-reassign
      values.ingredients = removeIDs(values.ingredients);

      // eslint-disable-next-line no-param-reassign
      values.steps = mapStepsToStringArray(values.steps);

      addRecipe(values);
      setSubmitting(false);
      resetForm();
      history.push('/');
    }}
  />
);

export default withRouter(AddRecipeForm);

AddRecipeForm.propTypes = {
  addRecipe: PropTypes.func.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
};