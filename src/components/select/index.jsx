import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactSelect from 'react-select';
import Async from 'react-select/async';
import Creatable from 'react-select/creatable';
import AsyncCreatable from 'react-select/async-creatable';
import './styles.scss';

const customStyles = {
  control: styles => ({  }),
  clearIndicator: styles => ({  }),
  dropdownIndicator: styles => ({  }),
  indicatorSeparator: styles => ({  }),
  menu: styles => ({  }),
  option: styles => ({  }),
  placeholder: styles => ({  }),
  singleValue: styles => ({  }),
  valueContainer: styles => ({  }),
};

const Select = ({
  async,
  className,
  component,
  creatable,
  radius,
  size,
  theme,
  forwardRef,
  ...attributes
}) => {
  let SelectComponent = component || null;

  if (!SelectComponent) {
    if (async && creatable) {
      SelectComponent = AsyncCreatable;
    } else if (async) {
      SelectComponent = Async;
    } else if (creatable) {
      SelectComponent = Creatable;
    } else {
      SelectComponent = ReactSelect;
    }
  }

  const classes = classNames(
    className,
    'select',
    {
      [`select--radius-${radius}`]: !!radius,
      [`select--size-${size}`]: !!size,
      [`select--theme-${theme}`]: !!theme,
    },
  );

  if (typeof forwardRef === 'function') {
    attributes.ref = (ref) => { forwardRef(ref); };
  }

  return <SelectComponent
            {...attributes}
            className={classes}
            classNamePrefix='select'
            styles={customStyles}
          />;
};

Select.propTypes = {
  async: PropTypes.bool,
  creatable: PropTypes.bool,
  className: PropTypes.string,
  forwardRef: PropTypes.func,
  radius: PropTypes.string,
  size: PropTypes.string,
  component: PropTypes.oneOf([
    ReactSelect,
    Creatable,
    Async,
    AsyncCreatable,
  ]),
};

Select.defaultProps = {
  async: false,
  creatable: false,
  className: '',
  forwardRef: undefined,
  radius: '',
  size: '',
  component: undefined,
};

export default Select;
