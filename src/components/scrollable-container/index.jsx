import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';
import './styles.scss';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

const defaultProps = {
  tag: 'div',
};

const ScrollableContainer = (props) => {
  const {
    children,
    className,
    cssModule,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'scrollable-container',
  ), cssModule);

  return (
    <Tag {...attributes} className={classes}>{children}</Tag>
  );
};

ScrollableContainer.propTypes = propTypes;
ScrollableContainer.defaultProps = defaultProps;

export default ScrollableContainer;
