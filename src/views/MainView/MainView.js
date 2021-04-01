/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Filter from 'components/Filter/Filter';
import RecipePreviewWrapper from 'components/RecipePreviewWrapper/RecipePreviewWrapper';
import { connect } from 'react-redux';
import { bool, PropTypes } from 'prop-types';

const MainView = ({ items, diet }) => (
  <>
    <Filter
      diet={diet}
    />
    <RecipePreviewWrapper
      items={items}
      diet={diet}
    />
  </>
);

const mapStateToProps = (state) => {
  const { recipes } = state;
  return recipes;
};
export default connect(mapStateToProps, null)(MainView);

MainView.propTypes = {
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
};
