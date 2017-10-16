// react
import React from 'react';
import PropTypes from 'prop-types';

// external components
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';


const RouterLink = ({ navTab, breadcrumbItem, to, className, ...attributes }) => (
  <NavLink
    className={classNames({
      'navbar-tabs-link': navTab,
      className,
    })}
    activeClassName="active"
    exact
    to={to}
    {...attributes}
  />
);

RouterLink.propTypes = {
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
  breadcrumbItem: PropTypes.bool,
  navTab: PropTypes.bool,
};

RouterLink.defaultProps = {
  breadcrumbItem: false,
  navTab: false,
};

export default RouterLink;
