import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const PageActions = ({ children }) => (
  <div className="page-actions">
    {children}
  </div>
);

PageActions.propTypes = {
  children: PropTypes.node,
};

export default PageActions;
