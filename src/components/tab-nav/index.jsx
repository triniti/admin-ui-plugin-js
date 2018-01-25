import React from 'react';
import PropTypes from 'prop-types';
import Nav from '../nav';
import NavItem from '../nav-item';

const TabNav = ({ children }) => {
  const navs = children.map((child, i) => <NavItem key={i}>{child}</NavItem>);
  return (
  <Nav underline className="pt-2" theme="light">
    {navs}
  </Nav>
  );
};

TabNav.propTypes = {
  children: PropTypes.node,
};

export default TabNav;
