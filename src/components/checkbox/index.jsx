import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Label } from 'reactstrap';
import { mapToCssModules } from '../utils';
import Input from '../input';
import './styles.scss';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  disabled: PropTypes.bool,
  right: PropTypes.bool,
  round: PropTypes.bool,
  size: PropTypes.string,
  type: PropTypes.string,
};

const defaultProps = {
  type: 'checkbox',
};

const Checkbox = (props) => {
  const {
    children,
    className,
    cssModule,
    disabled,
    right,
    round,
    size,
    type,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    'checkbox-input',
    size ? `form-control form-control-${size}` : 'form-control',
  ), cssModule);

  const labelClasses = mapToCssModules(classNames(
    className,
    'checkbox-input-label',
    disabled ? 'checkbox-disabled' : false,
    right ? 'checkbox-label-right' : false,
    round ? 'checkbox-input-round' : false,
  ), cssModule);


  return (
    <Label className={labelClasses} check>
      <Input type={type} className={classes} {...attributes} disabled={disabled} />
      <span className="checkbox-input-icon"/>
      {children && <span className="form-check-label checkbox-label">{children}</span>}
    </Label>
  );
};

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default Checkbox;
