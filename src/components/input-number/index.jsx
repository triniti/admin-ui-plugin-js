import React from 'react';
import PropTypes from 'prop-types';
import NumericInput from 'react-numeric-input';
import classNames from 'classnames';
import './styles.scss';

const InputNumber = ({ className, radius, size, theme, ...attributes }) => {
  const classes = classNames(
    className,
    'form-control',
    {
      [`form-control-radius-${radius}`]: !!radius,
      [`form-control-theme-${theme}`]: !!theme,
      [`form-control-${size}`]: !!size,
    },
  );

  return <NumericInput {...attributes} className={classes} />;
};

InputNumber.propTypes = {
  className: PropTypes.string,
  radius: PropTypes.string,
  size: PropTypes.string,
  theme: PropTypes.string,
};

InputNumber.defaultProps = {
  className: '',
  radius: '',
  size: '',
  theme: '',
};

export default InputNumber;
