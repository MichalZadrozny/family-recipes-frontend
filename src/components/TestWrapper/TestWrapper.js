/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Filter from 'components/Filter/Filter';
import RecipePreviewWrapper from 'components/RecipePreviewWrapper/RecipePreviewWrapper';
import { connect } from 'react-redux';
import {handleCheckboxChange as checkboxChange, /* updateItems as updateRecipes */} from 'actions';
import { PropTypes, bool } from 'prop-types';

const TestWrapper = ({ items, diet, handleCheckboxChange}) => (
  <>
    <Filter
      diet={diet}
      handleCheckboxChange={(event) => {handleCheckboxChange(event)}}
    />
    <RecipePreviewWrapper items={items} diet={diet}/>
  </>
);

const mapStateToProps = ({ items, diet }) => ({ items, diet });

const mapDispatchToProps = dispatch => ({
  handleCheckboxChange: event => dispatch(checkboxChange(event)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TestWrapper);

TestWrapper.propTypes = {
  diet: PropTypes.objectOf(bool).isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      image: PropTypes.string,
      name: PropTypes.string,
      diet: PropTypes.string,
      time: PropTypes.number,
    }),
  ).isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
};
