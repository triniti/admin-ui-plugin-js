// react
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const ContentContainer = ({ children }) => (
  <div className="content-container">{children}</div>
);

ContentContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default ContentContainer;
