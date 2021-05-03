import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import filterActions from 'redux/actions/filter.actions';

import styles from './RangeSlider.module.scss';

const getInputValue = (maxTime, max) => {
  if (maxTime > 0) return maxTime;
  if (maxTime < 0) return max;
  return 0;
};

const handleChange = (value, changeMaxTimeValue) => {
  const newValue = Number.parseInt(value.target.value, 10);

  if (Number.isInteger(newValue)) {
    changeMaxTimeValue(newValue);
  } else {
    changeMaxTimeValue(0);
  }
};


const RangeSlider = ({ max, changeMaxTimeValue, maxTime }) => (
  <div className={styles.timeFilter}>
    <h2>Czas</h2>
    <div className={styles.sliderWrapper}>
      <div>
        Maks. czas: <input
        value={getInputValue(maxTime, max)}
        onChange={e => handleChange(e, changeMaxTimeValue)}
        className={styles.timeInput}
      /> min
      </div>
      <div className={styles.sliderBox}>
        <span>0</span>
        <input
          type='range'
          min={0}
          max={max}
          value={maxTime}
          onInput={e => handleChange(e, changeMaxTimeValue)}
        />
        <span>{max}</span>
      </div>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
    changeMaxTimeValue: value => dispatch(filterActions.changeMaxTimeValue(value)),
  }
);

const mapStateToProps = ({ recipes, filter }) => {
  const { items } = recipes;
  const { maxTime } = filter;
  let max = 0;

  if (items.length !== 0) {
    const timeArray = items.map(x => x.preparationTime);
    max = Math.max(...timeArray);
  }

  return {
    max,
    maxTime,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RangeSlider);

RangeSlider.propTypes = {
  max: PropTypes.number.isRequired,
  changeMaxTimeValue: PropTypes.func.isRequired,
  maxTime: PropTypes.number.isRequired,
};