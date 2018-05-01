import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormGroup as FormGroupRS } from 'reactstrap';

const FormGroup = ({ className, check, inline, ...attributes}) => {
  const classes = classNames(
    className,
    {
      'form-check' : check,
      'form-check-inline' : check && inline,
      'form-inline' : !check && inline,
    },
  );

  return <FormGroupRS {...attributes} className={classes} />;
};

FormGroup.propTypes = {
  className: PropTypes.string,
  inline: PropTypes.bool,
};

FormGroup.defaultProps = {
  className: '',
  inline: false,
  check: false,
};

export default FormGroup;
