import React from 'react';
import Button from '../button';
import iconDelete from './delete.svg';
import './styles.scss';

export default props => (
  <Button size="sm" className="mb-0" action="delete" {...props}>
    <img src={iconDelete} alt="delete" />Delete
  </Button>
);
