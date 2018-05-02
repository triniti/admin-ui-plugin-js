import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.scss';

const Spinner = (props) => {
  const {
    centered,
    children,
    className,
    color,
    dispatch,
    isAuthenticated,
    staticContext,
    strokeWidth,
    tag: Tag,
    width,
    widthDefault,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'spinner-container',
    {
      'spinner-centered': centered,
    },
  );

  return (
  <Tag className={classes} {...attributes}>
    <span style={{ height: `${width}px` }}>
    <svg
      className="spinner-animation"
      width={`${width}px`}
      height={`${width}px`}
      viewBox="0 0 66 66"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle className="spinner-animation-path" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" cx="33" cy="33" r={widthDefault - strokeWidth/2} />
    </svg>
    </span>
    <span className="spinner-children">{children}</span>
  </Tag>
    );
};


Spinner.propTypes = {
  centered: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
  strokeWidth: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  width: PropTypes.string,
};

Spinner.defaultProps = {
  centered: false,
  className: '',
  color: '#d9d9db',
  strokeWidth: '6',
  tag: 'div',
  width: '33',
  widthDefault: '33',
};

export default Spinner;



