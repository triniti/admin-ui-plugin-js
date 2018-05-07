import React from 'react';
import PropTypes from 'prop-types';
import UserNavOpener from './UserNavOpener';
import UserNavContent from './UserNavContent';
import UserNavBackdrop from '../../containers/user-nav-backdrop';
import './styles.scss';

const UserNav = ({
  activeTab,
  position,
  handleLogout,
  toggleUserNav,
  currentTheme,
  toggleTheme,
}) => (
  <div className="usernav-wrapper">
    <UserNavOpener onClick={toggleUserNav} />
    <UserNavContent
      activeTab={activeTab}
      currentTheme={currentTheme}
      position={position}
      toggleTheme={toggleTheme}
      toggleUserNav={toggleUserNav}
      onLogout={handleLogout}
    />
    <UserNavBackdrop />
  </div>
);

UserNav.propTypes = {
  position: PropTypes.string,
  activeTab: PropTypes.string,
  currentTheme: PropTypes.string,
  toggleTheme: PropTypes.func,
  toggleUserNav: PropTypes.func,
  handleLogout: PropTypes.func,
};

export default UserNav;
