// react
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Divider = ({ size = 'dm', children }) => (
  <div className={`divider divider-${size}`} >{children}</div>
);

Divider.propTypes = {
  size: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Divider;
