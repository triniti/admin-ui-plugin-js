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
  inverse: PropTypes.bool,
  toggler: PropTypes.bool,
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
    inverse,
    toggler,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'icon',
    size ? `icon-${size}` : false,
    inverse ? 'icon-inverse' : false,
    toggler ? 'icon-toggler' : false,
  ), cssModule);

  const img = src || mapNameToIcon(imgSrc);
  return (
    <Tag {...attributes} className={classes} dangerouslySetInnerHTML={{__html: img}} />
  );
};

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;
