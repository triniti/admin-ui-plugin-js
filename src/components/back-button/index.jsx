import React from 'react';
import Button from '../button';
import iconBack from './back.svg';

export default props => (
  <Button size="sm" className="mb-0" action="back" {...props}>
    <img src={iconBack} alt="back" />Back
  </Button>
);
