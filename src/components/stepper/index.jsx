import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactStepper from 'react-stepper-horizontal';
import './styles.scss';

const Stepper = ({
  activeColor,
  circleFontSize,
  circleTop,
  className,
  completeBarColor,
  completeColor,
  defaultBarColor,
  defaultColor,
  defaultTitleColor,
  fullWidth,
  horizontal,
  size,
  titleFontSize,
  ...attributes
}) => {
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
        {...attributes}
      />
    </div>
  );
};

Stepper.propTypes = {
  activeColor: PropTypes.string,
  circleFontSize: PropTypes.number,
  circleTop: PropTypes.number,
  className: PropTypes.string,
  completeBarColor: PropTypes.string,
  completeColor: PropTypes.string,
  defaultBarColor: PropTypes.string,
  defaultColor: PropTypes.string,
  defaultTitleColor: PropTypes.string,
  fullWidth: PropTypes.bool,
  horizontal: PropTypes.bool,
  size: PropTypes.number,
  titleFontSize: PropTypes.number,
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
