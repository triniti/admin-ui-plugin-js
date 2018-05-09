/* eslint-disable react/prop-types */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from '../../src/components/app';
import TrinitiAppNav from '../../src/components/triniti-app-nav';
import getUserConfirmation from '../../src/utils/getUserConfirmation';

const Root = ({ store, routes, navConfig }) => (
  <Provider store={store}>
    <BrowserRouter getUserConfirmation={getUserConfirmation}>
      <App
        navComponent={<TrinitiAppNav navConfig={navConfig} />}
        routes={routes}
      />
    </BrowserRouter>
  </Provider>
);

export default Root;
