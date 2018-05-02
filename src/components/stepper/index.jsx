import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactStepper from 'react-stepper-horizontal';
import './styles.scss';

const Stepper = ({ className, fullWidth, horizontal, ...attributes }) => {
  const classes = classNames(
    className,
    'stepper-container',
    {
      'stepper-fullwidth': fullWidth,
      'stepper-horizontal': horizontal,
    },
  );

  return (
    <div className={classes}>
      <ReactStepper
        {...attributes}/>
    </div>
    );
};

Stepper.propTypes = {
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
  horizontal: PropTypes.bool,
};

Stepper.defaultProps = {
  activeColor: '#08a0e8',
  className: '',
  circleFontSize: 12,
  circleTop: 0,
  completeBarColor: '#08a0e8',
  completeColor: '#08a0e8',
  defaultBarColor: '#d9d9db',
  defaultColor: '#d9d9db',
  defaultTitleColor: '#7a7a7c',
  fullWidth: false,
  horizontal: false,
  size: 27,
  titleFontSize: 12,
};

export default Stepper;
