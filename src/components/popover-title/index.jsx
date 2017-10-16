import React from 'react';
import PopoverHeader from '../popover-header';
import { warnOnce } from '../utils';

export default function PopoverTitle(props) {
  warnOnce('The "PopoverTitle" component has been deprecated.\nPlease use component "PopoverHeader".');
  return <PopoverHeader {...props} />;
}
