import React from 'react';
import PropTypes from 'prop-types';
import { Switch, withRouter } from 'react-router';
import './styles.scss';
// fixme: components ideally are not requesting containers
// they should given them via props or children
import NavbarContainer from '../../containers/navbar';
import createRoutes from './createRoutes';

const App = ({ location, navConfig, routes, authHoc }) => (
  <div id="wrapper" data-slidedirection="">
    {location.pathname !== '/login' && <NavbarContainer navConfig={navConfig} />}
    <Switch>
      {createRoutes(routes, authHoc)}
    </Switch>
  </div>
);

App.propTypes = {
  location: PropTypes.object.isRequired,
  routes: PropTypes.object.isRequired,
  authHoc: PropTypes.func.isRequired,
  navConfig: PropTypes.array,
};

App.defaultProps = { navConfig: [] };

export default withRouter(App);
