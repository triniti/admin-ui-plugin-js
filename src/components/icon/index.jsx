import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';
import mapNameToIcon from './mapNameToIcon';
import './styles.scss';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  imgSrc: PropTypes.string,
  src: PropTypes.string,
  size: PropTypes.string,
  toggler: PropTypes.bool,
  color: PropTypes.string,
  border: PropTypes.bool,
  radius: PropTypes.string,
};

const defaultProps = {
  tag: 'span',
  imgSrc: 'circle',
};

const Icon = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    imgSrc,
    src,
    size,
    toggler,
    color,
    border,
    radius,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'icon',
    size ? `icon-${size}` : false,
    toggler ? 'icon-toggler' : false,
    color ? `icon-color-${color}` : false,
    border ? 'icon-border' : false,
    radius ? `icon-radius-${radius}` : false,
  ), cssModule);

  const img = src || mapNameToIcon(imgSrc);
  return (
      <Tag {...attributes} className={classes} dangerouslySetInnerHTML={{__html: img}}/>
  );
};

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;
