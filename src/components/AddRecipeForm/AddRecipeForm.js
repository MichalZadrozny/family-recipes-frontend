import React from 'react';
import { Button, Form, InputGroup, Row } from 'react-bootstrap';
import { FieldArray, Formik } from 'formik';
import { withRouter } from 'react-router';
import ReactRouterPropTypes from 'react-router-prop-types';
import { PropTypes } from 'prop-types';
import * as Yup from 'yup';

import styles from './AddRecipeForm.module.scss';
import NutrientsFormPart from './NutrientsFormPart/NutrientsFormPart';

class AddRecipeForm extends React.Component {

  // eslint-disable-next-line react/state-in-constructor
  state = {
    // stepCounter: 2,
  };

  render() {
    const { addRecipe, history } = this.props;

    const initialValues = {
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
    };

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
      ),
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

    // const stepsMap = (steps, handleChange, handleBlur, touched, errors) => Object.keys(steps).map(key =>
    //   <StepInput key={key} index={key} steps={steps} handleChange={handleChange} handleBlur={handleBlur}
    //              className={touched.steps && errors.steps ? styles.error : null} />,
    // );

    // const addStep = (values) => {
    //   this.setState(prevState => ({
    //     ...prevState,
    //     initialValues: {
    //       ...values,
    //       steps: {
    //         ...values.steps,
    //         [prevState.stepCounter]: '',
    //       },
    //     },
    //   }));
    //   this.setState(prevState => ({ stepCounter: prevState.stepCounter + 1 }));
    // };

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
            render={ingredientsArray => (
              <div>
                {
                  props.values.ingredients.map((item, index) => {
                    const touchedIng = props.touched.ingredients;
                    const errorsIng = props.errors.ingredients;
                    return (

                      // eslint-disable-next-line react/no-array-index-key
                      <div key={index}>
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
                          name: '',
                          amount: '',
                          unit: '',
                        })}> +
                </button>
              </div>
            )}

          />

        </Form.Group>
        {/* <Form.Group>
                <Form.Label>Kroki do wykonania</Form.Label>
                {
                  stepsMap(values.steps, handleChange, handleBlur, touched, errors)
                }
                {touched.steps && errors.steps ? (
                  <div className={styles.errorMessage}>{errors.steps}</div>
                ) : null}
                <Button onClick={() => addStep(values)}>Dodaj kolejny krok</Button>
              </Form.Group> */}
        <Form.Group controlId='preparationTime'>
          <Form.Label>Czas przygotowania</Form.Label>
          <Form.Control
            type='number'
            placeholder='Czas przygotowania'
            name='time'
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.time}
            className={props.touched.time && props.errors.time ? styles.error : null} />
          {props.touched.time && props.errors.time ? (
            <div className={styles.errorMessage}>{props.errors.time}</div>
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

    return (
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        render={form}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          addRecipe(values);
          setSubmitting(false);
          resetForm();
          history.push('/');
        }}
      />
    );
  }
}

export default withRouter(AddRecipeForm);

AddRecipeForm.propTypes = {
  addRecipe: PropTypes.func.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
};