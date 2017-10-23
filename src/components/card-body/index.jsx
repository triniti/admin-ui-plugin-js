import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  spacing: PropTypes.string,
};

const defaultProps = {
  tag: 'div',
};

const CardBody = (props) => {
  const {
    className,
    cssModule,
    spacing,
    tag: Tag,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'card-body',
    spacing ? `card-body-spacing-${spacing}` : false,
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

CardBody.propTypes = propTypes;
CardBody.defaultProps = defaultProps;

export default CardBody;
