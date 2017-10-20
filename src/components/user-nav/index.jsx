import React from 'react';
import PropTypes from 'prop-types';
import UserNavOpener from './UserNavOpener';
import UserNavContent from './UserNavContent';
import UserNavBackdrop from '../../containers/user-nav-backdrop';
import './styles.scss';


// fixme: wei/matt need more consistency on naming event and their associated handers
// https://jaketrent.com/post/naming-event-handlers-react/
// onBlah vs handleBlah props.
const UserNav = ({
  activeTab,
  position,
  handleLogout,
  handleTabClick,
  toggleUserNav,
  currentTheme,
  toggleTheme,
}) => (
  <div className="usernav-wrapper">
    <UserNavOpener handleClick={toggleUserNav} />
    <UserNavContent
      activeTab={activeTab}
      handleTabClick={handleTabClick}
      currentTheme={currentTheme}
      position={position}
      toggleTheme={toggleTheme}
      toggleUserNav={toggleUserNav}
      handleLogout={handleLogout}
    />
    <UserNavBackdrop />
  </div>
);

UserNav.propTypes = {
  position: PropTypes.string,
  activeTab: PropTypes.string,
  handleTabClick: PropTypes.func,
  currentTheme: PropTypes.string,
  toggleTheme: PropTypes.func,
  toggleUserNav: PropTypes.func,
  handleLogout: PropTypes.func,
};

export default UserNav;
