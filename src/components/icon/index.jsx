import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';
import './styles.scss';

// additional icon location
// import iconEye from 'assets/img/svg/icons/eye.svg';


const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  imgSrc: PropTypes.string,
  size: PropTypes.string,
  inverse: PropTypes.bool,
  toggler: PropTypes.bool,
};

const defaultProps = {
  tag: 'img',
  imgSrc: 'circle',
};

const Icon = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    imgSrc,
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

  return (
    <Tag {...attributes} className={classes} src={require('./' + imgSrc + '.svg')} />
  );
};

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;
