// react
import React from 'react';
import PropTypes from 'prop-types';
import BackButton from '../back-button';
import DeleteButton from '../delete-button';
import SaveButton from '../save-button';

const PageActions = ({ children }) => (
  <div className="page-actions">
    {children}
    <BackButton/>
    <DeleteButton/>
    <SaveButton/>
  </div>
);

PageActions.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

PageActions.defaultProps = {
  title: '',
};

export default PageActions;
