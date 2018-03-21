import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';
import './styles.scss';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
  cssModule: PropTypes.object,
  strokeWidth: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  width: PropTypes.string,
};

const defaultProps = {
  color: '#d9d9db',
  strokeWidth: '6',
  tag: 'div',
  width: '33',
  widthDefault: '33',
};

const Spinner = (props) => {
  const {
    children,
    className,
    cssModule,
    color,
    strokeWidth,
    tag: Tag,
    width,
    widthDefault,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'spinner-container',
  ), cssModule);

  return (

  <Tag className={classes} {...attributes} style={{ height: `${width}px` }}>
    <svg
      className="spinner-animation"
      width={`${width}px`}
      height={`${width}px`}
      viewBox="0 0 66 66"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle className="spinner-animation-path" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" cx="33" cy="33" r={widthDefault - strokeWidth/2} />
    </svg>
    <span className="spinner-children">{children}</span>
  </Tag>
    );
};


Spinner.propTypes = propTypes;
Spinner.defaultProps = defaultProps;

export default Spinner;



