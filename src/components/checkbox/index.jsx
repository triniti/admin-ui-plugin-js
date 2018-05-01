import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Label } from 'reactstrap';
import Input from '../input';
import './styles.scss';

const Checkbox = ({ children, className, disabled, right, round, size, type, ...attributes }) => {
  const classes = classNames(
    className,
    'checkbox-input',
    'form-control',
    { [`form-control-${size}`]: !!size },
  );

  const labelClasses = classNames(
    className,
    'checkbox-input-label',
    {
      'checkbox-disabled': disabled,
      'checkbox-label-right': right,
      'checkbox-input-round': round,
    },
  );

  return (
    <Label className={labelClasses} check>
      <Input type={type} className={classes} {...attributes} disabled={disabled} />
      <span className="checkbox-input-icon"/>
      {children && <span className="form-check-label checkbox-label">{children}</span>}
    </Label>
  );
};

Checkbox.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  right: PropTypes.bool,
  round: PropTypes.bool,
  size: PropTypes.string,
  type: PropTypes.string,
};

Checkbox.defaultProps = {
  className: '',
  disabled: false,
  right: false,
  round: false,
  size: '',
  type: 'checkbox',
};

export default Checkbox;
