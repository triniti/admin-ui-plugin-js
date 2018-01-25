import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles.scss';

const SplitContent = ({ children, className }) => (
  <div className={classnames('split-content', className)}>{children}</div>
);

SplitContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default SplitContent;
