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
  id: 'checkbox',
};

const Checkbox = (props) => {
  const {
    className,
    cssModule,
    type,
    id,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'checkbox-input',
  ), cssModule);

  return ([
    <Input {...attributes} type={type} id={id} className={classes} />,
    <Label for={id} className='checkbox-input-label' />,
  ])
};

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default Checkbox;
