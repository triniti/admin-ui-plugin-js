import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactSelect from 'react-select';
import './styles.scss';

const Select = ({ className, radius, size, theme, async, creatable, component, ...attributes }) => {
  let SelectComponent = component || null;

  if (!SelectComponent) {
    if (async && creatable) {
      SelectComponent = ReactSelect.AsyncCreatable;
    } else if (async) {
      SelectComponent = ReactSelect.Async;
    } else if (creatable) {
      SelectComponent = ReactSelect.Creatable;
    } else {
      SelectComponent = ReactSelect;
    }
  }

  const classes = classNames(
    className,
    'select-form-control',
    {
      [`select-form-control-radius-${radius}`]: !!radius,
      [`select-form-control-${size}`]: !!size,
      [`select-form-control-theme-${theme}`]: !!theme,
    },
  );

  return <SelectComponent className={classes} {...attributes} />;
};

Select.propTypes = {
  async: PropTypes.bool,
  creatable: PropTypes.bool,
  className: PropTypes.string,
  radius: PropTypes.string,
  size: PropTypes.string,
  component: PropTypes.oneOf([
    ReactSelect,
    ReactSelect.Creatable,
    ReactSelect.Async,
    ReactSelect.AsyncCreatable,
  ]),
  theme: PropTypes.string,
};

Select.defaultProps = {
  async: false,
  creatable: false,
  className: '',
  radius: '',
  size: '',
  component: undefined,
  theme: '',
};

export default Select;
