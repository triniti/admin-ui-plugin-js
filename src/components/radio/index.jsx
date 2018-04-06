import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';
import Input from '../input';
import Label from '../label';
import './styles.scss';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  disabled: PropTypes.bool,
  right: PropTypes.bool,
  size: PropTypes.string,
  type: PropTypes.string,
};

const defaultProps = {
  type: 'radio',
};

const Radio = (props) => {
  const {
    children,
    className,
    cssModule,
    disabled,
    right,
    size,
    type,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'radio-input',
    size ? `form-control form-control-${size}` : 'form-control',
  ), cssModule);

  const labelClasses = mapToCssModules(classNames(
    className,
    'radio-input-label',
    disabled ? 'radio-disabled' : false,
    right ? 'radio-label-right' : false,
  ), cssModule);

  return (
    <Label className={labelClasses}>
      <Input type={type} className={classes} {...attributes} disabled={disabled} />
      <span className="radio-input-icon"/>
      {children && <span className="form-radio-label radio-label">{children}</span>}
    </Label>
  );
};

Radio.propTypes = propTypes;
Radio.defaultProps = defaultProps;

export default Radio;
