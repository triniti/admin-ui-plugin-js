import React from 'react';
import PropTypes from 'prop-types';
import { Input as InputRS } from 'reactstrap';
import classNames from 'classnames';

const Input = ({ className, radius, theme, ...attributes }) => {
  const classes = classNames(
    className,
    radius ? `form-control-radius-${radius}` : false,
    theme ? `form-control-theme-${theme}` : false,
  );

  return <InputRS {...attributes} className={classes} />;
};

Input.propTypes = {
  className: PropTypes.string,
  radius: PropTypes.string,
  theme: PropTypes.string,
};

Input.defaultProps = {
  className: '',
  radius: '',
  theme: '',
};

export default Input;
