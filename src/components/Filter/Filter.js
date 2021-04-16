import React from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { bool, PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import styles from 'components/Filter/Filter.module.scss';
import filterActions from 'redux/actions/filter.actions';
import DietCheckbox from './DietCheckbox/DietCheckbox';

const Filter = ({ clearFilterCheckboxes, diet, toggleFilter, filterIsVisible }) => (
  <div className={styles.filterWrapper}>
    <button type='button' className={[styles.showButton, filterIsVisible ? styles.showButtonHidden : ''].join(' ')}
            onClick={toggleFilter}>O
    </button>

    <form className={[styles.filter, filterIsVisible ? styles.filterVisible : styles.filterHidden].join(' ')}>
      <Container className={styles.filterList}>
        <button type='button' className={styles.hideButton} onClick={toggleFilter}>X</button>

        <h2>Dieta</h2>
        <DietCheckbox diet={diet.meat} dietName='meat' label='Mięsna' />
        <br />
        <DietCheckbox diet={diet.vegetarian} dietName='vegetarian' label='Wegetariańska' />
        <br />
        <DietCheckbox diet={diet.vegan} dietName='vegan' label='Wegańska' />
      </Container>
      <Row>
        <Col>
          <Button variant='light' onClick={clearFilterCheckboxes}>Wyczyść</Button>
        </Col>
      </Row>
    </form>
  </div>
);

const mapStateToProps = ({ filter }) => ({
  filterIsVisible: filter.filterIsVisible,
});

const mapDispatchToProps = dispatch => ({
  clearFilterCheckboxes: event => dispatch(filterActions.clearFilterCheckboxes(event)),
  toggleFilter: () => dispatch(filterActions.toggleFilter()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  diet: PropTypes.objectOf(bool).isRequired,
  clearFilterCheckboxes: PropTypes.func.isRequired,
  toggleFilter: PropTypes.func.isRequired,
  filterIsVisible: PropTypes.bool.isRequired,
};

