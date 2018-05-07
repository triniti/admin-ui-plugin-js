/* eslint-disable react/prop-types */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '../../src/components/app';
import getUserConfirmation from '../../src/utils/getUserConfirmation';

const Root = ({ store, routes, nav }) => (
  <Provider store={store}>
    <BrowserRouter getUserConfirmation={getUserConfirmation(store.dispatch)}>
      <App routes={routes} navConfig={nav} dispatch={store.dispatch} />
    </BrowserRouter>
  </Provider>
);

export default Root;
