import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormGroup as FormGroupRS } from 'reactstrap';

const FormGroup = ({ className, inline, ...attributes}) => {
  const classes = classNames(
    className,
    { 'form-inline' : inline },
  );

  return (
    return <FormGroupRS {...attributes} className={classes} />;
  );
};

FormGroup.propTypes = {
  className: PropTypes.string,
  inline: PropTypes.bool,
};

FormGroup.defaultProps = {
  className: '',
  inline: false,
};

export default FormGroup;