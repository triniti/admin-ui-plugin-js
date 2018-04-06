import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactStepper from 'react-stepper-horizontal';
import { mapToCssModules } from '../utils';
import './styles.scss';

const propTypes = {
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  activeColor: '#04c5a2',
  circleFontSize: 12,
  circleTop: 0,
  completeBarColor: '#04c5a2',
  completeColor: '#04c5a2',
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
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'stepper-container',
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



