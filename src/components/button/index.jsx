import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button as ButtonRS } from 'reactstrap';

import './styles.scss';

const Button = ({ action, className, color, icon, radius, ...attributes }) => {
  const classes = classNames(
    className,
    action ? `btn-action btn-${action}` : false,
    radius ? `btn-radius-${radius}` : false,
    { 'btn-icon': icon },
  );

  return <ButtonRS className={classes} {...attributes} />;
};

Button.propTypes = {
  action: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.bool,
  radius: PropTypes.string,
};

Button.defaultProps = {
  action: '',
  className: '',
  color: 'light',
  icon: false,
  radius: '',
};

export default Button;
