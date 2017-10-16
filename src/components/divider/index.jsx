// react
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';


const Divider = ({ size, children }) => (
  <div className={`divider divider-${(size || 'md')}`} >{children}</div>
);

Divider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Divider;
