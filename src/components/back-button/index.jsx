import React from 'react';
import Button from '../button';
import Icon from '../icon';

export default props => (
  <Button size="sm" className="mb-0" action="back" {...props}>
    <Icon imgSrc="back" alt="back" size="xs" />Back
  </Button>
);
