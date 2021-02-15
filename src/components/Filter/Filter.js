import React from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import {PropTypes, bool} from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import styles from 'components/Filter/Filter.module.scss';

const Filter = ({ updateItems, handleCheckboxChange, diet }) => (
  <form className={styles.filter}>
    <Container className="checkbox-list">
      <h2>Dieta</h2>
      <label htmlFor="meat">
        Mięsna
        <input type="checkbox" id="meat" value={diet.meat} onChange={handleCheckboxChange} />
      </label>
      <br />

      <label htmlFor="vegetarian">
        Wegetariańska
        <input
          type="checkbox"
          id="vegetarian"
          value={diet.vegetarian}
          onChange={handleCheckboxChange}
        />
      </label>
      <br />
      <label htmlFor="vegan">
        Wegańska
        <input
          type="checkbox"
          id="vegan"
          name="vegan"
          value={diet.vegan}
          onChange={handleCheckboxChange}
        />
      </label>
    </Container>

    <Row>
      <Col>
        <Button variant="light">Wyczyść</Button>
      </Col>
      <Col>
        <Button variant="light" type="submit" onClick={updateItems}>
          Filtruj
        </Button>
      </Col>
    </Row>
  </form>
);

Filter.propTypes = {
  updateItems: PropTypes.func.isRequired, 
  handleCheckboxChange: PropTypes.func.isRequired, 
  diet: PropTypes.arrayOf(bool).isRequired,
};

export default Filter;
