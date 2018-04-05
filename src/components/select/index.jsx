import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactSelect from 'react-select';
import { mapToCssModules } from '../utils';
import './styles.scss';

const propTypes = {
  className: PropTypes.string,
  cssModule: PropTypes.object,
  radius: PropTypes.string,
  size: PropTypes.string,
  theme: PropTypes.string,
};

const Select = (props) => {
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
    size ? `select-form-control-${size}` : false,
    radius ? `select-form-control-radius-${radius}` : false,
    theme ? `select-form-control-theme-${theme}` : false,
    'select-form-control',
  ), cssModule);


  return (
    <ReactSelect className={classes} {...attributes} />
  );
};

Select.propTypes = propTypes;

export default Select;
