import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import store from 'store';
import GlobalStyle from 'theme/GolbalStyle';
import styles from 'templates/MainTemplate.module.scss';

import Header from '../components/Header/Header';

const MainTemplate = ({ children }) => (
  <>
    <Provider store={store}>
      <GlobalStyle />
      <div className={styles.wrapper}>
        <Header />
        <div className={styles.main}>
          {children}
        </div>
      </div>
    </Provider>
  </>
);

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
