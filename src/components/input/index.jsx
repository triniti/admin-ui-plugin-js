/* eslint react/prefer-stateless-function: 0 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, deprecated } from '../utils';

const propTypes = {
  addon: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  plaintext: PropTypes.bool,
  radius: PropTypes.string,
  size: PropTypes.string,
  state: deprecated(PropTypes.string, 'Please use the prop "valid"'),
  static: deprecated(PropTypes.bool, 'Please use the prop "plaintext"'),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  theme: PropTypes.string,
  type: PropTypes.string,
  valid: PropTypes.bool,
};

const defaultProps = {
  tag: 'p',
  type: 'text',
};

class Input extends React.Component {
  render() {
    let {
      addon,
      className,
      cssModule,
      innerRef,
      plaintext,
      radius,
      size,
      state,
      static: staticInput,
      tag,
      theme,
      type,
      valid,
      ...attributes
    } = this.props;

    const checkInput = ['radio', 'checkbox'].indexOf(type) > -1;

    const fileInput = type === 'file';
    const textareaInput = type === 'textarea';
    const selectInput = type === 'select';
    let Tag = selectInput || textareaInput ? type : 'input';

    let formControlClass = 'form-control';

    if (plaintext || staticInput) {
      formControlClass = `${formControlClass}-plaintext`;
      Tag = tag;
    } else if (fileInput) {
      formControlClass = `${formControlClass}-file`;
    } else if (checkInput) {
      if (addon) {
        formControlClass = null;
      } else {
        formControlClass = 'form-check-input';
      }
    }

    if (state && typeof valid === 'undefined') {
      if (state === 'danger') {
        valid = false;
      } else if (state === 'success') {
        valid = true;
      }
    }

    const classes = mapToCssModules(classNames(
      className,
      valid === false && 'is-invalid',
      valid && 'is-valid',
      size ? `form-control-${size}` : false,
      radius ? `form-control-radius-${radius}` : false,
      theme ? `form-control-theme-${theme}` : false,
      formControlClass,
    ), cssModule);

    if (Tag === 'input') {
      attributes.type = type;
    }

    return (
      <Tag {...attributes} ref={innerRef} className={classes} />
    );
  }
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
