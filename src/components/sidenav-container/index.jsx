// react
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const SideNavContainer = ({ id, children }) => (
  <div className="sidenav-container" id={id}>{children}</div>
);

SideNavContainer.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
};

SideNavContainer.defaultProps = {
  id: '',
};

export default SideNavContainer;
