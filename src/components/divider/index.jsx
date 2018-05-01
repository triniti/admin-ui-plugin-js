import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.scss';

const Divider = ({ className, horizontal, size, tag: Tag, ...attributes }) => {
  const classes = classNames(
    className,
    'divider',
    horizontal ? 'divider-horizontal' : 'divider-vertical',
    {
      [`divider-${size}`]: !!size,
    },
  );

  return (
    <Tag {...attributes} className={classes} />
  );
};

Divider.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  size: PropTypes.string,
  horizontal: PropTypes.bool,
};

Divider.defaultProps = {
  tag: 'div',
};

export default Divider;
