import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';
import './styles.scss';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  vertical: PropTypes.string,
  horizontal: PropTypes.string,
};

const defaultProps = {
  tag: 'div',
};

const Divider = (props) => {
  const {
    className,
    cssModule,
    vertical,
    horizontal,
    tag: Tag,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'divider',
    vertical ? ` divider-vertical-${vertical}` : false,
    horizontal ? ` divider-horizontal-${horizontal}` : false,
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

Divider.propTypes = propTypes;
Divider.defaultProps = defaultProps;

export default Divider;