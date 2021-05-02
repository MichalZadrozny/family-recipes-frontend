import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import filterActions from 'redux/actions/filter.actions';

const RangeSlider = ({ max, changeMaxTimeValue, maxTime }) => (
  <div>
    Maksymalny czas: {maxTime > 0 ? maxTime : max} min
    <div>
      0
      <input type='range' min={0} max={max} value={maxTime}
             onInput={changeMaxTimeValue} /> {max}
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