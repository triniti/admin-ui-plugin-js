import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';
import './styles.scss';

const propTypes = {
  color: PropTypes.string,
  pill: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  inline: PropTypes.bool,
  alert: PropTypes.bool,
};

const defaultProps = {
  color: 'default',
  pill: false,
  tag: 'span',
};

const Badge = (props) => {
  const {
    className,
    cssModule,
    color,
    pill,
    inline,
    alert,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'badge',
    `badge-${color}`,
    pill ? 'badge-pill' : false,
    inline ? 'badge-inline' : false,
    alert ? 'badge-alert' : false,
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

Badge.propTypes = propTypes;
Badge.defaultProps = defaultProps;

export default Badge;
