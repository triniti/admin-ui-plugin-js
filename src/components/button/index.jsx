import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button as ButtonRS } from 'reactstrap';

import './styles.scss';

const Button = ({ action, className, color, icon, outlineText, radius, ...attributes }) => {
  const classes = classNames(
    className,
    { 'btn-icon': icon },
    {
      [`btn-action btn-${action}`]: !!action,
      [`btn-outline-text-${color}`]: !!outlineText,
      [`btn-radius-${radius}`]: !!radius,
    },
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
