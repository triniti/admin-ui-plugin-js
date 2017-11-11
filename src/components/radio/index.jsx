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
  type: 'radio',
  id: 'radio',
  name: 'radio',
};

const Radio = (props) => {
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
    'radio-input',
  ), cssModule);

  return [
    <Input {...attributes} type={type} id={id} className={classes} key={`${name}-radio-input`} />,
    <Label for={id} className="radio-input-label" key={`${name}-radio-label`} />,
  ];
};

Radio.propTypes = propTypes;
Radio.defaultProps = defaultProps;

export default Radio;
