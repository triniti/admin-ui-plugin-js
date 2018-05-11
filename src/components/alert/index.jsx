import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Alert as AlertRS } from 'reactstrap';

import './styles.scss';

const Alert = ({ className, inverse, sticky, ...attributes }) => {
  const classes = classNames(
    className,
    {
      'alert-inverse': inverse,
      'alert-sticky': sticky,
    },
  );

  return <AlertRS className={classes} {...attributes} />;
};

Alert.propTypes = {
  className: PropTypes.string,
  inverse: PropTypes.bool,
  sticky: PropTypes.bool,
};

Alert.defaultProps = {
  className: '',
  inverse: false,
  sticky: false,
};

export default Alert;
