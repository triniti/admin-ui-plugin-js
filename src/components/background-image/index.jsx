import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';
import './styles.scss';

const propTypes = {
  className: PropTypes.string,
  cssModule: PropTypes.object,
  imgSrc: PropTypes.string,
  position: PropTypes.string,
  repeat: PropTypes.string,
  size: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

const BackgroundImage = (props) => {
  const {
    className,
    cssModule,
    imgSrc,
    position,
    repeat,
    size,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'background-image',
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} style={{ backgroundImage: `url(${imgSrc})`, backgroundPosition: `${position}`, backgroundSize: `${size}`, backgroundRepeat: `${repeat}` }} />
  );
};

BackgroundImage.propTypes = propTypes;

BackgroundImage.defaultProps = {
  position: 'center center',
  repeat: 'no-repeat',
  size: 'contain',
  tag: 'div',
};

export default BackgroundImage;
