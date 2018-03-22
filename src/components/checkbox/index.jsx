import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';
import Input from '../input';
import Label from '../label';
import './styles.scss';

const propTypes = {
  className: PropTypes.string,
  cssModule: PropTypes.object,
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  round: PropTypes.bool,
  size: PropTypes.string,
};

const defaultProps = {
  type: 'checkbox',
};

const Checkbox = (props) => {
  const {
    className,
    cssModule,
    type,
    id,
    round,
    size,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    'checkbox-input',
    size ? `form-control form-control-${size}` : 'form-control',
  ), cssModule);

  const labelClasses = mapToCssModules(classNames(
    className,
    'checkbox-input-label',
    round ? 'checkbox-input-round' : false,
  ), cssModule);


  return [
    <Input type={type} id={id} className={classes} key={`${id}-checkbox-input`} {...attributes} />,
    <Label for={id} className={labelClasses} key={`${id}-checkbox-label`} />,
  ];
};

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default Checkbox;
