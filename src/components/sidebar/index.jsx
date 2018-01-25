import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SidebarActionsToggle from '../sidebar-actions-toggle';
import { mapToCssModules } from '../utils';
import './styles.scss';

const propTypes = {
  className: PropTypes.string,
  cssModule: PropTypes.object,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  id: PropTypes.string,
  size: PropTypes.string,
  theme: PropTypes.string,
  left: PropTypes.bool,
  actions: PropTypes.bool,
};

const defaultProps = {
  tag: 'aside',
  id: 'sidebar-actions',
};

const Sidebar = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    id,
    size,
    theme,
    left,
    actions,
    children,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'sidebar',
    size ? `sidebar-${size}` : false,
    theme ? `sidebar-theme-${theme}` : false,
    left ? 'sidebar-left' : 'sidebar-right',
    actions ? `sidebar-actions` : false,
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} id={id}>
      {actions &&
        <SidebarActionsToggle/>
      }

      {children}
    </Tag>
  );
};

Sidebar.propTypes = propTypes;
Sidebar.defaultProps = defaultProps;

export default Sidebar;
