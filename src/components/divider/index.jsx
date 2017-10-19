// react
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Divider = ({ size, children }) => (
  <div className={`divider divider-${size}`}>{children}</div>
);

Divider.propTypes = {
  size: PropTypes.string,
  children: PropTypes.node,
};

Divider.defaultProps = {
  size: 'md',
};

export default Divider;
