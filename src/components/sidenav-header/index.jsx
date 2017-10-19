// react
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';


const SideNavHeader = ({ title, children }) => (
  <div className="sidenav-header" >
    <h3 className="sidenav-header-title">{title}</h3>{children}
  </div>
);

SideNavHeader.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

SideNavHeader.defaultProps = {
  title: '',
};

export default SideNavHeader;
