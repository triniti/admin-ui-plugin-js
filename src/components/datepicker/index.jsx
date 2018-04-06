import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactDatePicker from 'react-datepicker';
import moment from 'moment';
import { mapToCssModules } from '../utils';
import './styles.scss';

const propTypes = {
  className: PropTypes.string,
  cssModule: PropTypes.object,
  radius: PropTypes.string,
  size: PropTypes.string,
  theme: PropTypes.string,
};

const DatePicker = (props) => {
  const {
    className,
    cssModule,
    radius,
    size,
    theme,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    size ? `form-control-${size}` : false,
    radius ? `form-control-radius-${radius}` : false,
    theme ? `form-control-theme-${theme}` : false,
    'form-control',
  ), cssModule);


  return (
    <ReactDatePicker className={classes} {...attributes}/>
  );
};

DatePicker.propTypes = propTypes;

export default DatePicker;
