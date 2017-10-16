import React from 'react';
import PropTypes from 'prop-types';
import UserNavOpener from './UserNavOpener';
import UserNavContent from './UserNavContent';
import UserNavBackdrop from './UserNavBackdrop';
import './styles.scss';


// fixme: wei/matt need more consistency on naming event and their associated handers
// https://jaketrent.com/post/naming-event-handlers-react/
// onBlah vs handleBlah props.
const UserNav = ({
  activeTab,
  position,
  handleLogout,
  handleBtnClick,
  handleTabClick,
  toggleUserNav,
  currentTheme,
  toggleTheme,
}) => (
  <div className="usernav-wrapper">
    <UserNavOpener handleClick={toggleUserNav} />
    <UserNavContent
      activeTab={activeTab}
      handleBtnClick={handleBtnClick}
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
  handleBtnClick: PropTypes.func,
  handleTabClick: PropTypes.func,
  currentTheme: PropTypes.string,
  toggleTheme: PropTypes.func,
  toggleUserNav: PropTypes.func,
  handleLogout: PropTypes.func,
};

export default UserNav;
