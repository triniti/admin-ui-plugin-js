import React from 'react';
import Button from '../button';

export default () => (
  <footer className="main-content-footer">
    <span>
      <Button size="sm" color="danger" className={'round mr-2'}>× <span>Delete</span></Button>
      <Button size="sm" color="default" className={'round mr-2'}>Cancel</Button>
    </span>
  </footer>
);
