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
  nav: PropTypes.bool,
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
    nav,
    children,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'sidebar',
    nav ? `sidebar-nav` : `sidebar-actions`,
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} id={id}>
      {!nav &&
        <SidebarActionsToggle/>
      }

      {children}
    </Tag>
  );
};

Sidebar.propTypes = propTypes;
Sidebar.defaultProps = defaultProps;

export default Sidebar;
