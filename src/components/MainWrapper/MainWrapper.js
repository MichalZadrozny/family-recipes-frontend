/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Filter from 'components/Filter/Filter';
import RecipePreviewWrapper from 'components/RecipePreviewWrapper/RecipePreviewWrapper';
import Header from 'components/Header/Header';
import { connect } from 'react-redux';
import { PropTypes, bool } from 'prop-types';
import styles from './MainWrapper.module.scss';

const MainWrapper = ({ items, diet }) => (
<div className={styles.wrapper}>
  <Header/>
  <div className={styles.main}>
    <Filter
      diet={diet}
    />
    <RecipePreviewWrapper
      items={items}
      diet={diet}
    />
  </div>
</div>
);

const mapStateToProps = ({ items, diet }) => ({ items, diet });

export default connect(mapStateToProps, null)(MainWrapper);

MainWrapper.propTypes = {
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
