import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Badge as BadgeRS } from 'reactstrap';
import './styles.scss';

const Badge = ({ alert, className, color, ...attributes }) => {
  const classes = classNames(className, { 'badge-alert': alert });
  return <BadgeRS {...attributes} color={color} className={classes} />;
};

Badge.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  alert: PropTypes.bool,
};

Badge.defaultProps = {
  className: '',
  alert: false,
  color: 'default',
};

export default Badge;
