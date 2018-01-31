import React from 'react';
import PropTypes from 'prop-types';

const SidebarBody = ({ children }) => (
  <div className="sidebar-body" >{children}</div>
);

SidebarBody.propTypes = {
  children: PropTypes.node,
};

export default SidebarBody;
