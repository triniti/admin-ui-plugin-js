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

const CardHeader = (props) => {
  const {
    className,
    cssModule,
    spacing,
    tag: Tag,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'card-header',
    spacing ? `card-header-spacing-${spacing}` : false,
  ), cssModule);

  return (
    <Tag  {...attributes} className={classes} />
  );
};

CardHeader.propTypes = propTypes;
CardHeader.defaultProps = defaultProps;

export default CardHeader;
