import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const IconGroup = ({ bottom, children, className, left, tag: Tag, ...attributes }) => {
  const classes = classNames(
    className,
    'icon-group',
    {
      'icon-group-bottom': bottom,
      'icon-group-left': left,
    },
  );

  return (
    <Tag {...attributes} className={classes} >
      {children}
    </Tag>
  );
};

IconGroup.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  left: PropTypes.bool,
  bottom: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

IconGroup.defaultProps = {
  bottom: false,
  left: false,
  tag: 'span',
};

export default IconGroup;
