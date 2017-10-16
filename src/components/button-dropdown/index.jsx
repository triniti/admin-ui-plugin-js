import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from '../dropdown/index';

const propTypes = {
  children: PropTypes.node,
};

const ButtonDropdown = props => (
  <Dropdown group {...props} />
  );

ButtonDropdown.propTypes = propTypes;

export default ButtonDropdown;
