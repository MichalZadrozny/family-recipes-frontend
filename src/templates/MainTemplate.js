import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import store from 'store';
import GlobalStyle from 'theme/GolbalStyle';


const MainTemplate = ({ children }) => (
  <>
    <Provider store={store}>
      <GlobalStyle />
      {children}
    </Provider>
  </>
);

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
