import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  spacing: PropTypes.string,
  inset: PropTypes.bool,
  subheader: PropTypes.bool,
};

const defaultProps = {
  tag: 'div',
};

const CardHeader = (props) => {
  const {
    className,
    cssModule,
    spacing,
    inset,
    subheader,
    tag: Tag,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'card-header',
    inset ? 'card-header-inset' : false,
    subheader ? 'card-subheader' : false,
    spacing ? `card-header-spacing-${spacing}` : false,
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

CardHeader.propTypes = propTypes;
CardHeader.defaultProps = defaultProps;

export default CardHeader;
