import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { NavItem } from '../';

const NavItemUnit = ({
  to, navId, classes, onClick,
}) => (
  <NavItem className={classes}>
    <NavLink to={to} exact onClick={onClick} className="nav-link">{navId}</NavLink>
  </NavItem>
);

NavItemUnit.propTypes = {
  to: PropTypes.string.isRequired,
  navId: PropTypes.string.isRequired,
  classes: PropTypes.string,
  onClick: PropTypes.func,
};

NavItemUnit.defaultProps = {
  classes: '',
  onClick: undefined,
};

export default NavItemUnit;
