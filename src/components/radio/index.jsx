import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Label } from 'reactstrap';
import Input from '../input';
import './styles.scss';

const Radio = ({ children, className, disabled, right, size, type, ...attributes }) => {
  const classes = classNames(
    className,
    'radio-input',
    'form-control',
    { [`form-control-${size}`]: !!size },
  );

  const labelClasses = classNames(
    className,
    'radio-input-label',
    {
      'radio-disabled': disabled,
      'radio-label-right': right,
    },
  );

  return (
    <Label className={labelClasses}>
      <Input type={type} className={classes} {...attributes} disabled={disabled} />
      <span className="radio-input-icon" />
      {children && <span className="form-radio-label radio-label">{children}</span>}
    </Label>
  );
};

Radio.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  right: PropTypes.bool,
  size: PropTypes.string,
  type: PropTypes.string,
};

Radio.defaultProps = {
  className: '',
  disabled: false,
  right: false,
  size: '',
  type: 'radio',
};

export default Radio;
