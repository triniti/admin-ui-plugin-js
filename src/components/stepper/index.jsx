import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactStepper from 'react-stepper-horizontal';
import { mapToCssModules } from '../utils';
import './styles.scss';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  activeColor: '#03caa5',
  circleTop: 0,
  completeBarColor: '#03caa5',
  completeColor: '#03caa5',
  size: 36,
  titleFontSize: 12,
};

const Stepper = (props) => {
  const {
    className,
    cssModule,
    activeColor,
    circleTop,
    completeBarColor,
    completeColor,
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
        circleTop={circleTop}
        completeBarColor={completeBarColor}
        completeColor={completeColor}
        size={size}
        titleFontSize={titleFontSize}
        {...attributes}/>
    </div>
    );
};


Stepper.propTypes = propTypes;
Stepper.defaultProps = defaultProps;

export default Stepper;



