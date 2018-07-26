/* eslint-disable react/prop-types */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from '../../src/components/app';
import TrinitiAppNav from '../../src/components/triniti-app-nav';
import getUserConfirmation from '../../src/utils/getUserConfirmation';

// the user will come from iam redux store
const user = {
  first_name: 'John',
  last_name: 'Doe',
  email: 'john.doe@example.com',
};

const Root = ({ store, routes, navConfig }) => (
  <Provider store={store}>
    <BrowserRouter getUserConfirmation={getUserConfirmation}>
      <App
        navComponent={<TrinitiAppNav navConfig={navConfig} userName={`${user.first_name} ${user.last_name}`} />}
        routes={routes}
      />
    </BrowserRouter>
  </Provider>
);

export default Root;
