import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';

const propTypes = {
  className: PropTypes.string,
  cssModule: PropTypes.object,
  children: PropTypes.node,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

const defaultProps = {
  tag: 'span',
};

const IconGroup = (props) => {
  const {
    children,
    className,
    cssModule,
    tag: Tag,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'icon-group',
  ), cssModule);

  return (
    <Tag {...attributes} className={classes}>
      {children}
    </Tag>
  );
};

IconGroup.propTypes = propTypes;
IconGroup.defaultProps = defaultProps;

export default IconGroup;
