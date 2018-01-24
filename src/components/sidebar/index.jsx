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
  left: PropTypes.bool,
  actions: PropTypes.bool,
};

const defaultProps = {
  tag: 'aside',
};

const Sidebar = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    size,
    offcanvas,
    left,
    theme,
    actions,
    children,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'sidebar',
    size ? `sidebar-${size}` : false,
    offcanvas ? `sidebar-offcanvas-${offcanvas}` : false,
    left ? 'sidebar-left' : 'sidebar-right',
    theme ? `sidebar-theme-${theme}` : false,
    actions ? 'sidebar-actions' : false,
  ), cssModule);

  return (
    <Tag {...attributes} className={classes}>{children}</Tag>
  );
};

Sidebar.propTypes = propTypes;
Sidebar.defaultProps = defaultProps;

export default Sidebar;
