import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { DropdownToggle, DropdownMenu, NavDropdown } from '../';

const DropdownUnit = ({
  dropdownOpen,
  handleToggleClick,
  handleDropdownClick,
  classes,
  title,
  links,
}) => {
  const navLinks = links.map((dpLink) => {
    const { to, linkTitle } = dpLink;
    return (
      <NavLink
        key={linkTitle}
        to={to}
        exact
        onClick={handleDropdownClick}
        className="dropdown-item"
      >
        {linkTitle}
      </NavLink>
    );
  });
  const { to } = links[0];

  return (
    <NavDropdown isOpen={dropdownOpen} toggle={() => undefined} className={classes}>
      <DropdownToggle
        onClick={handleToggleClick}
        tag={NavLink}
        to={to}
        title={title}
        className="nav-link nav-link-desktop"
      >
        {title}
      </DropdownToggle>
      <DropdownToggle
        onClick={handleToggleClick}
        className="nav-link nav-link-mobile"
        nav
      >
        {title}
      </DropdownToggle>
      <DropdownMenu className="nav-dropdown-menu">
        {navLinks}
      </DropdownMenu>
    </NavDropdown>
  );
};

DropdownUnit.propTypes = {
  dropdownOpen: PropTypes.bool,
  handleToggleClick: PropTypes.func,
  handleDropdownClick: PropTypes.func,
  classes: PropTypes.string,
  title: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.object),
};

export default DropdownUnit;
