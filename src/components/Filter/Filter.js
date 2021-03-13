import React from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { PropTypes, bool } from 'prop-types';
import { connect } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import styles from 'components/Filter/Filter.module.scss';
import { clearFilterCheckboxes as clearCheckboxes, handleCheckboxChange as checkboxChange } from '../../actions';

const Filter = ({ handleCheckboxChange, clearFilterCheckboxes, diet }) => (
  <form className={styles.filter}>
    <Container className='checkbox-list'>
      <h2>Dieta</h2>
      <label htmlFor='meat'>
        Mięsna
        <input
          type='checkbox'
          id='meat'
          checked={diet.meat}
          onChange={handleCheckboxChange} />
      </label>
      <br />

      <label htmlFor='vegetarian'>
        Wegetariańska
        <input
          type='checkbox'
          id='vegetarian'
          checked={diet.vegetarian}
          onChange={handleCheckboxChange}
        />
      </label>
      <br />
      <label htmlFor='vegan'>
        Wegańska
        <input
          type='checkbox'
          id='vegan'
          name='vegan'
          checked={diet.vegan}
          onChange={handleCheckboxChange}
        />
      </label>
    </Container>

    <Row>
      <Col>
        <Button variant='light' onClick={clearFilterCheckboxes}>Wyczyść</Button>
      </Col>
    </Row>
  </form>
);

const mapDispatchToProps = dispatch => ({
  handleCheckboxChange: event => dispatch(checkboxChange(event)),
  clearFilterCheckboxes: event => dispatch(clearCheckboxes(event)),
});

export default connect(null, mapDispatchToProps)(Filter);

Filter.propTypes = {
  handleCheckboxChange: PropTypes.func.isRequired,
  diet: PropTypes.objectOf(bool).isRequired,
  clearFilterCheckboxes: PropTypes.func.isRequired,
};

