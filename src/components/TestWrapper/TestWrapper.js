/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Filter from 'components/Filter/Filter';
import RecipePreviewWrapper from 'components/RecipePreviewWrapper/RecipePreviewWrapper';
import { connect } from 'react-redux';
import { PropTypes, bool } from 'prop-types';

const TestWrapper = ({ items, diet }) => (
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

const mapStateToProps = ({ items, diet }) => ({ items, diet });

export default connect(mapStateToProps, null)(TestWrapper);

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
};
