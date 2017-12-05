import React from 'react';
import Button from '../button';
import Icon from '../icon';
import './styles.scss';

export default props => (
  <Button size="sm" className="mb-0" action="delete" {...props}>
    <Icon imgSrc="delete" alt="delete" />Delete
  </Button>
);
