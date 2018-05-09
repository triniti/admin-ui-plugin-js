import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { DropdownToggle, DropdownMenu, Dropdown } from '../';

const DropdownUnit = ({
  dropdownOpen,
  onTitleClick,
  location,
  title,
  links,
}) => {
  let isCurrent = false;
  const navLinks = links.map((dpLink) => {
    const { to, linkTitle } = dpLink;
    if (location.pathname.includes(to)) {
      isCurrent = true;
    }
    return (
      <NavLink
        key={linkTitle}
        to={to}
        exact
        className="dropdown-item"
      >
        {linkTitle}
      </NavLink>
    );
  });

  // when toggler clicked, default route user to the first item in the menu list, desktop only!!!
  const { to } = links[0];

  return (
    <Dropdown nav isOpen={dropdownOpen} toggle={() => undefined} className={isCurrent ? 'is-current' : ''}>
      <DropdownToggle nav onClick={() => onTitleClick(to)}>
        {title}
      </DropdownToggle>
      <DropdownMenu className="nav-dropdown-menu">
        {navLinks}
      </DropdownMenu>
    </Dropdown>
  );
};

DropdownUnit.propTypes = {
  dropdownOpen: PropTypes.bool,
  onTitleClick: PropTypes.func,
  location: PropTypes.object.isRequired,
  title: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.object),
};

export default DropdownUnit;
