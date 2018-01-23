import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';
import './styles.scss';

const propTypes = {
  className: PropTypes.string,
  cssModule: PropTypes.object,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  height: PropTypes.string,
};

const defaultProps = {
  tag: 'div',
};

const FlexSpacer = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    children,
    height,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'flex-spacer',
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} style={{ height }}>{children}</Tag>
  );
};

FlexSpacer.propTypes = propTypes;
FlexSpacer.defaultProps = defaultProps;

export default FlexSpacer;
