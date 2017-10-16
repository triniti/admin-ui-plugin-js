import React from 'react';
import PopoverBody from '../popover-body';
import { warnOnce } from '../utils';

export default function PopoverContent(props) {
  warnOnce('The "PopoverContent" component has been deprecated.\nPlease use component "PopoverBody".');
  return <PopoverBody {...props} />;
}
