import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button as ButtonRS } from 'reactstrap';

import './styles.scss';

const Button = ({ action, className, color, icon, outlineText, radius, ...attributes }) => {
  const classes = classNames(
    className,
    action ? `btn-action btn-${action}` : false,
    outlineText ? `btn-outline-text-${color}` : false,
    radius ? `btn-radius-${radius}` : false,
    { 'btn-icon': icon },
  );

  return <ButtonRS color={color} className={classes} {...attributes} />;
};

Button.propTypes = {
  action: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.bool,
  outline: PropTypes.bool,
  outlineText: PropTypes.bool,
  radius: PropTypes.string,
};

Button.defaultProps = {
  action: '',
  className: '',
  color: 'light',
  icon: false,
  outlineText: false,
  radius: '',
};

export default Button;
