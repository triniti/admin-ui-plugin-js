// react
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const PageHeader = ({ title, children }) => (
  <div className="page-header">
    {title && <h1 className="page-header-title">{title}</h1>}
    {children}
  </div>
);

PageHeader.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

PageHeader.defaultProps = {
  title: '',
};

export default PageHeader;
