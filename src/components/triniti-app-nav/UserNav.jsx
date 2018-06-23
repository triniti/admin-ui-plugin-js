import React from 'react';
import PropTypes from 'prop-types';
import UserNavContent from './UserNavContent';
import { Backdrop, Button, Icon } from '../../components';

const UserNav = ({
  isOpen,
  onLogout,
  toggleUserNav,
  currentTheme,
  toggleTheme,
}) => (
  <div className="usernav-wrapper">
    <Button radius="circle" color="usernav" onClick={toggleUserNav}>
      <Icon imgSrc="user" />
    </Button>
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

UserNav.defaultProps = {
  currentTheme: 'light',
  isOpen: false,
};

export default UserNav;
