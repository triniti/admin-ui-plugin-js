import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';
import './styles.scss';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.string,
  unsetText: PropTypes.string,
  trueText: PropTypes.string,
  falseText: PropTypes.string,
};

const defaultProps = {
  unsetText: 'Any',
  trueText: 'Yes',
  falseText: 'No',
};

const TrinaryControl = (props) => {
  const {
    className,
    cssModule,
    size,
    unsetText,
    trueText,
    falseText,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'trinary-control',
    size ? `trinary-control-${size}` : false,
  ), cssModule);

  return (
    <select {...attributes} className={classes}>
      <option value="0">{unsetText}</option>
      <option value="1">{trueText}</option>
      <option value="2">{falseText}</option>
    </select>
  );
};

TrinaryControl.propTypes = propTypes;
TrinaryControl.defaultProps = defaultProps;

export default TrinaryControl;
