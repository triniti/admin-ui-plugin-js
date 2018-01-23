import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';


const SidebarHeader = ({ title, children }) => (
  <div className="sidebar-header" >
    <h3 className="sidebar-header-title">{title}</h3>{children}
  </div>
);

SidebarHeader.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

SidebarHeader.defaultProps = {
  title: '',
};

export default SidebarHeader;
