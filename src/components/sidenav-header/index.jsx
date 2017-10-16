// react
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';


const SideNavHeader = ({ title = null, children }) => (
  <div className="sidenav-header" >
    <h3 className="sidenav-header-title">{title}</h3>{children}
  </div>
);

SideNavHeader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default SideNavHeader;
