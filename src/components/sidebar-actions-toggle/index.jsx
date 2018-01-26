import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import Icon from '../icon';

const toggleSideWrapper = () => {
    const sideNavWrapper = document.getElementById('sidebar-actions');
    if (sideNavWrapper.classList.contains('sidebar-actions--is-open')) {
      sideNavWrapper.classList.remove('sidebar-actions--is-open');
    } else {
      sideNavWrapper.classList.add('sidebar-actions--is-open');
    }
};

const SidebarActionsToggle = ({ children }) => (
  <Button radius="circle" color="info" className="sidebar-actions--toggler" onClick={toggleSideWrapper}>
    <Icon imgSrc="arrow-left" alt="arrow" size="xl" inverse />
  </Button>
);


export default SidebarActionsToggle;
