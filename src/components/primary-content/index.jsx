// react
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';


const PrimaryContent = ({ children }) => (
  <div className="primary-content">{children}</div>
);

PrimaryContent.propTypes = {
  children: PropTypes.node,
};

export default PrimaryContent;
