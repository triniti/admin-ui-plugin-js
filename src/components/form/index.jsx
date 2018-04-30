import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Form as FormRS } from 'reactstrap';
import './styles.scss';

const Form = ({ className, inline, theme, ...attributes }) => {
  const classes = classNames(
    className,
    { 'form-inline': inline },
    { [`form-theme-${theme}`]: !!theme },
  );

  return <FormRS {...attributes} className={classes} />;
};

Form.propTypes = {
  className: PropTypes.string,
  inline: PropTypes.bool,
  theme: PropTypes.string,
};

Form.defaultProps = {
  className: '',
  inline: false,
  theme: '',
};

export default Form;
