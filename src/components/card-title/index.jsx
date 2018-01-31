import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  display: PropTypes.string,
  section: PropTypes.bool,
};

const defaultProps = {
  display: '',
  tag: 'h3',
};

const CardTitle = (props) => {
  const {
    className,
    cssModule,
    display,
    section,
    tag: Tag,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'card-title',
    display ? `display-${display}` : false,
    section ? `card-section-title` : false,
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

CardTitle.propTypes = propTypes;
CardTitle.defaultProps = defaultProps;

export default CardTitle;
