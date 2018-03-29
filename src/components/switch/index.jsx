import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';
import Input from '../input';
import Label from '../label';
import './styles.scss';

const propTypes = {
  className: PropTypes.string,
  cssModule: PropTypes.object,
  type: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  label1: PropTypes.string,
  label2: PropTypes.string,
};

const defaultProps = {
  type: 'checkbox',
  id: 'switch',
  name: 'switch',
};

const Switch = (props) => {
  const {
    className,
    cssModule,
    type,
    id,
    name,
    label1,
    label2,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'switch-input',
  ), cssModule);

  const labelClasses = mapToCssModules(classNames(
    className,
    'switch-input-label',
  ), cssModule);

  return [
    <Input type={type} id={id} className={classes} key={`${name}-switch-input`} {...attributes} />,
    <Label for={id} className={labelClasses} key={`${name}-switch-label`}>{label1 && <span>{label1}</span>}{label2 && <span>{label2}</span>}</Label>,
  ];
};

Switch.propTypes = propTypes;
Switch.defaultProps = defaultProps;

export default Switch;
