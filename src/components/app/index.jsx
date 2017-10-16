import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import 'sweetalert2/dist/sweetalert2.min.css';
import './styles.scss';
// fixme: components ideally are not requesting containers
// they should given them via props or children
import NavBarContainer from '../../containers/NavBarContainer';
import FlashMessageContainer from '../../containers/FlashMessageContainer';
import AppContent from '../app-content';


const App = ({ location, navConfig, routes, authHoc }) => (
  <div id="wrapper" data-slidedirection="">
    <FlashMessageContainer />
    {
      location.pathname !== '/login'
      &&
      <NavBarContainer navConfig={navConfig} />
    }
    <AppContent routes={routes} authHoc={authHoc} />
  </div>
);


App.propTypes = {
  location: PropTypes.object,
  routes: PropTypes.object,
  navConfig: PropTypes.array,
  authHoc: PropTypes.func,
};

export default withRouter(App);
