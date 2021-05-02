import React from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { bool, PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import 'bootstrap/dist/css/bootstrap.min.css';
import styles from 'components/Filter/Filter.module.scss';
import filterActions from 'redux/actions/filter.actions';
import RangeSlider from './RangeSlider/RangeSlider';
import DietFilter from './DietFilter/DietFilter';

const Filter = ({ clearFilter, diet, toggleFilter, filterIsVisible }) => (
  <div className={styles.filterWrapper}>
    <FontAwesomeIcon icon={faArrowRight} onClick={toggleFilter}
                     className={[styles.showButton, filterIsVisible ? styles.showButtonHidden : ''].join(' ')} />

    <form className={[styles.filter, filterIsVisible ? styles.filterVisible : styles.filterHidden].join(' ')}>
      <Container className={styles.filterList}>

        <FontAwesomeIcon icon={faArrowLeft} onClick={toggleFilter} className={styles.hideButton} />

        <DietFilter diet={diet} />
        <RangeSlider />
      </Container>
      <Row>
        <Col>
          <Button variant='light' onClick={clearFilter} className={styles.clearButton}>Wyczyść</Button>
        </Col>
      </Row>
    </form>
  </div>
);

const mapStateToProps = ({ filter }) => ({
  filterIsVisible: filter.filterIsVisible,
});

const mapDispatchToProps = dispatch => ({
  clearFilter: event => dispatch(filterActions.clearFilter(event)),
  toggleFilter: () => dispatch(filterActions.toggleFilter()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  diet: PropTypes.objectOf(bool).isRequired,
  clearFilter: PropTypes.func.isRequired,
  toggleFilter: PropTypes.func.isRequired,
  filterIsVisible: PropTypes.bool.isRequired,
};

