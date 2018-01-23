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

const SideBarContainer = (props) => {
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
    'sidebar-container',
    size ? `sidebar-container-${size}` : false,
    offcanvas ? `sidebar-container-offcanvas-${offcanvas}` : false,
    right ? `sidebar-container-right` : `sidebar-container-left`,
    theme ? `sidebar-container-theme-${theme}` : false,
  ), cssModule);

  return (
    <Tag {...attributes} className={classes}>{children}</Tag>
  );
};

SideBarContainer.propTypes = propTypes;
SideBarContainer.defaultProps = defaultProps;

export default SideBarContainer;
