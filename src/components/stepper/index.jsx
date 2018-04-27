import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactStepper from 'react-stepper-horizontal';
import { mapToCssModules } from '../utils';
import './styles.scss';

const propTypes = {
  className: PropTypes.string,
  cssModule: PropTypes.object,
  fullWidth: PropTypes.bool,
  horizontal: PropTypes.bool,
};

const defaultProps = {
  activeColor: '#08a0e8',
  circleFontSize: 12,
  circleTop: 0,
  completeBarColor: '#08a0e8',
  completeColor: '#08a0e8',
  defaultBarColor: '#d9d9db',
  defaultColor: '#d9d9db',
  defaultTitleColor: '#7a7a7c',
  size: 27,
  titleFontSize: 12,
};

const Stepper = (props) => {
  const {
    className,
    cssModule,
    fullWidth,
    horizontal,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'stepper-container',
    fullWidth ? `stepper-fullwidth` : false,
    horizontal ? `stepper-horizontal` : false,
  ), cssModule);

  return (
    <div className={classes}>
      <ReactStepper
        {...attributes}/>
    </div>
    );
};


Stepper.propTypes = propTypes;
Stepper.defaultProps = defaultProps;

export default Stepper;



