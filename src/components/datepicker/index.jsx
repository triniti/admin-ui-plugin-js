import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactDatePicker from 'react-datepicker';
import moment from 'moment';
import './styles.scss';

const DatePicker = ({className, radius, size, theme, ...attributes}) => {
  const classes =classNames(
    className,
    'form-control',
    {
      [`form-control-${size}`]: !!size,
      [`form-control-radius-${radius}`]: !!radius,
      [`form-control-theme-${theme}`]: !!theme,
    },
  );

  return (
    <ReactDatePicker className={classes} {...attributes}/>
  );
};

DatePicker.propTypes = {
  className: PropTypes.string,
  radius: PropTypes.string,
  size: PropTypes.string,
  theme: PropTypes.string,
};

DatePicker.defaultProps = {
  className: '',
  radius: '',
  size: '',
  theme: '',
};

export default DatePicker;
