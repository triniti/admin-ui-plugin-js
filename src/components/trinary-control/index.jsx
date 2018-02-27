import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';

const UNKNOWN = 0;
const TRUE_VAL = 1;
const FALSE_VAL = 2;

const propTypes = {
  value: PropTypes.oneOf([0, 1, 2, '0', '1', '2']),
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  unsetText: PropTypes.string,
  trueText: PropTypes.string,
  falseText: PropTypes.string,
  radius: PropTypes.string,
  size: PropTypes.string,
  width: PropTypes.string,
  disabled: PropTypes.bool,
};

const defaultProps = {
  value: UNKNOWN,
  unsetText: 'Any',
  trueText: 'Yes',
  falseText: 'No',
};

const TrinaryControl = (props) => {
  const {
    value,
    onChange,
    className,
    cssModule,
    unsetText,
    trueText,
    falseText,
    radius,
    size,
    width,
    disabled,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'form-control',
    size ? `form-control-${size}` : false,
    radius ? `form-control-radius-${radius}` : false,
    disabled ? 'form-control-disabled' : false,
  ), cssModule);

  return (
    <select className={classes} style={{ width }} value={parseInt(value, 10)} onChange={onChange} {...attributes} disabled={disabled}>
      <option value={UNKNOWN}>{unsetText}</option>
      <option value={TRUE_VAL}>{trueText}</option>
      <option value={FALSE_VAL}>{falseText}</option>
    </select>
  );
};

TrinaryControl.propTypes = propTypes;
TrinaryControl.defaultProps = defaultProps;

export default TrinaryControl;
