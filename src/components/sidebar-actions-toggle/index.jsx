import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import Icon from '../icon';

const SidebarActionsToggle = ({ children }) => (
  <Button radius="circle" color="info" className="btn-sidebar-actions" onClick={this.toggleSideWrapper}>
    <Icon imgSrc="arrow-left" alt="arrow" size="xl" inverse />
  </Button>
);


export default SidebarActionsToggle;
