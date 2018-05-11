import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Label } from 'reactstrap';
import Input from '../input';
import './styles.scss';

const Switch = ({ className, type, id, label1, label2, ...attributes }) => {
  const classes = classNames(
    className,
    'switch-input',
  );

  const labelClasses = classNames(
    className,
    'switch-input-label',
  );

  return [
    <Input type={type} id={id} className={classes} key={`${id}-switch-input`} {...attributes} />,
    <Label for={id} className={labelClasses} key={`${id}-switch-label`}>{label1 && <span>{label1}</span>}{label2 && <span>{label2}</span>}</Label>,
  ];
};

Switch.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  label1: PropTypes.string,
  label2: PropTypes.string,
};

Switch.defaultProps = {
  className: '',
  label1: '',
  label2: '',
  type: 'checkbox',
};

export default Switch;
