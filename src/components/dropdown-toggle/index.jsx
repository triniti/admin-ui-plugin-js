import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { DropdownToggle as DropdownToggleRS } from 'reactstrap';

const DropdownToggle = ({ className, color, icon, outlineText, radius, size, ...attributes }) => {
  const classes = classNames(
    className,
    { 'btn-icon': icon },
    {
      [`btn-${size}`]: !!size,
      [`btn-outline-text-${color}`]: !!outlineText,
      [`btn-radius-${radius}`]: !!radius,
    },
  );

  return <DropdownToggleRS color={color} {...attributes} className={classes} />;
};

DropdownToggle.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.bool,
  outlineText: PropTypes.bool,
  radius: PropTypes.string,
  size: PropTypes.string,
};

DropdownToggle.defaultProps = {
  className: '',
  color: 'light',
  icon: false,
  outlineText: false,
  radius: '',
  size: '',
};

export default DropdownToggle;
