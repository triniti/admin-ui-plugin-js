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
  routeChangeTriggered,
}) => (
  <div className={`navbar-toggleable-md main-nav ${classesMain}`} >
    <Nav navbar>
      {createNavUnits(
        navConfig,
        handleToggleClick,
        handleDropdownClick,
        currentSection,
        activeSections,
        routeChangeTriggered,
      )}
    </Nav>
  </div>
);

MainNav.propTypes = {
  navConfig: PropTypes.arrayOf(PropTypes.object).isRequired,
  classesMain: PropTypes.string,
  activeSections: PropTypes.arrayOf(PropTypes.string),
  currentSection: PropTypes.string,
  handleToggleClick: PropTypes.func.isRequired,
  handleDropdownClick: PropTypes.func.isRequired,
  routeChangeTriggered: PropTypes.bool,
};

MainNav.defaultProps = {
  classesMain: '',
  activeSections: [],
  currentSection: '',
  routeChangeTriggered: true,
};

export default MainNav;
