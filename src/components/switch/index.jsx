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
};

const defaultProps = {
  type: 'checkbox',
  id: 'switch',
};

const Switch = (props) => {
  const {
    className,
    cssModule,
    type,
    id,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'switch-input',
  ), cssModule);

  return ([
    <Input {...attributes} type={type} name={id} id={id} className={classes} />,
    <Label for={id} />,
  ])
};

Switch.propTypes = propTypes;
Switch.defaultProps = defaultProps;

export default Switch;
