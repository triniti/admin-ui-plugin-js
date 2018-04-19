import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';
import './styles.scss';

const propTypes = {
  active: PropTypes.bool,
  action: PropTypes.string,
  block: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
  cssModule: PropTypes.object,
  disabled: PropTypes.bool,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  onClick: PropTypes.func,
  outline: PropTypes.bool,
  outlineText: PropTypes.bool,
  icon: PropTypes.bool,
  radius: PropTypes.string,
  size: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

const defaultProps = {
  color: 'light',
  tag: 'button',
};

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }
  }

  render() {
    let {
      active,
      action,
      block,
      className,
      cssModule,
      color,
      icon,
      outline,
      outlineText,
      radius,
      size,
      tag: Tag,
      innerRef,
      ...attributes
    } = this.props;

    const classes = mapToCssModules(classNames(
      className,
      'btn',
      `btn${outline ? '-outline' : ''}${outlineText ? '-outline-text' : ''}-${color}`,
      action ? `btn-action btn-${action}` : false,
      radius ? `btn-radius-${radius}` : false,
      block ? 'btn-block' : false,
      size ? `btn-${size}` : false,
      icon ? 'btn-icon' : false,
      { active, disabled: this.props.disabled },
    ), cssModule);

    if (attributes.href && Tag === 'button') {
      Tag = 'a';
    }

    return (
      <Tag
        type={(Tag === 'button' && attributes.onClick) ? 'button' : undefined}
        {...attributes}
        className={classes}
        ref={innerRef}
        onClick={this.onClick}
      />
    );
  }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
