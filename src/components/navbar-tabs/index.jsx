// react
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles.scss';

const NavbarTabs = ({ className, children }) => (
  <ul className={classnames('navbar-tabs', className)}>{children}</ul>
);

NavbarTabs.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default NavbarTabs;
