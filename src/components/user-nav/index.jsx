import React from 'react';
import PropTypes from 'prop-types';
import UserNavOpener from './UserNavOpener';
import UserNavContent from './UserNavContent';
import { Backdrop } from '../../components';
import './styles.scss';

const UserNav = ({
  isOpen,
  onLogout,
  toggleUserNav,
  currentTheme,
  toggleTheme,
}) => (
  <div className="usernav-wrapper">
    <UserNavOpener onClick={toggleUserNav} />
    <UserNavContent
      currentTheme={currentTheme}
      isOpen={isOpen}
      toggleTheme={toggleTheme}
      toggleUserNav={toggleUserNav}
      onLogout={onLogout}
    />
    <Backdrop onClick={toggleUserNav} />
  </div>
);

UserNav.propTypes = {
  currentTheme: PropTypes.string,
  isOpen: PropTypes.bool,
  onLogout: PropTypes.func.isRequired,
  toggleTheme: PropTypes.func.isRequired,
  toggleUserNav: PropTypes.func.isRequired,
};

UserNav.defualtProps = {
  currentTheme: 'light',
  isOpen: false,
};

export default UserNav;
