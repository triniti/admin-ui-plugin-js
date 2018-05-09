import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { NavItem } from '../';

const ItemUnit = ({
  to, navId, location,
}) => (
  <NavItem className={location.pathname.includes(to) ? 'is-current' : ''}>
    <NavLink to={to} exact className="nav-link">{navId}</NavLink>
  </NavItem>
);

ItemUnit.propTypes = {
  to: PropTypes.string.isRequired,
  navId: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
};

export default ItemUnit;
