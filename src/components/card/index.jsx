import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';
import './styles.scss';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  border: PropTypes.bool,
  color: PropTypes.string,
  body: PropTypes.bool,
  inverse: PropTypes.bool,
  outline: PropTypes.bool,
  dark: PropTypes.bool,
  hover: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  tag: 'div',
};

const Card = (props) => {
  const {
    className,
    cssModule,
    color,
    body,
    hover,
    outline,
    border,
    inverse,
    tag: Tag,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'card',
    inverse ? 'card-inverse' : false,
    border ? 'card-border' : false,
    body ? 'card-body' : false,
    hover ? 'card-hover' : false,
    color ? `card${outline ? '-outline' : ''}-${color}` : false,
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;
