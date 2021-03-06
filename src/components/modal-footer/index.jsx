import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ModalFooter as ModalFooterRS } from 'reactstrap';

const ModalFooter = ({ className, buttons, ...attributes }) => {
  const classes = classNames(
    className,
    { 'modal-footer-buttons': buttons },
  );

  return (
    <ModalFooterRS {...attributes} className={classes} />
  );
};

ModalFooter.propTypes = {
  className: PropTypes.string,
  buttons: PropTypes.bool,
};

ModalFooter.defaultProps = {
  className: '',
  buttons: false,
};

export default ModalFooter;
