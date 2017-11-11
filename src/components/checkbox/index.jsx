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
};

const defaultProps = {
  type: 'checkbox',
  id: 'checkbox',
  name: 'checkbox',
};

const Checkbox = (props) => {
  const {
    className,
    cssModule,
    type,
    id,
    name,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'checkbox-input',
  ), cssModule);

  return [
    <Input type={type} id={id} className={classes} key={`${name}-checkbox-input`} {...attributes} />,
    <Label for={id} className='checkbox-input-label' key={`${name}-checkbox-label`} />,
  ];
};

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default Checkbox;
