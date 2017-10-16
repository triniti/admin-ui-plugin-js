// react
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';


const PageHeader = ({ title = null, children }) => (
  <div className="page-header">
    {title != null &&
    <h1 className="page-header-title">{title}</h1>
    }
    {children}
  </div>
);

PageHeader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default PageHeader;
