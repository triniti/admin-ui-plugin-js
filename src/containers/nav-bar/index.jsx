import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Navbar } from '../../components';
import MainNavContainer from '../main-nav';
import MainNavBackdrop from '../main-nav-backdrop';
import UserNavContainer from '../user-nav';
import MobileNavContainer from '../mobile-nav';
import selectors from '../../selectors';

const NavBarContainer = ({ navConfig, theme }) => {
  const navbarClass = theme === 'light' ? 'navbar' : 'navbar-dark';

  return (
    <Navbar className={`${navbarClass} navbar-main-wrapper`}>
      <MobileNavContainer />
      <MainNavContainer navConfig={navConfig} />
      <MainNavBackdrop />
      <UserNavContainer />
    </Navbar>
  );
};

NavBarContainer.propTypes = {
  navConfig: PropTypes.arrayOf(PropTypes.object),
  theme: PropTypes.string,
};

const mapStateToProps = state => ({
  theme: selectors.getAppTheme(state),
});

export default withRouter(connect(mapStateToProps)(NavBarContainer));
