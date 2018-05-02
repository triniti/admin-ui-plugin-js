import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const UNKNOWN = 0;
const TRUE_VAL = 1;
const FALSE_VAL = 2;

const TrinaryControl = ({
  value, onChange, className, unsetText, trueText, falseText, radius, size, width, disabled, ...attributes
}) => {
  const classes = classNames(
    className,
    'form-control',
    {
      'form-control-disabled': disabled,
    },
    {
      [`form-control-radius-${radius}`]: !!radius,
      [`form-control-${size}`]: !!size,
    },
  );

  return (
    <select className={classes} style={{ width }} value={parseInt(value, 10)} onChange={onChange} {...attributes} disabled={disabled}>
      <option value={UNKNOWN}>{unsetText}</option>
      <option value={TRUE_VAL}>{trueText}</option>
      <option value={FALSE_VAL}>{falseText}</option>
    </select>
  );
};

TrinaryControl.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  falseText: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  radius: PropTypes.string,
  size: PropTypes.string,
  trueText: PropTypes.string,
  unsetText: PropTypes.string,
  value: PropTypes.oneOf([0, 1, 2, '0', '1', '2']),
  width: PropTypes.string,
};

TrinaryControl.defaultProps = {
  className: '',
  disabled: false,
  falseText: 'No',
  radius: '',
  size: '',
  trueText: 'Yes',
  unsetText: 'Any',
  value: UNKNOWN,
  width: '',
};

export default TrinaryControl;
