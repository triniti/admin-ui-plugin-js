// react
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';


const ScrollableContainer = ({ children }) => (
  <div className="scrollable-container">{children}</div>
);

ScrollableContainer.propTypes = {
  children: PropTypes.node,
};

export default ScrollableContainer;
