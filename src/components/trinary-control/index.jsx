import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';
import './styles.scss';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
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
    radius ? `trinary-control-${radius}` : false,
  ), cssModule);

  return (
    <div className={classes}>
      <select {...attributes}>
        <option value="0">{unsetText}</option>
        <option value="1">{trueText}</option>
        <option value="2">{falseText}</option>
      </select>
    </div>
  );
};

TrinaryControl.propTypes = propTypes;
TrinaryControl.defaultProps = defaultProps;

export default TrinaryControl;
