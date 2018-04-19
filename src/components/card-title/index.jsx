import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  section: PropTypes.bool,
};

const defaultProps = {
  tag: 'h3',
};

const CardTitle = (props) => {
  const {
    className,
    cssModule,
    section,
    tag: Tag,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'card-title',
    section ? 'card-section-title' : false,
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

CardTitle.propTypes = propTypes;
CardTitle.defaultProps = defaultProps;

export default CardTitle;
