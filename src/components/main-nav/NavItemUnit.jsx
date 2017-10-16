import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { NavItem } from '../';

const NavItemUnit = ({ to, navId, classes, handleDropdownClick }) => (
  <NavItem className={classes}>
    <NavLink to={to} exact onClick={handleDropdownClick} className="nav-link">{navId}</NavLink>
  </NavItem>
);

NavItemUnit.propTypes = {
  to: PropTypes.string,
  navId: PropTypes.string,
  classes: PropTypes.string,
  handleDropdownClick: PropTypes.func,
};

export default NavItemUnit;
