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
    { [`nav-theme-${theme}`]: !!theme },
  );

  return <NavRS {...attributes} className={classes} />;
};

Nav.propTypes = {
  className: PropTypes.string,
  sticky: PropTypes.bool,
  theme: PropTypes.string,
  underline: PropTypes.bool,
};

Nav.defaultProps = {
  className: '',
  sticky: false,
  theme: '',
  underline: false,
};

export default Nav;
