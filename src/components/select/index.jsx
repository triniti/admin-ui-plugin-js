import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactSelect from 'react-select';
import './styles.scss';

const Select = ({ className, radius, size, theme, ...attributes }) => {
  const classes = classNames(
    className,
    'select-form-control',
    {
      [`select-form-control-radius-${radius}`]: !!radius,
      [`select-form-control-${size}`]: !!size,
      [`select-form-control-theme-${theme}`]: !!theme,
    },
  );

  return <ReactSelect className={classes} {...attributes} />;
};

Select.propTypes = {
  className: PropTypes.string,
  radius: PropTypes.string,
  size: PropTypes.string,
  theme: PropTypes.string,
};

Select.defaultProps = {
  className: '',
  radius: '',
  size: '',
  theme: '',
};

export default Select;
