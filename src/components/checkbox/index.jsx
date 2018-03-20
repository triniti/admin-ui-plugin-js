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
  id: PropTypes.string.isRequired,
  button: PropTypes.bool,
  radius: PropTypes.string,
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
    children,
    button,
    radius,
    size,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    'checkbox-input',
    size ? `form-control-${size}` : 'form-control',
  ), cssModule);

  const labelClasses = mapToCssModules(classNames(
    className,
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
    <Input type={type} id={id} className={classes} key={`${id}-checkbox-input`} {...attributes} />,
    <Label for={id} className={labelClasses} key={`${id}-checkbox-label`}>
      {button && <Button tag="span" className={buttonClasses}>{children} <Icon imgSrc="plus-outline" className={iconClasses}/><Icon imgSrc="minus-solid" className={iconClasses} /></Button>}
    </Label>,
  ];
};

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default Checkbox;
