import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles.scss';

const ScreenContent = ({ children, className }) => (
  <div className={classnames('screen-content', className)}>{children}</div>
);

ScreenContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default ScreenContent;
