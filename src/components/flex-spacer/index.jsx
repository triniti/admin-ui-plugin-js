import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';
import './styles.scss';

const propTypes = {
  className: PropTypes.string,
  cssModule: PropTypes.object,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
};

const defaultProps = {
  tag: 'div',
};

const FlexSpacer = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    children,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'flex-spacer',
  ), cssModule);

  return (
    <Tag {...attributes} className={classes}>{children}</Tag>
  );
};

FlexSpacer.propTypes = propTypes;
FlexSpacer.defaultProps = defaultProps;

export default FlexSpacer;
