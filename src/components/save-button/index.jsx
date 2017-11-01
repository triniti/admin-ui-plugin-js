import React from 'react';
import Button from '../button';
import iconSave from './save.svg';

export default props => (
  <Button size="sm" className="mb-0" action="save" {...props}>
    <img src={iconSave} alt="save" />Save
  </Button>
);
