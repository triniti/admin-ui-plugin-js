import React from 'react';
import PropsTypes from 'prop-types';
import './styles.scss';

const NavbarTabsItem = ({ title, children, classes, handleClick }) => (
  <li className="navbar-tabs-item">
    <div className={`navbar-tabs-link tabindex ${classes}`} onClick={handleClick}>
      { title }
      {' '}
      { children }
    </div>
  </li>
);

NavbarTabsItem.propTypes = {
  title: PropsTypes.string,
  children: PropsTypes.any,
  classes: PropsTypes.string,
  handleClick: PropsTypes.func,
};

export default NavbarTabsItem;
