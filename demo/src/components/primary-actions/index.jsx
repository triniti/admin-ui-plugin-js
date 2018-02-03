/* eslint-disable no-alert */
import React from 'react';
import { ActionButton } from '../../../../src/components';
import { Divider } from '../../../../src/components';

export default () => (
  [
    <ActionButton key="back" text="Back" icon="angle-left" color="hover" radius="circle"/>,
    <Divider horizontal="md" className="mr-3" />,
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
