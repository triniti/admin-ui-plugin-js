import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

const RouterLink = ({ navTab, to, className, ...attributes }) => (
  <NavLink
    className={classNames({
      'nav-link': navTab,
      [className]: !!className,
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
  navTab: PropTypes.bool,
};

RouterLink.defaultProps = {
  navTab: false,
};

export default RouterLink;
