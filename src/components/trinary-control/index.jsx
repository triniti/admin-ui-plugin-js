import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';
import './styles.scss';

const UNKNOWN = 0;
const TRUE_VAL = 1;
const FALSE_VAL = 2;

const propTypes = {
  value: PropTypes.oneOf([0, 1, 2, '0', '1', '2']).isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  unsetText: PropTypes.string,
  trueText: PropTypes.string,
  falseText: PropTypes.string,
  outline: PropTypes.bool,
  radius: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
};

const defaultProps = {
  unsetText: 'Any',
  trueText: 'Yes',
  falseText: 'No',
  color: 'light',
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
    outline,
    radius,
    size,
    color,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'trinary-control',
    size ? `trinary-control-${size}` : false,
    `trinary-control${outline ? '-outline' : ''}-${color}`,
    radius ? `trinary-control-radius-${radius}` : false,
  ), cssModule);

  return (
    <div className={classes}>
      <select value={parseInt(value, 10)} onChange={onChange} {...attributes}>
        <option value={UNKNOWN}>{unsetText}</option>
        <option value={TRUE_VAL}>{trueText}</option>
        <option value={FALSE_VAL}>{falseText}</option>
      </select>
    </div>
  );
};

TrinaryControl.propTypes = propTypes;
TrinaryControl.defaultProps = defaultProps;

export default TrinaryControl;
