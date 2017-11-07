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
  toggler: PropTypes.bool,
  imgSrc: PropTypes.string,
  size: PropTypes.string,
};

const defaultProps = {
  tag: 'img',
  imgSrc: 'close',
};

const Icon = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    toggler,
    imgSrc,
    size,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    toggler ? 'icon-toggler' : false,
    'icon',
    size ? `icon-${size}` : false,
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} src={require('./' + imgSrc + '.svg')} />
  );
};

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;
