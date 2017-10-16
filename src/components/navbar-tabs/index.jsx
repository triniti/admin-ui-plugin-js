// react
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const NavbarTabs = ({ styleName, children }) => (
  <ul className={`navbar-tabs ${(styleName || '')}`}>{children}</ul>
);

NavbarTabs.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default NavbarTabs;
