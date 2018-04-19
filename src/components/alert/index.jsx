import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';
import { Alert as AlertRS } from 'reactstrap';
import './styles.scss';

const propTypes = {
  className: PropTypes.string,
  cssModule: PropTypes.object,
  inverse: PropTypes.bool,
  sticky: PropTypes.bool,
};

function Alert(props) {
  const {
    className,
    cssModule,
    inverse,
    sticky,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    inverse ? 'alert-inverse' : false,
    sticky ? 'alert-sticky' : false,
  ), cssModule);

  return (
    <AlertRS {...attributes} className={classes} />
  );
}

Alert.propTypes = propTypes;

export default Alert;
