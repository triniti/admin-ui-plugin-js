import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Target } from 'react-popper';
import { mapToCssModules } from '../utils';
import Button from '../button';

const propTypes = {
  'aria-haspopup': PropTypes.bool,
  caret: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
  cssModule: PropTypes.object,
  disabled: PropTypes.bool,
  nav: PropTypes.bool,
  onClick: PropTypes.func,
  split: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

const defaultProps = {
  'aria-haspopup': true,
  color: 'light',
};

const contextTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

class DropdownToggle extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }

    if (this.props.nav && !this.props.tag) {
      e.preventDefault();
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }

    this.context.toggle(e);
  }

  render() {
    const {
      className, color, cssModule, caret, split, nav, tag, ...props
    } = this.props;
    const ariaLabel = props['aria-label'] || 'Toggle Dropdown';
    const classes = mapToCssModules(classNames(
      className,
      {
        'dropdown-toggle': caret || split,
        'dropdown-toggle-split': split,
        'nav-link': nav,
      },
    ), cssModule);
    const children = props.children || <span className="sr-only">{ariaLabel}</span>;

    let Tag;

    if (nav && !tag) {
      Tag = 'a';
      props.href = '#';
    } else if (!tag) {
      Tag = Button;
      props.color = color;
      props.cssModule = cssModule;
    } else {
      Tag = tag;
    }

    return (
      <Target
        {...props}
        className={classes}
        component={Tag}
        onClick={this.onClick}
        aria-expanded={this.context.isOpen}
        children={children}
      />
    );
  }
}

DropdownToggle.propTypes = propTypes;
DropdownToggle.defaultProps = defaultProps;
DropdownToggle.contextTypes = contextTypes;

export default DropdownToggle;
