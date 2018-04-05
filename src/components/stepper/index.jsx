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
  activeColor: '#03caa5',
  circleFontSize: 12,
  circleTop: 0,
  completeBarColor: '#03caa5',
  completeColor: '#03caa5',
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
    activeColor,
    circleFontSize,
    circleTop,
    completeBarColor,
    completeColor,
    defaultBarColor,
    defaultColor,
    defaultTitleColor,
    size,
    titleFontSize,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'stepper-container',
  ), cssModule);

  return (
    <div className={classes}>
      <ReactStepper
        activeColor={activeColor}
        circleFontSize={circleFontSize}
        circleTop={circleTop}
        completeBarColor={completeBarColor}
        completeColor={completeColor}
        defaultBarColor={defaultBarColor}
        defaultColor={defaultColor}
        defaultTitleColor={defaultTitleColor}
        size={size}
        titleFontSize={titleFontSize}
        {...attributes}/>
    </div>
    );
};


Stepper.propTypes = propTypes;
Stepper.defaultProps = defaultProps;

export default Stepper;



