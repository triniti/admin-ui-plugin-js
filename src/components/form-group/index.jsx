import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormGroup as FormGroupRS } from 'reactstrap';

const FormGroup = ({ className, check, inline, ...attributes}) => {
  const classes = classNames(
    className,
    {
      'form-inline' : !check && inline,
    },
  );

  return <FormGroupRS check={check} inline={inline} {...attributes} className={classes} />;
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
