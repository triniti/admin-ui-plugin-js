import React from 'react';
import PropTypes from 'prop-types';
import Nav from '../nav';
import createNavUnits from './createNavUnits';
import './styles.scss';

const MainNav = ({
  navConfig,
  classesMain,
  activeSections,
  currentSection,
  handleToggleClick,
  handleDropdownClick,
}) => (
  <div className={`navbar-toggleable-md navbar-mobile-offcanvas main-nav ${classesMain}`} >
    <Nav navbar>
      {createNavUnits(navConfig, handleToggleClick, handleDropdownClick, currentSection, activeSections)}
    </Nav>
  </div>
);

MainNav.propTypes = {
  navConfig: PropTypes.arrayOf(PropTypes.object),
  classesMain: PropTypes.string,
  activeSections: PropTypes.arrayOf(PropTypes.string),
  currentSection: PropTypes.string,
  handleToggleClick: PropTypes.func,
  handleDropdownClick: PropTypes.func,
};

export default MainNav;
