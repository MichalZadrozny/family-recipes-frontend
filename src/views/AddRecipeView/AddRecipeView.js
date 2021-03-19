import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { addRecipe as addRecipeAction } from 'actions/index';
import { PropTypes } from 'prop-types';

import styles from './AddRecipeView.module.scss';

// class AddRecipeView extends React.Component{
// constructor(props) {
//   super(props);
//
//   this.state = {
//     // eslint-disable-next-line react/no-unused-state
//     text: 'test state',
//   }
//
//   this.addRecipe = this.addRecipe.bind(this);
// }

const AddRecipeView = ({ addRecipe }) => (
  <>
    <Container className={styles.formContainer}>
      <Formik
        initialValues={{
          // image: '',
          name: '',
          description: '',
          // ingredients: [],
          // steps: {},
          diet: 'meat',
          nutrients: {
            calories: 0,
            proteins: 0,
            carbs: 0,
            fats: 0,
          },
          time: '',
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          addRecipe(values);
          resetForm();
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
                value={values.name} />
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
                value={values.description} />
            </Form.Group>
            {/* <Form.Group>
              <Form.Label>Składniki</Form.Label>
              <Form.Control type='text' placeholder='1 składnik np. 2 jajka' />
              <Form.Control type='text' placeholder='2 składnik np. 2 jajka' />
              <Form.Control type='text' placeholder='3 składnik np. 2 jajka' />
            </Form.Group>
            <Form.Group>
              <Form.Label>Kroki do wykonania</Form.Label>
              <Row><span>1</span><Form.Control type='text' placeholder='1 krok' /></Row>
              <Row><span>2</span><Form.Control type='text' placeholder='2 krok' /></Row>
              <Row><span>3</span><Form.Control type='text' placeholder='3 krok' /></Row>
            </Form.Group> */}
            <Form.Group controlId='preparationTime'>
              <Form.Label>Czas przygotowania</Form.Label>
              <Form.Control
                type='text'
                placeholder='Czas przygotowania'
                name='time'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.time} />
            </Form.Group>
            <Form.Group controlId='diet'>
              <Form.Label>Dieta</Form.Label>
              <Form.Control
                as='select'
                name='diet'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.diet}>
                <option value='meat'>Mięsna</option>
                <option value='vegetarian'>Wegetariańska</option>
                <option value='vegan'>Wegańska</option>
              </Form.Control>
            </Form.Group>
            <Form.Row className='align-items-center'>
              <Col>
                <Form.Label>Kalorie</Form.Label>
                <Form.Control type='text' placeholder='Kalorie' onChange={handleChange} onBlur={handleBlur}
                              value={values.nutrients.calories} name='nutrients.calories' />
              </Col>
              <Col>
                <Form.Label>Białka</Form.Label>
                <Form.Control type='text' placeholder='Białka' onChange={handleChange} onBlur={handleBlur}
                              value={values.nutrients.proteins} name='nutrients.proteins' />
              </Col>
              <Col>
                <Form.Label>Tłuszcze</Form.Label>
                <Form.Control type='text' placeholder='Tłuszcze' onChange={handleChange} onBlur={handleBlur}
                              value={values.nutrients.fats} name='nutrients.fats' />
              </Col>
              <Col>
                <Form.Label>Węglowodany</Form.Label>
                <Form.Control type='text' placeholder='Węglowodany' onChange={handleChange} onBlur={handleBlur}
                              value={values.nutrients.carbs} name='nutrients.carbs' />
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
    </Container>
  </>
);


const mapDispatchToProps = dispatch => ({
  addRecipe: itemContent => dispatch(addRecipeAction(itemContent)),
});

export default connect(null, mapDispatchToProps)(AddRecipeView);

AddRecipeView.propTypes = {
  addRecipe: PropTypes.func.isRequired,
};