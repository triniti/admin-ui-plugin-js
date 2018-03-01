import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';
import Button from '../button';
import Icon from '../icon';
import Input from '../input';
import Label from '../label';
import './styles.scss';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  type: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  button: PropTypes.bool,
  radius: PropTypes.string,
  size: PropTypes.string,
};

const defaultProps = {
  type: 'checkbox',
  id: 'checkbox',
  name: 'checkbox',
};

const Checkbox = (props) => {
  const {
    className,
    cssModule,
    type,
    id,
    name,
    children,
    button,
    radius,
    size,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'checkbox-input',
    size ? `form-control-${size}` : 'form-control',
  ), cssModule);

  const inputClasses = mapToCssModules(classNames(
    button ? 'checkbox-input-button' : 'checkbox-input-label',
  ), cssModule);

  const buttonClasses = mapToCssModules(classNames(
    'btn btn-light',
    size ? `btn-${size}` : false,
    radius ? `btn-radius-${radius}` : false,
  ), cssModule);

  const iconClasses = mapToCssModules(classNames(
    'checkbox-input-button-icon',
    size ? `icon-${size}` : false,
  ), cssModule);

  return [
    <Input type={type} id={id} className={classes} key={`${name}-checkbox-input`} {...attributes} />,
    <Label for={id} className={inputClasses} key={`${name}-checkbox-label`}>
      {button && <Button tag="span" className={buttonClasses}>{children} <Icon imgSrc="plus-outline" className={iconClasses}/><Icon imgSrc="minus-solid" className={iconClasses} /></Button>}
    </Label>,
  ];
};

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default Checkbox;
