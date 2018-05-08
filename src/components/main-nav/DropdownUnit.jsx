import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { DropdownToggle, DropdownMenu, Dropdown } from '../';

const DropdownUnit = ({
  dropdownOpen,
  onTitleClick,
  onDropdownMenuClick,
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
        onClick={onDropdownMenuClick}
        className="dropdown-item"
      >
        {linkTitle}
      </NavLink>
    );
  });

  // when toggler clicked, default route user to the first item in the menu list, desktop only!!!
  const { to } = links[0];

  return (
    <Dropdown nav isOpen={dropdownOpen} toggle={() => undefined} className={classes}>
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
  onDropdownMenuClick: PropTypes.func,
  classes: PropTypes.string,
  title: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.object),
};

export default DropdownUnit;
