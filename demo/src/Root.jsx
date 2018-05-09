/* eslint-disable react/prop-types */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '../../src/components/app';
import NavbarContainer from '../../src/containers/navbar';
import getUserConfirmation from '../../src/utils/getUserConfirmation';

const Root = ({ store, routes, navConfig }) => (
  <Provider store={store}>
    <BrowserRouter getUserConfirmation={getUserConfirmation(store.dispatch)}>
      <App
        navComponent={<NavbarContainer navConfig={navConfig} />}
        routes={routes}
      />
    </BrowserRouter>
  </Provider>
);

export default Root;
