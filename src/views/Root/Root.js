import React from 'react';
import TestWrapper from 'components/TestWrapper/TestWrapper';
import {Provider} from 'react-redux';
import store from 'store';
import GlobalStyle from 'theme/GolbalStyle';

const Root = () => (
  <>
    <Provider store={store}>
      <GlobalStyle />
      <TestWrapper />
    </Provider>
  </>
);

export default Root;
