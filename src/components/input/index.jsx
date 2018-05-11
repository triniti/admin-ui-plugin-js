import React from 'react';
import PropTypes from 'prop-types';
import { Input as InputRS } from 'reactstrap';
import classNames from 'classnames';

const Input = ({ className, radius, size, theme, ...attributes }) => {
  const classes = classNames(
    className,
    {
      [`form-control-radius-${radius}`]: !!radius,
      [`form-control-theme-${theme}`]: !!theme,
    },
  );

  return <InputRS bsSize={size} {...attributes} className={classes} />;
};

Input.propTypes = {
  className: PropTypes.string,
  radius: PropTypes.string,
  size: PropTypes.string,
  theme: PropTypes.string,
};

Input.defaultProps = {
  className: '',
  radius: '',
  size: '',
  theme: '',
};

export default Input;
