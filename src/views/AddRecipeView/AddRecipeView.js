import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
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
      <Form>
        <Form.Group controlId='name'>
          <Form.Label>Nazwa przepisu</Form.Label>
          <Form.Control type='text' placeholder='Nazwa przepisu' />
        </Form.Group>
        <Form.Group controlId='description'>
          <Form.Label>Opis</Form.Label>
          <Form.Control as='textarea' rows={3} placeholder='Opis' />
        </Form.Group>
        <Form.Group>
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
        </Form.Group>

        <Form.Group controlId='preparationTime'>
          <Form.Label>Czas przygotowania</Form.Label>
          <Form.Control type='text' placeholder='Czas przygotowania' />
        </Form.Group>
        <Form.Group controlId='diet'>
          <Form.Label>Dieta</Form.Label>
          <Form.Control as='select'>
            <option>Mięsna</option>
            <option>Wegetariańska</option>
            <option>Wegańska</option>
          </Form.Control>
        </Form.Group>
        <Form.Row className='align-items-center'>
          <Col>
            <Form.Label>Kalorie</Form.Label>
            <Form.Control type='text' placeholder='Kalorie' />
          </Col>
          <Col>
            <Form.Label>Białka</Form.Label>
            <Form.Control type='text' placeholder='Białka' />
          </Col>
          <Col>
            <Form.Label>Tłuszcze</Form.Label>
            <Form.Control type='text' placeholder='Tłuszcze' />
          </Col>
          <Col>
            <Form.Label>Węglowodany</Form.Label>
            <Form.Control type='text' placeholder='Węglowodany' />
          </Col>
        </Form.Row>

        <Row className={styles.submit}>
          <Button variant='primary' onClick={() => addRecipe({ name: 'NAME' })}>
            Submit
          </Button>
        </Row>
      </Form>
    </Container>
  </>
);


//   render(){
//     return (
//       <>
//         <Container className={styles.formContainer}>
//           <Form>
//             <Form.Group controlId='name'>
//               <Form.Label>Nazwa przepisu</Form.Label>
//               <Form.Control type='text' placeholder='Nazwa przepisu' />
//             </Form.Group>
//             <Form.Group controlId='description'>
//               <Form.Label>Opis</Form.Label>
//               <Form.Control as='textarea' rows={3} placeholder='Opis' />
//             </Form.Group>
//             <Form.Group>
//               <Form.Label>Składniki</Form.Label>
//               <Form.Control type='text' placeholder='1 składnik np. 2 jajka' />
//               <Form.Control type='text' placeholder='2 składnik np. 2 jajka' />
//               <Form.Control type='text' placeholder='3 składnik np. 2 jajka' />
//             </Form.Group>
//             <Form.Group>
//               <Form.Label>Kroki do wykonania</Form.Label>
//               <Row><span>1</span><Form.Control type='text' placeholder='1 krok' /></Row>
//               <Row><span>2</span><Form.Control type='text' placeholder='2 krok' /></Row>
//               <Row><span>3</span><Form.Control type='text' placeholder='3 krok' /></Row>
//             </Form.Group>
//
//             <Form.Group controlId='preparationTime'>
//               <Form.Label>Czas przygotowania</Form.Label>
//               <Form.Control type='text' placeholder='Czas przygotowania' />
//             </Form.Group>
//             <Form.Group controlId='diet'>
//               <Form.Label>Dieta</Form.Label>
//               <Form.Control as='select'>
//                 <option>Mięsna</option>
//                 <option>Wegetariańska</option>
//                 <option>Wegańska</option>
//               </Form.Control>
//             </Form.Group>
//             <Form.Row className='align-items-center'>
//               <Col>
//                 <Form.Label>Kalorie</Form.Label>
//                 <Form.Control type='text' placeholder='Kalorie' />
//               </Col>
//               <Col>
//                 <Form.Label>Białka</Form.Label>
//                 <Form.Control type='text' placeholder='Białka' />
//               </Col>
//               <Col>
//                 <Form.Label>Tłuszcze</Form.Label>
//                 <Form.Control type='text' placeholder='Tłuszcze' />
//               </Col>
//               <Col>
//                 <Form.Label>Węglowodany</Form.Label>
//                 <Form.Control type='text' placeholder='Węglowodany' />
//               </Col>
//             </Form.Row>
//
//             <Row className={styles.submit}>
//               <Button variant='primary' onClick={() => addRecipe({name: "NAME"})}>
//                 Submit
//               </Button>
//             </Row>
//           </Form>
//         </Container>
//       </>
//     );
//   }
// }

const mapDispatchToProps = dispatch => ({
  addRecipe: itemContent => dispatch(addRecipeAction(itemContent)),
});

export default connect(null, mapDispatchToProps)(AddRecipeView);
// export default AddRecipeView;

AddRecipeView.propTypes = {
  addRecipe: PropTypes.func.isRequired,
};