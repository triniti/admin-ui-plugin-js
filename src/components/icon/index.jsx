import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';
import mapNameToIcon from './mapNameToIcon';
import './styles.scss';

const propTypes = {
  alert: PropTypes.bool,
  border: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  color: PropTypes.string,
  imgSrc: PropTypes.string,
  noborder: PropTypes.bool,
  outline: PropTypes.bool,
  radius: PropTypes.string,
  src: PropTypes.string,
  size: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  toggler: PropTypes.bool,
};

const defaultProps = {
  tag: 'span',
  imgSrc: 'circle',
};

const Icon = (props) => {
  const {
    alert,
    border,
    className,
    color,
    cssModule,
    imgSrc,
    noborder,
    outline,
    radius,
    src,
    size,
    tag: Tag,
    toggler,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'icon',
    alert ? 'icon-alert' : false,
    (alert && size) ? `icon-alert-${size}` : false,
    color ? `icon-color-${color}` : false,
    border ? 'icon-border' : false,
    noborder ? 'icon-noborder' : false,
    outline ? 'icon-outline' : false,
    radius ? `icon-radius-${radius}` : false,
    size ? `icon-${size}` : false,
    toggler ? 'icon-toggler' : false,
  ), cssModule);

  const img = src || mapNameToIcon(imgSrc);
  return (
      <Tag {...attributes} className={classes} dangerouslySetInnerHTML={{__html: img}}/>
  );
};

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;
