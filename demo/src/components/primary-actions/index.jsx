/* eslint-disable no-alert */
import React from 'react';
import { ActionButton } from '../../../../src/components';

export default () => (
  [
    <ActionButton key="back" text="Back" icon="angle-double-left" color="hover-bg" />,
    <ActionButton key="delete" text="Delete" icon="delete" outline />,
    <ActionButton key="save" text="Save" icon="save" color="primary" className="icon-inverse"/>,
    <ActionButton
      key="save-and-close"
      text="Save & Close"
      onClick={() => window.alert('Save & Close clicked')}
      color="primary"
      outline
    />,
  ]
);
