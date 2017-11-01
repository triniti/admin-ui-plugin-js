import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';
import './styles.scss';

const propTypes = {
  children: PropTypes.node,
  inline: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  theme: PropTypes.string,
};

const defaultProps = {
  tag: 'form',
};

const Form = (props) => {
  const {
    className,
    cssModule,
    inline,
    theme,
    tag: Tag,
    innerRef,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    inline ? 'form-inline' : false,
    theme ? `form-theme-${theme}` : false,
  ), cssModule);

  return (
    <Tag {...attributes} ref={innerRef} className={classes} />
  );
};

Form.propTypes = propTypes;
Form.defaultProps = defaultProps;

export default Form;
