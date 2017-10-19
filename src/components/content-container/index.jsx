// react
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles.scss';

const ContentContainer = ({ children, className }) => (
  <div className={classnames('content-container', className)}>{children}</div>
);

ContentContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default ContentContainer;
