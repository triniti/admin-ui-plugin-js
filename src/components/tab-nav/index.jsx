import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card';
import Nav from '../nav';
import NavItem from '../nav-item';

const TabNav = ({ children }) => {
  const navs = children.map((child, i) => <NavItem key={i}>{child}</NavItem>);
  return (
    <Card className="border-bottom-0">
      <Nav underline>
        {navs}
      </Nav>
    </Card>
  );
};

TabNav.propTypes = {
  children: PropTypes.node,
};

export default TabNav;
