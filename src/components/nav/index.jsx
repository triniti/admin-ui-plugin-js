import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';
import './styles.scss';

const propTypes = {
  boxed: PropTypes.bool,
  tabs: PropTypes.bool,
  pills: PropTypes.bool,
  underline: PropTypes.bool,
  vertical: PropTypes.bool,
  justified: PropTypes.bool,
  navbar: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  size: PropTypes.string,
  sticky: PropTypes.bool,
  cssModule: PropTypes.object,
};

const defaultProps = {
  tag: 'ul',
};

const Nav = (props) => {
  const {
    className,
    cssModule,
    boxed,
    tabs,
    pills,
    underline,
    vertical,
    justified,
    navbar,
    size,
    sticky,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    size ? `nav-${size}` : false,
    sticky ? `nav-sticky` : false,
    navbar ? 'navbar-nav' : 'nav',
    {
      'nav-boxed': boxed,
      'nav-tabs': tabs,
      'nav-pills': pills,
      'nav-underline': underline,
      'nav-justified': justified,
      'flex-column': vertical,
    }
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

Nav.propTypes = propTypes;
Nav.defaultProps = defaultProps;

export default Nav;
