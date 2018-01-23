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
  size: PropTypes.string,
  theme: PropTypes.string,
  offcanvas: PropTypes.string,
  right: PropTypes.bool,
};

const defaultProps = {
  tag: 'div',
};

const SideBar = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    size,
    offcanvas,
    right,
    theme,
    children,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'sidebar',
    size ? `sidebar-${size}` : false,
    offcanvas ? `sidebar-offcanvas-${offcanvas}` : false,
    right ? `sidebar-right` : `sidebar-left`,
    theme ? `sidebar-theme-${theme}` : false,
  ), cssModule);

  return (
    <Tag {...attributes} className={classes}>{children}</Tag>
  );
};

SideBar.propTypes = propTypes;
SideBar.defaultProps = defaultProps;

export default SideBar;
