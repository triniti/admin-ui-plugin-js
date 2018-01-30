/* eslint-disable react/prop-types */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '../../src/components/app';

const Root = ({ store, routes, nav }) => (
  <Provider store={store}>
    <BrowserRouter>
      <App routes={routes} navConfig={nav} />
    </BrowserRouter>
  </Provider>
);

export default Root;
