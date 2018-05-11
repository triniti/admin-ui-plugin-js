import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Nav as NavRS } from 'reactstrap';
import './styles.scss';

const Nav = ({ className, sticky, theme, underline, ...attributes }) => {

  const classes = classNames(
    className,
    {
      'nav-sticky': sticky,
      'nav-underline': underline,
    },
  );

  return <NavRS {...attributes} className={classes} />;
};

Nav.propTypes = {
  className: PropTypes.string,
  sticky: PropTypes.bool,
  underline: PropTypes.bool,
};

Nav.defaultProps = {
  className: '',
  sticky: false,
  underline: false,
};

export default Nav;
