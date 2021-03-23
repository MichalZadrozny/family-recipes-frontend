import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Formik } from 'formik';
import { withRouter } from 'react-router';
import ReactRouterPropTypes from 'react-router-prop-types';
import { PropTypes } from 'prop-types';
import * as Yup from 'yup';

import styles from './AddRecipeForm.module.scss';
import StepInput from './StepInput/StepInput';
import IngredientInput from './IngredientInput/IngredientInput';

class AddRecipeForm extends React.Component {

  // eslint-disable-next-line react/state-in-constructor
  state = {
    stepCounter: 2,
    ingredientCounter: 2,
    initialValues: {
      // image: '',
      name: '',
      description: '',
      ingredients: [
        {
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
      steps: {
        1: '',
      },
      time: '',
    },
  };

  render() {
    const { addRecipe, history } = this.props;
    const { initialValues } = this.state;

    const validationSchema = Yup.object().shape({
      name: Yup.string()
        .min(2, '*Nazwa musi się składać co najmniej z dwóch znaków')
        .max(60, '*Nazwa nie może składać się z więcej niż 60 znaków')
        .required('*Przepis musi posiadać nazwę'),
      description: Yup.string(),
      // ingredients: Yup.string().required(),
      nutrients: Yup.object().shape({
        calories: Yup.number().typeError('*Kalorie muszą być podane za pomocą liczby').positive('*Kalorie nie mogą być ujemne'),
        proteins: Yup.number().typeError('*Białka muszą być podane za pomocą liczby').positive('*Białka nie mogą być ujemne'),
        carbs: Yup.number().typeError('*Węglowodany muszą być podane za pomocą liczby').positive('*Węglowodany nie mogą być ujemne'),
        fats: Yup.number().typeError('*Tłuszcze muszą być podane za pomocą liczby').positive('*Tłuszcze nie mogą być ujemne'),
      }),

      // steps: Yup.string().required(),
      time: Yup.number()
        .typeError('*Czas musi być podany za pomocą liczby')
        .positive('*Czas musi być większy od 0')
        .required('*Czas jest wymagany'),
    });

    const initialTouched = {
      nutrients: {
        calories: '',
        proteins: '',
        carbs: '',
        fats: '',
      },
    };

    const stepsMap = (steps, handleChange, handleBlur, touched, errors) => Object.keys(steps).map(key =>
      <StepInput key={key} index={key} steps={steps} handleChange={handleChange} handleBlur={handleBlur}
                 className={touched.steps && errors.steps ? styles.error : null} />,
    );

    const ingredientMap = (ingredients, handleChange, handleBlur, touched, errors) => (
      ingredients.map((ingredient, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <IngredientInput key={i} index={i} ingredient={ingredient} handleChange={handleChange}
                           handleBlur={handleBlur}
                           className={touched.ingredients && errors.ingredients ? styles.error : null} />
        ),
      )
    );

    const addStep = (values) => {
      this.setState(prevState => ({
        ...prevState,
        initialValues: {
          ...values,
          steps: {
            ...values.steps,
            [prevState.stepCounter]: '',
          },
        },
      }));
      this.setState(prevState => ({ stepCounter: prevState.stepCounter + 1 }));
    };

    const addIngredient = (values) => {
      this.setState(prevState => ({
        ...prevState,
        initialValues: {
          ...values,
          ingredients: [
            ...values.ingredients,
            {
              name: '',
              amount: '',
              unit: '',
            },
          ],
        },
      }));
      this.setState(prevState => ({ ingredientCounter: prevState.ingredientCounter + 1 }));
    };

    return (
      <>
        <Formik
          enableReinitialize
          initialValues={initialValues}
          validationSchema={validationSchema}
          initialTouched={initialTouched}
          initialErrors={initialTouched}

          onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            addRecipe(values);
            setSubmitting(false);
            resetForm();
            history.push('/');
          }}
        >

          {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId='name'>
                <Form.Label>Nazwa przepisu</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Nazwa przepisu'
                  name='name'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  className={touched.name && errors.name ? styles.error : null} />
                {touched.name && errors.name ? (
                  <div className={styles.errorMessage}>{errors.name}</div>
                ) : null}
              </Form.Group>
              <Form.Group controlId='description'>
                <Form.Label>Opis</Form.Label>
                <Form.Control
                  as='textarea'
                  rows={3}
                  placeholder='Opis'
                  name='description'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.description}
                  className={touched.description && errors.description ? styles.error : null} />
                {touched.description && errors.description ? (
                  <div className={styles.errorMessage}>{errors.description}</div>
                ) : null}
              </Form.Group>
              <Form.Group>
                <Form.Label>Składniki</Form.Label>
                {
                  ingredientMap(values.ingredients, handleChange, handleBlur, touched, errors)
                }
                {touched.ingredients && errors.ingredients ? (
                  <div className={styles.errorMessage}>{errors.ingredients}</div>
                ) : null}
                <Button onClick={() => addIngredient(values)}>Dodaj kolejny składnik</Button>
              </Form.Group>
              <Form.Group>
                <Form.Label>Kroki do wykonania</Form.Label>
                {
                  stepsMap(values.steps, handleChange, handleBlur, touched, errors)
                }
                {touched.steps && errors.steps ? (
                  <div className={styles.errorMessage}>{errors.steps}</div>
                ) : null}
                <Button onClick={() => addStep(values)}>Dodaj kolejny krok</Button>
              </Form.Group>
              <Form.Group controlId='preparationTime'>
                <Form.Label>Czas przygotowania</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Czas przygotowania'
                  name='time'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.time}
                  className={touched.time && errors.time ? styles.error : null} />
                {touched.time && errors.time ? (
                  <div className={styles.errorMessage}>{errors.time}</div>
                ) : null}
              </Form.Group>
              <Form.Group controlId='diet'>
                <Form.Label>Dieta</Form.Label>
                <Form.Control
                  as='select'
                  name='diet'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.diet}>
                  <option value='MEAT'>Mięsna</option>
                  <option value='VEGETARIAN'>Wegetariańska</option>
                  <option value='VEGAN'>Wegańska</option>
                </Form.Control>
              </Form.Group>
              <Form.Row className='align-items-center'>
                <Col>
                  <Form.Label>Kalorie</Form.Label>
                  <Form.Control type='text' placeholder='Kalorie' onChange={handleChange} onBlur={handleBlur}
                                value={values.nutrients.calories} name='nutrients.calories'
                                className={(touched.nutrients && touched.nutrients.calories) && (errors.nutrients && errors.nutrients.calories) ? styles.error : null} />
                  {(touched.nutrients && touched.nutrients.calories) && (errors.nutrients && errors.nutrients.calories) ? (
                    <div className={styles.errorMessage}>{errors.nutrients.calories}</div>
                  ) : null}
                </Col>
                <Col>
                  <Form.Label>Białka</Form.Label>
                  <Form.Control type='text' placeholder='Białka' onChange={handleChange} onBlur={handleBlur}
                                value={values.nutrients.proteins} name='nutrients.proteins'
                                className={(touched.nutrients && touched.nutrients.proteins) && (errors.nutrients && errors.nutrients.proteins) ? styles.error : null} />
                  {(touched.nutrients && touched.nutrients.proteins) && (errors.nutrients && errors.nutrients.proteins) ? (
                    <div className={styles.errorMessage}>{errors.nutrients.proteins}</div>
                  ) : null}
                </Col>
                <Col>
                  <Form.Label>Tłuszcze</Form.Label>
                  <Form.Control type='text' placeholder='Tłuszcze' onChange={handleChange} onBlur={handleBlur}
                                value={values.nutrients.fats} name='nutrients.fats'
                                className={(touched.nutrients && touched.nutrients.fats) && (errors.nutrients && errors.nutrients.fats) ? styles.error : null} />
                  {(touched.nutrients && touched.nutrients.fats) && (errors.nutrients && errors.nutrients.fats) ? (
                    <div className={styles.errorMessage}>{errors.nutrients.fats}</div>
                  ) : null}
                </Col>
                <Col>
                  <Form.Label>Węglowodany</Form.Label>
                  <Form.Control type='text' placeholder='Węglowodany' onChange={handleChange} onBlur={handleBlur}
                                value={values.nutrients.carbs} name='nutrients.carbs'
                                className={(touched.nutrients && touched.nutrients.carbs) && (errors.nutrients && errors.nutrients.carbs) ? styles.error : null} />
                  {(touched.nutrients && touched.nutrients.carbs) && (errors.nutrients && errors.nutrients.carbs) ? (
                    <div className={styles.errorMessage}>{errors.nutrients.carbs}</div>
                  ) : null}
                </Col>
              </Form.Row>

              <Row className={styles.submit}>
                <Button variant='primary' type='submit' disabled={isSubmitting}>
                  Submit
                </Button>
              </Row>
            </Form>
          )}
        </Formik>
      </>
    );
  }
}

export default withRouter(AddRecipeForm);

AddRecipeForm.propTypes = {
  addRecipe: PropTypes.func.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
};