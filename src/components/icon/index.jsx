import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import mapNameToIcon from './mapNameToIcon';
import './styles.scss';

const Icon = ({ alert, border, className, color, imgSrc, noborder, outline, radius, src, size, tag: Tag, toggler, ...attributes }) => {
  const classes = classNames(
    className,
    'icon',
    {
      'icon-alert' : alert,
      'icon-border' : border,
      'icon-noborder' : noborder,
      'icon-outline' : outline,
      'icon-toggler' : toggler,
    },
    {
      [`icon-alert-${size}`]: !!alert && !!size,
      [`icon-color-${color}`]: !!color,
      [`icon-radius-${radius}`]: !!radius,
      [`icon-${size}`]: !!size,
    },
  );

  const img = src || mapNameToIcon(imgSrc);
  return (
      <Tag {...attributes} className={classes} dangerouslySetInnerHTML={{__html: img}}/>
  );
};

Icon.propTypes = {
  alert: PropTypes.bool,
  border: PropTypes.bool,
  className: PropTypes.string,
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

Icon.defaultProps = {
  tag: 'span',
  imgSrc: 'circle',
};

export default Icon;
