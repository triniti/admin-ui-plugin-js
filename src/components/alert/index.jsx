import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';
import Fade from '../fade';
import './styles.scss';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  closeClassName: PropTypes.string,
  closeAriaLabel: PropTypes.string,
  cssModule: PropTypes.object,
  color: PropTypes.string,
  isOpen: PropTypes.bool,
  inverse: PropTypes.bool,
  sticky: PropTypes.bool,
  toggle: PropTypes.func,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  transition: PropTypes.shape(Fade.propTypes),
};

const defaultProps = {
  color: 'success',
  isOpen: true,
  tag: 'div',
  closeAriaLabel: 'Close',
  transition: {
    ...Fade.defaultProps,
    unmountOnExit: true,
  },
};

function Alert(props) {
  const {
    className,
    closeClassName,
    closeAriaLabel,
    cssModule,
    tag: Tag,
    color,
    isOpen,
    toggle,
    children,
    transition,
    inverse,
    sticky,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'alert',
    `alert-${color}`,
    inverse ? 'alert-inverse' : false,
    sticky ? 'alert-sticky' : false,
    { 'alert-dismissible': toggle },
  ), cssModule);

  const closeClasses = mapToCssModules(classNames('btn-alert-close', closeClassName), cssModule);

  return (
    <Fade {...attributes} {...transition} tag={Tag} className={classes} in={isOpen} role="alert">
      {toggle ?
        <button type="button" className={closeClasses} aria-label={closeAriaLabel} onClick={toggle}>
          <span aria-hidden="true">&times;</span>
        </button>
        : null}
      {children}
    </Fade>
  );
}

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;

export default Alert;
