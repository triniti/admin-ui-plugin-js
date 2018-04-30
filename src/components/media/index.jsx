import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';
import './styles.scss';

const propTypes = {
  aspectRatio: PropTypes.string,
  body: PropTypes.bool,
  bottom: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  heading: PropTypes.bool,
  left: PropTypes.bool,
  list: PropTypes.bool,
  middle: PropTypes.bool,
  object: PropTypes.bool,
  right: PropTypes.bool,
  hover: PropTypes.bool,
  hoverOutline: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  top: PropTypes.bool,
};

const Media = (props) => {
  const {
    aspectRatio,
    body,
    bottom,
    className,
    cssModule,
    heading,
    left,
    list,
    middle,
    object,
    right,
    hover,
    hoverOutline,
    tag,
    top,
    ...attributes
  } = props;

  let defaultTag;
  if (heading) {
    defaultTag = 'h5';
  } else if (left || right) {
    defaultTag = 'a';
  } else if (object) {
    defaultTag = 'img';
  } else if (list) {
    defaultTag = 'ul';
  } else {
    defaultTag = 'div';
  }
  const Tag = tag || defaultTag;

  const classes = mapToCssModules(classNames(
    className,
    {
      'media-body': body,
      'media-heading': heading,
      'media-left': left,
      'media-right': right,
      'media-top': top,
      'media-bottom': bottom,
      'media-middle': middle,
      'media-object': object,
      'media-list': list,
      'media-hover': hover,
      'media-hover-outline': hoverOutline,
      'aspect-ratio': aspectRatio,
      [`aspect-ratio-${aspectRatio}`]: !!aspectRatio,
      media: !body && !heading && !left && !right && !top && !bottom && !middle && !object && !list && !hover && !hoverOutline,
    },
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

Media.propTypes = propTypes;

export default Media;
