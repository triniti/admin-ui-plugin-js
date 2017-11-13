import React from 'react';
import Button from '../button';
import Icon from '../icon';

export default props => (
  <Button size="sm" className="mb-0" action="save" {...props}>
    <Icon imgSrc="save" alt="save" />Save
  </Button>
);
