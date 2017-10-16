import React from 'react';
import PropTypes from 'prop-types';
import { NavbarToggler, NavbarBrand } from '../';
import './styles.scss';


const MobileNav = ({ handleToggle, title }) => (
  <div className="navbar-main-mobile">
    <NavbarToggler className="navbar-toggler hidden-lg-up" onClick={handleToggle} />
    <NavbarBrand href="/" className="navbar-main-brand"><span className="sr-only">{title}</span></NavbarBrand>
    <span className="navbar-main-spacer" />
  </div>
);

MobileNav.propTypes = {
  handleToggle: PropTypes.func,
  title: PropTypes.string,
};

export default MobileNav;
