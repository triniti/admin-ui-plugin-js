import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';

const PageActionButton = ({ children, ...rest }) => (
  <Button size="sm" className="mb-0" action="save" {...rest}>
    {children}
  </Button>
);

PageActionButton.propTypes = {
  children: PropTypes.node,
};

export default PageActionButton;
