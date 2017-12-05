import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  buttons: PropTypes.bool,
};

const defaultProps = {
  tag: 'div',
};

const ModalFooter = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    buttons,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    buttons ? 'modal-footer-buttons' : false,
    'modal-footer',
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

ModalFooter.propTypes = propTypes;
ModalFooter.defaultProps = defaultProps;

export default ModalFooter;
