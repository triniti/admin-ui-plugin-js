import React from 'react';
import PropTypes from 'prop-types';
import Nav from '../nav';
import createNavUnits from './createNavUnits';
import './styles.scss';

const MainNav = ({
  activeSections,
  classesMain,
  currentSection,
  history,
  navConfig,
  onDropdownMenuClick,
  onDropdownTitleClick,
}) => (
  <div className={`navbar-toggleable-md main-nav ${classesMain}`} >
    <Nav navbar>
      {createNavUnits(
        activeSections,
        currentSection,
        history,
        navConfig,
        onDropdownMenuClick,
        onDropdownTitleClick,
      )}
    </Nav>
  </div>
);

MainNav.propTypes = {
  navConfig: PropTypes.arrayOf(PropTypes.object).isRequired,
  classesMain: PropTypes.string,
  activeSections: PropTypes.arrayOf(PropTypes.string),
  currentSection: PropTypes.string,
  history: PropTypes.object.isRequired,
  onDropdownMenuClick: PropTypes.func.isRequired,
  onDropdownTitleClick: PropTypes.func.isRequired,
};

MainNav.defaultProps = {
  classesMain: '',
  activeSections: [],
  currentSection: '',
};

export default MainNav;
