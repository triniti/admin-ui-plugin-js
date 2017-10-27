import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';
import angleRight from './angle-right.svg';
import './styles.scss';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  toggler: PropTypes.bool,
};

const defaultProps = {
  tag: 'img',
};

const Icon = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    toggler,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    toggler ? 'icon-toggler' : false,
    'icon',
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} src={angleRight} />
  );
};

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;
