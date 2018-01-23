// react
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';


const SideBarHeader = ({ title, children }) => (
  <div className="sidebar-header" >
    <h3 className="sidebar-header-title">{title}</h3>{children}
  </div>
);

SideBarHeader.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

SideBarHeader.defaultProps = {
  title: '',
};

export default SideBarHeader;
