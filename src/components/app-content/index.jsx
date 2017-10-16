import React from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'react-router';
import createRoutes from './createRoutes';

const AppContent = ({ routes, authHoc = null }) => (
  <Switch>
    {createRoutes(routes, authHoc)}
  </Switch>
);

AppContent.propTypes = {
  routes: PropTypes.object,
  authHoc: PropTypes.func,
};

export default AppContent;
